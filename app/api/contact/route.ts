import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function requiredEnvMissing(): boolean {
  return !process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS;
}

export async function POST(request: Request) {
  try {
    if (requiredEnvMissing()) {
      return NextResponse.json(
        { error: "Email service not configured. Missing SMTP environment variables." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const project = String(body.project ?? "").trim();

    if (!name || !email || !project || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProject = escapeHtml(project);

    const smtpPort = Number(process.env.SMTP_PORT);
    if (Number.isNaN(smtpPort)) {
      return NextResponse.json({ error: "SMTP_PORT must be a valid number." }, { status: 503 });
    }
    const toEmail = process.env.CONTACT_TO ?? "boglioneagustin@gmail.com";
    const fromEmail = process.env.CONTACT_FROM ?? process.env.SMTP_USER!;
    const secure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Project details:",
        project,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
          <h2 style="margin: 0 0 16px;">New contact form message</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 16px 0 8px;"><strong>Project details:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${safeProject}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: unknown) {
    const smtpError = error as { code?: string; message?: string; response?: string };
    console.error("Contact API error:", {
      code: smtpError?.code,
      message: smtpError?.message,
      response: smtpError?.response,
    });

    if (smtpError?.code === "EAUTH") {
      return NextResponse.json(
        { error: "SMTP authentication failed. Check SMTP_USER / SMTP_PASS (App Password)." },
        { status: 500 },
      );
    }

    if (smtpError?.code === "ESOCKET") {
      return NextResponse.json(
        { error: "SMTP connection failed. Check SMTP_HOST / SMTP_PORT and provider rules." },
        { status: 500 },
      );
    }

    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
