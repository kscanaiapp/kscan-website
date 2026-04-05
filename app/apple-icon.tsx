import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same emblem, scaled to 180×180 for iOS home screen.
// A slightly larger inner circle padding (94%) makes the
// gold mark breathe more at this size.
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gGold" x1="22%" y1="6%" x2="78%" y2="94%" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#5C3D00"/>
      <stop offset="12%"  stop-color="#A87010"/>
      <stop offset="26%"  stop-color="#D4A832"/>
      <stop offset="40%"  stop-color="#F2DC88"/>
      <stop offset="52%"  stop-color="#F8EC9C"/>
      <stop offset="64%"  stop-color="#DDB838"/>
      <stop offset="78%"  stop-color="#9E7010"/>
      <stop offset="100%" stop-color="#4E3200"/>
    </linearGradient>
    <linearGradient id="gSpec" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#FFFFFF" stop-opacity="0.22"/>
      <stop offset="35%"  stop-color="#FFFFFF" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="gRing" x1="15%" y1="0%" x2="85%" y2="100%" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#3C2600"/>
      <stop offset="18%"  stop-color="#9A7010"/>
      <stop offset="38%"  stop-color="#DDB838"/>
      <stop offset="52%"  stop-color="#F0DC80"/>
      <stop offset="68%"  stop-color="#C09020"/>
      <stop offset="84%"  stop-color="#7A5208"/>
      <stop offset="100%" stop-color="#3C2600"/>
    </linearGradient>
    <radialGradient id="gBg" cx="50%" cy="42%" r="54%">
      <stop offset="0%"   stop-color="#130D01"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <clipPath id="cc"><circle cx="50" cy="50" r="43"/></clipPath>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#gBg)"/>
  <circle cx="50" cy="50" r="46.8" fill="none" stroke="url(#gRing)" stroke-width="2.6"/>
  <circle cx="50" cy="50" r="44.4" fill="none" stroke="url(#gRing)" stroke-width="0.6" opacity="0.28"/>
  <g clip-path="url(#cc)">
    <path d="M 31 22.5 C 31 20.5,35 19,38 20.5 C 40 21.5,41 23,41 24.5 L 41 75.5 C 41 77,39.5 79,37 79.5 C 34.5 80,31 78.5,31 77 Z" fill="url(#gGold)"/>
    <path d="M 39.5 48.5 C 39.5 46.5,41 44.5,43 43 C 49 38,56 32.5,62.5 27.5 C 65.5 25,68.5 23,70.5 22.5 C 71.5 22,72.5 22.5,72.5 23.5 C 72.5 24.5,71 26.5,68.5 28.5 C 66 30.5,63 32.5,59.5 35.5 C 53.5 40.5,47 46,42 51 C 40.5 52.5,39.5 52,39.5 50.5 Z" fill="url(#gGold)"/>
    <path d="M 39.5 53.5 C 40 52.5,42 52.5,44 54 C 49.5 58,55 62.5,59 66.5 C 62.5 70,65.5 73,67 75.5 C 68.5 78,68.5 80.5,67 81 C 65.5 81.5,63 80,61 78 C 59 76,56.5 73.5,53.5 70.5 C 48.5 66,43 61,40.5 58 C 39.5 56.5,39.5 54.5,39.5 53.5 Z" fill="url(#gGold)"/>
    <path d="M 31 22.5 C 31 20.5,35 19,38 20.5 C 40 21.5,41 23,41 30 L 41 50 L 31 50 Z" fill="url(#gSpec)"/>
    <path d="M 39.5 48.5 C 39.5 46.5,41 44.5,43 43 C 47.5 39.5,52 36,55 33.5 C 56 33,56.5 33.5,55.5 34.5 C 52.5 37,48 40.5,43.5 44.5 C 42 45.5,40.5 47,39.5 48.5 Z" fill="url(#gSpec)" opacity="0.55"/>
  </g>
</svg>`;

const dataUri = `data:image/svg+xml;base64,${Buffer.from(SVG).toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: "22%", // iOS applies its own squircle mask, but this
                               // ensures safe framing if rendered flat
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dataUri} width={164} height={164} alt="" />
      </div>
    ),
    size,
  );
}
