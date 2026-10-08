export interface NavLink {
  label: string;
  to: string;
  hash?: string;
}

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/RIN+Aesthetic+Practice/@38.1258994,-78.447908,16z/data=!4m8!3m7!1s0x89b477c50d4a7623:0xb61646e41a874814!8m2!3d38.1258994!4d-78.4453277!9m1!1b1!16s%2Fg%2F11lw05935c";

export const practice = {
  wordmark: "RIN",
  wordmarkSub: "Aesthetic Practice",
  tagline: "Refined. Intentional. Natural.",
  location: "Charlottesville, Virginia",
  phone: "(434) 217-5300",
  /** Used only by the single Call fallback on Contact. Every other number links to smsHref. */
  phoneHref: "tel:+14342175300",
  smsHref: "sms:+14342175300",
  /** Visible opening hours. Structured data carries only the fixed days, in business-schema.ts. */
  hoursLines: ["Wednesday, Thursday and Friday, 10am to 5pm", "Select Mondays and Saturdays, by appointment"],
  email: "info@rinaestheticsva.com",
  address: "340 Towncenter Ln, Suite 200B, Charlottesville, VA 22911",
  addressLines: ["340 Towncenter Ln, Suite 200B", "Charlottesville, VA 22911"],
  instagram: "https://www.instagram.com/rinaestheticsva",
  bookingUrl: "https://www.vagaro.com/rinaesthetics",
} as const;

export const navLinks: NavLink[] = [
  { label: "Concerns", to: "/concerns" },
  { label: "Treatments", to: "/treatments" },
  { label: "Results", to: "/results" },
  { label: "Skincare", to: "/skincare" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Concerns",
    links: [
      { label: "Lines and wrinkles", to: "/concerns/lines-and-wrinkles" },
      { label: "Pigmentation and sun damage", to: "/concerns/pigmentation" },
      { label: "Volume loss", to: "/concerns/volume-loss" },
      { label: "Under-eye area", to: "/concerns/under-eye-area" },
      { label: "All concerns", to: "/concerns" },
    ],
  },
  {
    title: "Treatments",
    links: [
      { label: "Injectables", to: "/treatments", hash: "injectables" },
      { label: "Laser and light", to: "/treatments", hash: "device-and-laser" },
      { label: "Skin treatments", to: "/treatments", hash: "skin-treatments" },
      { label: "Hydrafacial", to: "/treatments", hash: "hydrafacials" },
      { label: "All treatments", to: "/treatments" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "About", to: "/about" },
      { label: "Results", to: "/results" },
      { label: "Skincare", to: "/skincare" },
      { label: "Gift cards", to: "/skincare", hash: "gift-cards" },
      { label: "Financing", to: "/financing" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Service policies", to: "/policies/service-policies" },
      { label: "Privacy", to: "/policies/privacy" },
      { label: "Cookies", to: "/policies/cookies" },
      { label: "Terms", to: "/policies/terms" },
      { label: "Medical records", to: "/policies/medical-records" },
    ],
  },
];
