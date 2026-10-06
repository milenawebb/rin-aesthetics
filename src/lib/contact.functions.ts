import { createServerFn } from "@tanstack/react-start";
import { contactFormSchema } from "./contact-schema";

const RECIPIENT = "info@rinaestheticsva.com";
// Sender must be on the verified Resend domain and must not be the practice mailbox itself.
const SENDER = "RIN Aesthetic Practice <website@rinaestheticsva.com>";
const RESEND_GATEWAY = "https://connector-gateway.lovable.dev/resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((input) => contactFormSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: submission, error: insertError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({ name: data.name, email: data.email, message: data.message })
      .select("id")
      .single();

    if (insertError || !submission) {
      console.error("Contact submission could not be saved", insertError);
      throw new Error("Your message could not be saved. Please email or text the practice instead.");
    }

    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!lovableApiKey || !resendApiKey) {
      await supabaseAdmin
        .from("contact_submissions")
        .update({ email_status: "failed", email_error: "Resend is not configured" })
        .eq("id", submission.id);
      return {
        saved: true,
        sent: false,
        message: "Your message was saved, but email delivery is not configured yet. Please email or text the practice if it is urgent.",
      };
    }

    const response = await fetch(`${RESEND_GATEWAY}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
      },
      body: JSON.stringify({
        from: SENDER,
        to: [RECIPIENT],
        reply_to: data.email,
        subject: `New inquiry from the website: ${data.name}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Email:</strong> ${escapeHtml(data.email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(data.message).replaceAll("\n", "<br>")}</p>`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      await supabaseAdmin
        .from("contact_submissions")
        .update({ email_status: "failed", email_error: `Resend returned ${response.status}` })
        .eq("id", submission.id);
      return {
        saved: true,
        sent: false,
        message: "Your message was saved, but the email could not be sent. Please email or text the practice if it is urgent.",
      };
    }

    await supabaseAdmin
      .from("contact_submissions")
      .update({ email_status: "sent", email_error: null })
      .eq("id", submission.id);

    return { saved: true, sent: true, message: "Thank you. Your message has been sent." };
  });