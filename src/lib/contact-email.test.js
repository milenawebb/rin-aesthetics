import { describe, expect, it } from "bun:test";
import { sendContactEmail } from "./contact-email.server";
import { contactFormSchema } from "./contact-schema";

const input = { name: "RIN delivery test", email: "info@rinaestheticsva.com", message: "<Hello>\nSecond line & more", website: "" };

describe("direct contact email", () => {
  it("sends the existing envelope directly to Resend with escaped multiline content", async () => {
    let destination = "";
    let payload = {};
    const request = async (url, options) => {
      destination = String(url);
      payload = JSON.parse(String(options?.body));
      return Response.json({ id: "test-message-id" });
    };
    const result = await sendContactEmail(input, "test-only", request);
    expect(destination).toBe("https://api.resend.com/emails");
    expect(payload.from).toBe("RIN Aesthetic Practice <website@rinaestheticsva.com>");
    expect(payload.to).toEqual(["info@rinaestheticsva.com"]);
    expect(payload.reply_to).toBe("info@rinaestheticsva.com");
    expect(payload.subject).toBe("New inquiry from the website: RIN delivery test");
    expect(payload.html).toContain("&lt;Hello&gt;<br>Second line &amp; more");
    expect(result.sent).toBe(true);
  });

  it("never reports success for rejected or interrupted sends", async () => {
    const reject = async () => new Response(null, { status: 403 });
    const interrupt = async () => { throw new Error("offline"); };
    for (const request of [reject, interrupt]) {
      expect((await sendContactEmail(input, "test-only", request)).sent).toBe(false);
    }
    expect((await sendContactEmail(input, undefined, reject)).sent).toBe(false);
  });

  it("rejects a filled honeypot", () => {
    expect(contactFormSchema.safeParse({ ...input, website: "bot" }).success).toBe(false);
  });

  it("retains the 100, 255, and 2000 character limits", () => {
    expect(contactFormSchema.safeParse({ ...input, name: "a".repeat(101) }).success).toBe(false);
    expect(contactFormSchema.safeParse({ ...input, email: "a".repeat(250) + "@rin.com" }).success).toBe(false);
    expect(contactFormSchema.safeParse({ ...input, message: "a".repeat(2001) }).success).toBe(false);
    expect(contactFormSchema.safeParse({ ...input, name: "a".repeat(100), message: "a".repeat(2000) }).success).toBe(true);
  });
});