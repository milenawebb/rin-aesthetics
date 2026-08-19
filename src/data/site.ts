export interface NavLink {
  label: string;
  to: string;
}

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
