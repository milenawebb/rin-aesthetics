export interface Testimonial {
  quote: string;
  name: string;
}

export const testimonials: Testimonial[] = [
  { quote: "As someone completely new to injections, I feel so at ease with her.", name: "Ann Humphries" },
  {
    quote:
      "She was incredibly thorough, explained everything along the way ...",
    name: "Natasha Randolph",
  },
  {
    quote: "I was hesitant to leave a review because I want to keep her all to myself.",
    name: "Carly Lundgren",
  },
];

export const hero = {
  imageAlt: "Interior of the RIN Aesthetic Practice treatment suite",
  placeholderLabel: "Hero image",
  headline: "Refined. Intentional. Natural.",
  primaryCta: "Book a consultation",
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
  placeholderLabel: "Before / after",
  linkLabel: "View all results",
  count: 6,
} as const;

export const signature = {
  label: "Signature",
  serviceId: "DEV-03",
  cta: "Learn more",
  body: [
    "Our signature treatment, exclusive to RIN. Three Candela technologies in one customized session, layered in the order your skin needs rather than sold as a fixed package.",
    "One appointment covers what usually takes three. Jyl decides the mix after looking at your skin, so two people paying the same price rarely leave with the same treatment.",
  ],
  treatsLabel: "What it treats",
  treats: [
    "Redness and rosacea",
    "Pigmentation and sun damage",
    "Enlarged pores and rough texture",
    "Active breakouts and acne scarring",
    "Loose skin and lost firmness",
  ],
} as const;

export const provider = {
  heading: "Meet your provider",
  eyebrow: "Provider",
  name: "Jyl",
  portraitLabel: "Portrait",
  portraitAlt: "Portrait of Jyl, provider at RIN Aesthetic Practice",
  paragraphs: [
    "Jyl is a nurse injector with over a decade in healthcare, who moved from perioperative services into aesthetic medicine in 2020. She trained with some of the leading injectors on the East Coast, and her understanding of facial anatomy is what shapes her work.",
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