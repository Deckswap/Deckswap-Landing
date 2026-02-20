import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();
    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.contacts.create({
      audienceId,
      email: email.trim().toLowerCase(),
      unsubscribed: false,
    });

    if (error) {
      console.error("Resend contact create error:", error);
      if (error.message?.toLowerCase().includes("already exists")) {
        return NextResponse.json(
          { error: "This email is already on the list." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: error.message || "Failed to join waitlist" },
        { status: 422 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "You're on the list!",
    });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
