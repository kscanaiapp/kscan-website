# nuke-and-boot.ps1
# ---------------------------------------------------------------
# Kills every zombie Node.js process, wipes the .next build cache,
# then starts the Next.js dev server bound to 127.0.0.1 (IPv4).
#
# Run from the project root:
#   npm run dev:fresh
#   -- or directly --
#   powershell -ExecutionPolicy Bypass -File .\scripts\nuke-and-boot.ps1
# ---------------------------------------------------------------

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# ── Step 1: Kill zombie Node processes ─────────────────────────
Write-Host "`n[1/3] Killing zombie Node.js processes..." -ForegroundColor Cyan

$nodeProcs = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($nodeProcs) {
    $nodeProcs | ForEach-Object {
        Write-Host "  Stopping PID $($_.Id) ($($_.ProcessName))"
        Stop-Process -Id $_.Id -Force
    }
    # Brief pause so Windows releases the socket handles
    Start-Sleep -Milliseconds 800
    Write-Host "  Done — all Node processes stopped." -ForegroundColor Green
} else {
    Write-Host "  No Node processes found. Skipping." -ForegroundColor Yellow
}

# ── Step 2: Wipe the .next cache ───────────────────────────────
Write-Host "`n[2/3] Clearing .next build cache..." -ForegroundColor Cyan

$nextDir = Join-Path $PSScriptRoot ".." ".next"
$nextDir = [System.IO.Path]::GetFullPath($nextDir)

if (Test-Path $nextDir) {
    Remove-Item -Recurse -Force $nextDir
    Write-Host "  Deleted: $nextDir" -ForegroundColor Green
} else {
    Write-Host "  .next directory not found. Skipping." -ForegroundColor Yellow
}

# ── Step 3: Verify port 3000 is free ───────────────────────────
Write-Host "`n[3/3] Checking port 3000 is free..." -ForegroundColor Cyan

$portInUse = netstat -ano | Select-String ":3000 " | Select-String "LISTENING"
if ($portInUse) {
    Write-Host "  WARNING: Something is still listening on port 3000:" -ForegroundColor Red
    Write-Host $portInUse
    Write-Host "  You may need to manually kill the process listed above (taskkill /PID <PID> /F)."
    Write-Host "  Continuing anyway — Next.js will try the next available port."
} else {
    Write-Host "  Port 3000 is free." -ForegroundColor Green
}

# ── Boot the dev server ────────────────────────────────────────
Write-Host "`n Starting Next.js dev server on http://127.0.0.1:3000 ...`n" -ForegroundColor Magenta

# Change to the project root (one level up from /scripts)
Set-Location (Join-Path $PSScriptRoot "..")

npm run dev
