import { createServerFn } from "@tanstack/react-start";
import { contactFormSchema } from "./contact-schema";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((input) => contactFormSchema.parse(input))
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("./contact-email.server");
    return sendContactEmail(data, process.env["RIN_RESEND_API_KEY"]);
  });