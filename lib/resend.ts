import { Resend } from "resend";
import type { ContactFormData } from "@/types";
import { siteConfig } from "@/lib/config";

/**
 * Resend email utility.
 * To activate: add RESEND_API_KEY to your .env.local file.
 * Get your API key at https://resend.com
 */
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendContactEmail(data: ContactFormData) {
  if (!resend) {
    console.warn(
      "Resend not configured. Set RESEND_API_KEY in .env.local to enable email."
    );
    return { success: false, error: "Email service not configured" };
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const toEmail =
    process.env.CONTACT_EMAIL ?? siteConfig.business.email;

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.business.name} <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `New Enquiry from ${data.name}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}
