import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email must be 255 characters or fewer."),
  message: z.string().trim().min(1, "Please enter a message.").max(2000, "Message must be 2,000 characters or fewer."),
  website: z.string().max(0),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;