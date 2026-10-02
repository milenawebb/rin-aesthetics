export interface NavLink {
  label: string;
  to: string;
}

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/RIN+Aesthetic+Practice/@38.1258994,-78.447908,16z/data=!4m8!3m7!1s0x89b477c50d4a7623:0xb61646e41a874814!8m2!3d38.1258994!4d-78.4453277!9m1!1b1!16s%2Fg%2F11lw05935c";

export const practice = {
  wordmark: "RIN",
  wordmarkSub: "Aesthetic Practice",
  tagline: "Refined. Intentional. Natural.",
  location: "Charlottesville, Virginia",
  phone: "(434) 217-5300",
  phoneHref: "tel:+14342175300",
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
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Treatments",
    links: [
      { label: "Injectables", to: "/treatments" },
      { label: "Laser and light", to: "/treatments" },
      { label: "Skin health", to: "/treatments" },
      { label: "Consultations", to: "/treatments" },
    ],
  },
  {
    title: "Concerns",
    links: [
      { label: "Lines and wrinkles", to: "/concerns" },
      { label: "Uneven tone", to: "/concerns" },
      { label: "Lost volume", to: "/concerns" },
      { label: "Under-eye area", to: "/concerns" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Medical-grade skincare", to: "/treatments" },
      { label: "Post-treatment kits", to: "/treatments" },
      { label: "Gift cards", to: "/contact" },
      { label: "All products", to: "/treatments" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Cancellation", to: "/contact" },
      { label: "Privacy", to: "/contact" },
      { label: "Accessibility", to: "/contact" },
      { label: "Terms", to: "/contact" },
    ],
  },
];
