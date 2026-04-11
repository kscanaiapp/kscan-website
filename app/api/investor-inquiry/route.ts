import { NextResponse } from "next/server";
import { z } from "zod";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const bodySchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address."),
  firm: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required."),
  page: z.string().trim().optional(),
});

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { status: "error", message: "Service is not configured." },
      { status: 500 },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = bodySchema.safeParse(rawBody);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid request.";
    return NextResponse.json({ status: "error", message }, { status: 400 });
  }

  const { name, email, firm, message, page } = parsed.data;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/investor_inquiries`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        email,
        firm: firm ?? null,
        message,
        page: page ?? null,
      }),
      cache: "no-store",
    });

    if (response.ok) {
      return NextResponse.json({ status: "success" });
    }

    return NextResponse.json(
      { status: "error", message: "Unable to submit inquiry. Please try again." },
      { status: 500 },
    );
  } catch {
    return NextResponse.json(
      { status: "error", message: "Unable to submit inquiry. Please try again." },
      { status: 500 },
    );
  }
}
