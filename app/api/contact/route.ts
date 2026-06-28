import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import type { ContactFormData } from "@/types";

function validateForm(data: ContactFormData): string | null {
  if (!data.name?.trim()) return "Name is required";
  if (!data.email?.trim()) return "Email is required";
  if (!data.phone?.trim()) return "Phone number is required";
  if (!data.message?.trim()) return "Message is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) return "Invalid email address";

  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const validationError = validateForm(body);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const result = await sendContactEmail(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
