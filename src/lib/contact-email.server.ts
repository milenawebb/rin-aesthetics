import type { ContactFormInput } from "./contact-schema";

export const CONTACT_SEND_FAILURE = "Your message could not be sent. Please text (434) 217-5300 instead.";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactEmail(data: ContactFormInput, apiKey: string | undefined, request: typeof fetch = fetch) {
  if (!apiKey) return { sent: false, message: CONTACT_SEND_FAILURE };
  try {
    const response = await request("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: "RIN Aesthetic Practice <website@rinaestheticsva.com>",
        to: ["info@rinaestheticsva.com"],
        reply_to: data.email,
        subject: `New inquiry from the website: ${data.name}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Email:</strong> ${escapeHtml(data.email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(data.message).replaceAll("\n", "<br>")}</p>`,
      }),
    });
    if (!response.ok) {
      console.error(`Contact email rejected by Resend [${response.status}]`);
      return { sent: false, message: CONTACT_SEND_FAILURE };
    }
    const result: { id?: string } = await response.json();
    if (!result.id) return { sent: false, message: CONTACT_SEND_FAILURE };
    console.info("Contact email accepted by Resend", { id: result.id });
    return { sent: true, message: "Thank you. Your message has been sent." };
  } catch {
    console.error("Contact email request failed");
    return { sent: false, message: CONTACT_SEND_FAILURE };
  }
}