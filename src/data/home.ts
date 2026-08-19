export interface Concern {
  slug: string;
  name: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
}

export const concerns: Concern[] = [
  { slug: "lines-and-wrinkles", name: "Lines and wrinkles", label: "Concern" },
  { slug: "uneven-tone", name: "Uneven tone", label: "Concern" },
  { slug: "texture-and-pores", name: "Texture and pores", label: "Concern" },
  { slug: "lost-volume", name: "Lost volume", label: "Concern" },
  { slug: "lips", name: "Lips", label: "Concern" },
  { slug: "under-eye-area", name: "Under-eye area", label: "Concern" },
];

export const testimonials: Testimonial[] = [
  { quote: "I don't trust anyone else with my face.", name: "Leanne" },
  {
    quote:
      "She takes the time to listen to my concerns and goals, ensuring that I understand every step of the process.",
    name: "Ashley",
  },
  {
    quote: "She knows exactly how to give you a natural look that enhances your features.",
    name: "Logan",
  },
];

export const hero = {
  imageAlt: "Interior of the RIN Aesthetic Practice treatment suite",
  placeholderLabel: "Hero image",
  headline: "Refined. Intentional. Natural.",
  primaryCta: "Book a consultation",
  secondaryCta: "Find your treatment",
} as const;

export const concernsSection = {
  heading: "What's on your mind?",
  eyebrow: "Concerns",
  headingLines: ["What's on", "your mind?"],
  intro:
    "Start with the thing you notice in the mirror. Every plan begins with a conversation, not a menu.",
} as const;

export const resultsSection = {
  heading: "Results",
  eyebrow: "Results",
  headingLines: ["Results"],
  intro: "Unretouched photography from our own treatment room. Individual results vary.",
  placeholderLabel: "Before / after",
  linkLabel: "View all results",
  count: 6,
} as const;

export const signature = {
  label: "Signature",
  heading: "The Skin Refinery by RIN",
  headingLines: ["The Skin Refinery", "by RIN"],
  body: "Four technologies combined into one customised session — SWT IPL, SWT IPL for acne, and 1940nm and 1550nm fractional lasers — addressing pigmentation, redness, texture, fine lines, acne and scarring together. Exclusive to RIN.",
  price: "$900",
  cta: "Learn more",
} as const;

export const provider = {
  heading: "Meet your provider",
  eyebrow: "Provider",
  name: "Jyl",
  portraitLabel: "Portrait",
  portraitAlt: "Portrait of Jyl, provider at RIN Aesthetic Practice",
  paragraphs: [
    "Jyl has spent her career learning faces — how they move, how they age, and how little it takes to bring someone back to looking like themselves. Her approach is conservative by design, built on anatomy and on the long view rather than the trend of the season.",
    "She treats one person at a time, without rushing, and will tell you plainly when the answer is to do less. Most clients arrive on a recommendation from someone they trust, and stay for years.",
  ],
  linkLabel: "More about Jyl",
} as const;

export const testimonialsSection = { heading: "From our clients" } as const;

export const testimonialsMeta = {
  eyebrow: "In their words",
  headingLines: ["From our clients"],
} as const;

export const bookingBand = {
  heading: "Book a consultation",
  body: "Consultations are thorough and obligation-free.",
  cta: "Book now",
} as const;