// Generated from rin-catalog-and-quiz.xlsx. Do not hand-edit structure.
// Content fields left empty are filled in Stage 3. Any section whose field is
// empty must render nothing at all, never an empty heading or a placeholder.

export type Downtime = "none" | "minimal" | "days";

export interface ServiceOption {
  name: string;
  price: string;
  note: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  /** Used wherever several treatments are listed together. */
  shortName: string;
  slug: string;
  category: string;
  priceDisplay: string;
  bookingUrl?: string;
  priceBand: string;
  downtime: Downtime;
  seriesSessions: number;
  repeatWeeks: number | null;
  concernTags: string[];
  pairsWith: string[];
  precareId: string;
  aftercareId: string;
  shortDescription: string;
  options: ServiceOption[];
  // Stage 3 content. Empty until written and approved by the provider.
  intro: string[];
  helpsWith: string[];
  whoItsFor: string[];
  notFor: string;
  steps: { title: string; body: string }[];
  howJylApproaches: string;
  faqs: Faq[];
  eyebrow?: string;
  tagline?: string;
  promises?: { label: string; text: string }[];
  technologiesHeading?: string;
  technologiesIntro?: string;
  technologies?: { badge: string; name: string; description: string; bullets: string[] }[];
  howJylApproachesHeading?: string;
}

export const services: Service[] = [
  {
    id: "INJ-01",
    name: "Neurotoxin (Daxxify, Dysport, or Xeomin)",
    shortName: "Neurotoxin",
    slug: "injectables/neurotoxin",
    category: "Injectables",
    priceDisplay: "From $95",
    priceBand: "low",
    downtime: "none",
    seriesSessions: 1,
    repeatWeeks: 16,
    concernTags: ["fine_lines"],
    pairsWith: ["INJ-10", "SB-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-TOX",
    shortDescription:
      "Softens expression lines in the forehead, brows and around the eyes.",
    options: [],
    intro: [
      "Neurotoxin softens the lines that appear when you move your face: across the forehead, between the brows, and at the outer corners of the eyes. It eases the muscle underneath so the line has a chance to settle rather than deepen with every expression.",
      "RIN carries Daxxify, Dysport and Xeomin. Which one suits you depends on how fast you want it to start working and how long you want it to last. That is decided at your appointment rather than picked from a menu.",
    ],
    helpsWith: [
      "Horizontal lines across the forehead",
      "The vertical lines between the brows",
      "Crow's feet at the outer corners of the eyes",
      "A brow that sits lower or heavier than it used to",
      "Dimpling and texture across the chin",
      "NEEDS APPROVAL: confirm which areas Jyl treats. Masseter, lip flip, bunny lines and underarm sweating are commonly offered and are not listed here because I cannot confirm she does them.",
    ],
    whoItsFor: [
      "Anyone whose lines stay visible after the expression has stopped",
      "First-time patients who want something that wears off rather than something permanent",
      "Patients already having filler who want movement softened as well as volume restored",
      "Anyone wanting to slow a line down before it sets in",
    ],
    notFor:
      "Not during pregnancy or breastfeeding, and not with certain neuromuscular conditions. If a line is fully visible when your face is completely still, neurotoxin alone will not erase it, and Jyl will tell you that rather than treat it and hope.",
    steps: [
      {
        title: "Consultation",
        body: "Jyl watches how your face moves, not only how it looks at rest. Where you hold tension decides where the product goes and how much of it you need.",
      },
      {
        title: "The appointment",
        body: "A series of small injections with a fine needle. Most people describe it as a quick pinch. Plan on about fifteen minutes and go straight back to your day afterwards.",
      },
      {
        title: "The first two weeks",
        body: "Movement eases gradually rather than all at once. Most people notice a change around day three or four, with the full result at about two weeks.",
      },
      {
        title: "Your follow-up",
        body: "A complimentary review between weeks two and three. If anything needs adjusting, that is when it gets adjusted, and it is included.",
      },
    ],
    howJylApproaches:
      "Jyl treats conservatively on a first visit and reviews at two weeks, rather than using more product up front and hoping it lands well. The aim is to soften movement, not remove it. Looking like you have had nothing done is the easier of the two outcomes to achieve, and it is the one she defaults to unless you ask for something stronger.",
    faqs: [
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. Draft: Around three to four months for most people, with Daxxify typically lasting longer. How long it lasts depends on the product, the dose and how strongly you use those muscles.",
      },
      {
        question: "Will I look frozen?",
        answer:
          "Not at the doses Jyl uses on a first visit. She treats conservatively and reviews at two weeks, which means the result is adjusted upward if you want more rather than waiting out a result that went too far.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Most people find it very manageable. The needle is fine and each injection takes a second. There is no numbing required for most areas.",
      },
      {
        question: "What is the difference between Daxxify, Dysport and Xeomin?",
        answer:
          "NEEDS APPROVAL: confirm how Jyl explains this. Draft: They are all neurotoxins and they all work the same way. They differ in how quickly they take effect and how long they last. Jyl will recommend one based on what you want and how you have responded to treatment before.",
      },
      {
        question: "What does the price include?",
        answer:
          "NEEDS APPROVAL: the catalog says From $95 but does not say what that buys. Confirm whether this is per unit, per area, or a minimum, and whether a typical first treatment costs more. The page must say, or the price misleads.",
      },
    ],
  },
  {
    id: "INJ-02",
    name: "Dermal Fillers",
    shortName: "Dermal Fillers",
    slug: "injectables/dermal-fillers",
    category: "Injectables",
    priceDisplay: "Price on consultation",
    priceBand: "mid",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 48,
    concernTags: ["volume_loss", "contour"],
    pairsWith: ["INJ-01", "INJ-10"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription:
      "Restores lost volume and smooths lines using hyaluronic acid filler.",
    options: [],

    intro: [
      "Faces lose volume before they lose anything else. Cheeks flatten, the midface drops, and the lines that follow are a consequence of that rather than the problem itself. Filler restores the structure underneath so the surface settles.",
      "Price depends entirely on how much is needed and where, which is why it is quoted at consultation rather than listed. Most people need less than they expect.",
    ],

    helpsWith: [
      "Flattening or hollowing through the cheeks",
      "Folds from the nose to the mouth",
      "Lines from the corners of the mouth downward",
      "A chin or jawline that has lost definition",
      "Hollowing at the temples",
    ],

    whoItsFor: [
      "Anyone seeing the midface flatten rather than simply line",
      "Patients who want structure restored rather than a different face",
      "Anyone whose lines are visible at rest, where neurotoxin alone will not help",
    ],

    notFor:
      "Filler adds volume. It does not tighten loose skin and it does not soften a line caused by movement. If the honest answer is neurotoxin, or a device, or nothing yet, Jyl will say so at consultation.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl assesses the whole face rather than the area you came in about. Where volume is lost is often not where you notice the change.",
      },
      {
        title: "The appointment",
        body: "Numbing first, then placement. Most people describe pressure rather than pain. Plan on 45 minutes to an hour.",
      },
      {
        title: "The first week",
        body: "Swelling and the chance of bruising for a few days. What you see in the first 48 hours is not the result.",
      },
      {
        title: "Settling",
        body: "Filler integrates over about two weeks. Judge it then, not before.",
      },
    ],

    howJylApproaches:
      "Jyl treats the face as a structure rather than a list of areas, which is why she will often suggest filling somewhere you had not thought about and leaving alone the thing you came in for. She works conservatively and would rather you come back for more than start by overfilling.",

    faqs: [
      {
        question: "Why is there no price listed?",
        answer:
          "Because the amount varies so much between people that any figure would be misleading. Jyl quotes at consultation once she knows what is actually needed.",
      },
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. Draft: Typically nine to eighteen months depending on the product, the area and how quickly you metabolize it.",
      },
      {
        question: "Will I look overfilled?",
        answer:
          "Not at the amounts Jyl uses. She treats conservatively and reviews, which means you can add later. The overfilled look almost always comes from doing too much in one visit.",
      },
      {
        question: "Which filler do you use?",
        answer:
          "NEEDS APPROVAL: confirm which brands Jyl carries and how she chooses between them.",
      },
      {
        question: "Can it be reversed?",
        answer:
          "Hyaluronic acid fillers can be dissolved if needed. That is one of the reasons Jyl favors them.",
      },
    ],
  },

  // ---------------------------------------------------------------- INJ-03
  {
    id: "INJ-03",
    name: "Lip Filler",
    shortName: "Lip Filler",
    slug: "injectables/lip-filler",
    category: "Injectables",
    priceDisplay: "$800",
    priceBand: "mid",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 36,
    concernTags: ["lips", "volume_loss"],
    pairsWith: ["DEV-01", "HY-09"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription:
      "Adds volume and definition to the lips, tailored to how much change you want.",
    options: [],

    intro: [
      "Lip filler covers a wide range, from restoring what has thinned to deliberately adding more. Where you sit on that range is your decision, and Jyl will tell you plainly what she thinks suits your face.",
      "Most people who ask for a natural result want definition more than volume: a clearer border, an even shape, a little more at the center. That takes less product than most expect.",
    ],

    helpsWith: [
      "Lips that have thinned over time",
      "An uneven or undefined lip border",
      "Asymmetry between the upper and lower lip",
      "Flattening of the lip's natural shape",
      "Added volume, where that is what you want",
    ],

    whoItsFor: [
      "Anyone wanting more definition without an obvious change",
      "Patients whose lips have lost fullness with time",
      "Anyone who wants more volume and wants it done conservatively",
    ],

    notFor:
      "Filler adds volume to the lip itself. It does not erase the fine lines above the lip, which usually need resurfacing instead. If that is what is bothering you, the fractional treatment for lips is the better answer and Jyl will say so.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl looks at the shape, the balance between upper and lower, and what you actually want, which is often different from what you first describe.",
      },
      {
        title: "The appointment",
        body: "Numbing cream first, then placement. Lips are more sensitive than most areas and most people still describe it as very manageable.",
      },
      {
        title: "The first few days",
        body: "Swelling is normal and lips swell more than anywhere else. Expect them to look fuller than the final result for two to three days.",
      },
      {
        title: "Settling",
        body: "About two weeks to fully settle. Your photographs and your judgment should both wait until then.",
      },
    ],

    howJylApproaches:
      "Jyl does not have one lip she gives everyone. She works to the shape you already have, and she will say no to a request she thinks will not suit you rather than take the booking. Most of her lip work is deliberately subtle, which is why people cannot tell it has been done.",

    faqs: [
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. Draft: Usually six to twelve months. Lips move constantly, so filler there does not last as long as elsewhere on the face.",
      },
      {
        question: "Will everyone be able to tell?",
        answer:
          "Not if the aim is definition rather than volume. The look people recognize comes from quantity, and that is a choice rather than an inevitability.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Lips are sensitive, so numbing cream is used first. Most people find it very manageable, and it is over quickly.",
      },
      {
        question: "How swollen will I be?",
        answer:
          "Noticeably, for two to three days. Do not book this in the week of an event. Four weeks before is comfortable.",
      },
    ],
  },

  // ---------------------------------------------------------------- INJ-04
  {
    id: "INJ-04",
    name: "Full Facial Balancing",
    shortName: "Full Facial Balancing",
    slug: "injectables/full-facial-balancing",
    category: "Injectables",
    priceDisplay: "$2,100",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 52,
    concernTags: ["volume_loss", "contour", "laxity"],
    pairsWith: ["INJ-01", "INJ-02"],
    precareId: "PC-INJECT",
    aftercareId: "AC-FILLER",
    shortDescription:
      "Three to four syringes used across the face to harmonize proportions rather than treat one area.",
    options: [],

    intro: [
      "Treating one area at a time can make the rest of the face look less balanced rather than more. Facial balancing takes the opposite approach: three to four syringes placed across the face in one session, chosen so the proportions work together.",
      "It costs more than a single area because it is more product, and it usually achieves what several separate appointments would not.",
    ],

    helpsWith: [
      "Volume lost across the midface rather than in one spot",
      "Proportions that have shifted with time",
      "A jawline and chin that no longer balance the upper face",
      "Several areas you have been treating one at a time",
    ],

    whoItsFor: [
      "Anyone who has had filler in one area and felt the result looked incomplete",
      "Patients who would rather do it properly once than piece it together",
      "Anyone wanting structure addressed rather than lines chased",
    ],

    notFor:
      "This is a bigger treatment than most people need. If one area is genuinely the issue, Jyl will treat that area and charge you less. She will tell you if balancing is more than your face requires.",

    steps: [
      {
        title: "Consultation",
        body: "A full assessment of proportion and structure, not a list of complaints. This consultation is longer than most.",
      },
      {
        title: "The appointment",
        body: "Numbing, then placement across the planned areas. Plan on an hour and a half.",
      },
      {
        title: "The first week",
        body: "More swelling than a single area simply because more was done. Bruising is possible.",
      },
      {
        title: "Settling",
        body: "Two weeks to settle, and a review after that.",
      },
    ],

    howJylApproaches:
      "Jyl plans this as one piece of work rather than four separate decisions, and that planning is most of the value. She will reduce the scope if she thinks the full treatment is more than you need.",

    faqs: [
      {
        question: "What does $2,100 include?",
        answer:
          "NEEDS APPROVAL: confirm exactly what the price covers, how many syringes, and what happens if more is needed.",
      },
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes.",
      },
      {
        question: "Can it be done in stages?",
        answer:
          "It can, but the point of doing it in one session is that the areas are planned against each other. Staged over months, you are making each decision without seeing the whole.",
      },
      {
        question: "How much time should I leave before an event?",
        answer:
          "Four weeks. This involves more product and more swelling than a single area.",
      },
    ],
  },

  // ---------------------------------------------------------------- INJ-05
  {
    id: "INJ-05",
    name: "Regenerative Medicine / Biostimulators (Sculptra, Radiesse)",
    shortName: "Biostimulators",
    slug: "injectables/biostimulators",
    category: "Injectables",
    priceDisplay: "From $750",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 3,
    repeatWeeks: 26,
    concernTags: ["laxity", "volume_loss", "fine_lines"],
    pairsWith: ["INJ-02", "SB-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-BIOSTIM",
    shortDescription:
      "Stimulates your own collagen gradually over a series, for subtle long-lasting change.",
    options: [],

    intro: [
      "Biostimulators do not fill. They prompt your own collagen to rebuild, so the change arrives slowly and looks like your skin improving rather than something being added.",
      "That makes them a different proposition from filler. It takes a series, it takes months, and nobody will be able to point at what you had done. For some people that is exactly the appeal.",
    ],

    helpsWith: [
      "Overall loss of firmness rather than one hollow area",
      "Thinning, crepey skin texture",
      "Gradual loss of structure through the cheeks",
      "Fine lines that come from skin quality rather than movement",
    ],

    whoItsFor: [
      "Anyone who wants change nobody can date to an appointment",
      "Patients willing to wait months for a result that lasts longer",
      "Anyone addressing overall quality rather than a specific hollow",
    ],

    notFor:
      "If you want to see a difference next week, this is the wrong treatment and filler is the right one. Jyl will tell you that rather than start a series you will be disappointed by at week two.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl confirms whether stimulating collagen or replacing volume is the better answer for what you want.",
      },
      {
        title: "The series",
        body: "Usually three sessions spaced several weeks apart. Each one is quick.",
      },
      {
        title: "After each session",
        body: "Massage as instructed, which matters more with these products than with filler. Full instructions come by email.",
      },
      {
        title: "The following months",
        body: "The result builds across three to six months after the last session. This is the slowest treatment RIN offers and the most gradual.",
      },
    ],

    howJylApproaches:
      "Jyl sets expectations before taking a deposit on a series, because the most common disappointment with biostimulators is someone expecting filler. If you want immediate change she will say so and recommend something else.",

    faqs: [
      {
        question: "When will I see a difference?",
        answer:
          "Not for weeks. The result builds across three to six months after the final session, which is the nature of stimulating collagen rather than adding volume.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "NEEDS APPROVAL: confirm Jyl's protocol. Usually three, spaced several weeks apart, but hers is what should appear here.",
      },
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. Biostimulators generally outlast hyaluronic acid filler.",
      },
      {
        question: "What is the difference between Sculptra and Radiesse?",
        answer:
          "NEEDS APPROVAL: confirm how Jyl explains this and how she chooses between them.",
      },
    ],
  },

  // ---------------------------------------------------------------- INJ-07
  {
    id: "INJ-07",
    name: "Platelet Rich Plasma Hair Restoration",
    shortName: "PRP Hair Restoration",
    slug: "injectables/prp-hair-restoration",
    category: "Injectables",
    priceDisplay: "From $750",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 3,
    repeatWeeks: 26,
    concernTags: ["hair_loss"],
    pairsWith: ["INJ-06"],
    precareId: "PC-INJECT",
    aftercareId: "AC-PRP",
    shortDescription:
      "Uses your own platelets to stimulate growth in thinning areas. Starts with a candidacy consult.",
    options: [],

    intro: [
      "Blood is drawn, spun to concentrate the platelets, and the concentrate is injected into the scalp where hair is thinning. The growth factors in your own platelets are what prompt the follicles to respond.",
      "It works better on thinning than on areas that have been bare for years, which is why this one starts with a candidacy consultation rather than a booking.",
    ],

    helpsWith: [
      "Thinning through the crown or part line",
      "A hairline that has started to recede",
      "Hair that has become finer rather than absent",
      "Shedding that has not resolved on its own",
    ],

    whoItsFor: [
      "Anyone noticing thinning early rather than late",
      "Patients with follicles still present in the area",
      "Anyone wanting to use their own biology rather than a medication",
    ],

    notFor:
      "Where a follicle is gone, nothing injected will bring it back. Jyl assesses candidacy honestly at the first appointment and will tell you if this is not going to work for you.",

    steps: [
      {
        title: "Candidacy consultation",
        body: "Jyl assesses the pattern and density and tells you whether you are likely to respond. This comes before any booking.",
      },
      {
        title: "The appointment",
        body: "Blood draw, then roughly fifteen minutes while it spins, then injection into the scalp. Plan on about an hour in total.",
      },
      {
        title: "The series",
        body: "Usually three sessions spaced several weeks apart.",
      },
      {
        title: "The following months",
        body: "Shedding often slows first, then density improves. This takes months rather than weeks.",
      },
    ],

    howJylApproaches:
      "Jyl would rather turn someone away at the candidacy appointment than take payment for a series that will not work. Hair loss is emotional and that makes an honest first conversation more important here than almost anywhere else.",

    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "NEEDS APPROVAL: confirm Jyl's protocol and whether maintenance sessions follow the initial series.",
      },
      {
        question: "When will I see a difference?",
        answer:
          "Shedding usually slows before density changes. Expect months, not weeks.",
      },
      {
        question: "Does it hurt?",
        answer:
          "The scalp is sensitive and the injections are quick. Most people find it uncomfortable rather than painful.",
      },
      {
        question: "Will it work for me?",
        answer:
          "That is what the candidacy consultation is for. It depends on whether the follicles are still there, which is why Jyl assesses before booking a series.",
      },
    ],
  },

  // ---------------------------------------------------------------- INJ-08
  {
    id: "INJ-08",
    name: "EZ Gel / PRP",
    shortName: "EZ Gel and PRP",
    slug: "injectables/ez-gel-prp",
    category: "Injectables",
    priceDisplay: "From $750",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 2,
    repeatWeeks: 6,
    concernTags: ["volume_loss", "texture", "eye_area", "laxity"],
    pairsWith: ["INJ-02", "SKN-02"],
    precareId: "PC-INJECT",
    aftercareId: "AC-PRP",
    shortDescription:
      "A filler-like volumizer made from your own blood, used under the eyes, cheeks, lips and laugh lines.",
    options: [],

    intro: [
      "Your own blood is drawn and processed into a gel that can be placed much like filler. Because it comes from you, it suits areas where conventional filler is harder to use well, the under-eye in particular.",
      "It does two things at once: it adds a little volume, and the growth factors improve the quality of the skin over it.",
    ],

    helpsWith: [
      "Hollowing and shadowing under the eyes",
      "Thin, crepey skin where filler would show",
      "Laugh lines and early cheek flattening",
      "Overall skin quality in the area treated",
    ],

    whoItsFor: [
      "Anyone wanting the under-eye treated cautiously",
      "Patients who prefer something derived from their own blood",
      "Anyone whose skin quality is as much the issue as the volume",
    ],

    notFor:
      "The under-eye is the least forgiving area on the face and not everyone is a candidate. Puffiness, fluid retention and certain anatomy all make it a poor idea, and Jyl will tell you if that is you.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl assesses whether the under-eye shadow is hollowing, pigment, or puffiness, because only one of those responds to this.",
      },
      {
        title: "The appointment",
        body: "Blood draw, processing, then placement. Plan on about an hour.",
      },
      {
        title: "The first week",
        body: "Swelling and bruising are more likely here than elsewhere. The under-eye bruises easily.",
      },
      {
        title: "The series",
        body: "Usually two sessions a few weeks apart, with the result improving between them.",
      },
    ],

    howJylApproaches:
      "Jyl is more conservative under the eyes than anywhere else on the face, because it is the area where overcorrection is most visible and hardest to fix. She would rather do too little and review.",

    faqs: [
      {
        question: "How is this different from filler?",
        answer:
          "It is made from your own blood rather than hyaluronic acid, and it improves skin quality as well as adding a little volume. It is also softer, which is why it suits the under-eye.",
      },
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. It does not last as long as hyaluronic acid filler.",
      },
      {
        question: "Will I bruise?",
        answer:
          "Possibly, and more so under the eyes than elsewhere. Leave two weeks before anything you want to look your best for.",
      },
      {
        question: "How many sessions?",
        answer:
          "Usually two, a few weeks apart. Jyl confirms at consultation.",
      },
    ],
  },

  // ---------------------------------------------------------------- INJ-09
  {
    id: "INJ-09",
    name: "Skin Booster Skinvive",
    shortName: "Skinvive",
    slug: "injectables/skinvive",
    category: "Injectables",
    priceDisplay: "$600",
    priceBand: "mid",
    downtime: "none",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["hydration", "texture", "dryness", "fine_lines"],
    pairsWith: ["INJ-01", "HY-01"],
    precareId: "PC-INJECT",
    aftercareId: "AC-TOX",
    shortDescription:
      "Micro-droplet hydration that improves smoothness and glow rather than adding volume.",
    options: [],

    intro: [
      "Skinvive is hyaluronic acid placed in tiny droplets just under the surface. It does not shape or fill anything. It hydrates the skin from within, and the result is smoothness and light rather than volume.",
      "It is the treatment for someone whose face does not need changing but whose skin looks tired.",
    ],

    helpsWith: [
      "Skin that looks dull or flat",
      "Dryness that skincare has not solved",
      "Fine surface lines on the cheeks",
      "Rough or uneven texture",
    ],

    whoItsFor: [
      "Anyone happy with their face who wants better skin",
      "Patients who want a result with no downtime",
      "Anyone nervous about injectables who wants somewhere gentle to start",
    ],

    notFor:
      "This adds no volume and changes no shape. If what is bothering you is hollowing or a line at rest, this will not address it and Jyl will point you elsewhere.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl confirms that skin quality rather than structure is what you want improved.",
      },
      {
        title: "The appointment",
        body: "A series of very small injections across the treated area. Numbing first. About 30 minutes.",
      },
      {
        title: "The first day",
        body: "Small bumps where the droplets were placed, which settle within a day. No real downtime beyond that.",
      },
      {
        title: "The following weeks",
        body: "Hydration and smoothness build over the first month.",
      },
    ],

    howJylApproaches:
      "Jyl often suggests this to people who came in asking for filler and do not need it. If the complaint is that the skin looks tired rather than that the face has changed, this is usually the honest answer.",

    faqs: [
      {
        question: "Will it change my face?",
        answer:
          "No. It adds no volume and no shape. It improves the skin itself.",
      },
      {
        question: "How long does it last?",
        answer:
          "NEEDS APPROVAL: confirm the range Jyl quotes. Draft: around six months.",
      },
      {
        question: "Is there downtime?",
        answer:
          "Small bumps at the injection points for a few hours to a day. Most people go straight back to normal.",
      },
      {
        question: "Can I have it with other treatments?",
        answer:
          "Yes. It pairs well with neurotoxin, which addresses movement while this addresses the skin itself.",
      },
    ],
  },
  {
    id: "DEV-01",
    name: "Non-ablative Fractional Treatment (Lips)",
    shortName: "Fractional Treatment for Lips",
    slug: "devices/fractional-lips",
    category: "Device & Laser",
    priceDisplay: "$250",
    priceBand: "low",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["lips", "fine_lines", "texture"],
    pairsWith: ["INJ-03"],
    precareId: "PC-LASER",
    aftercareId: "AC-LASER",
    shortDescription:
      "Refreshes the lip area and smooths lip lines without adding volume.",
    options: [],

    intro: [
      "The fine vertical lines above the lip are a skin problem, not a volume problem. Filling the lip will not remove them, and often makes them more obvious.",
      "This treats the skin itself. Fractional laser energy resurfaces the lip border and the area above it, softening the lines and improving the texture, without changing the size or shape of the lip at all.",
    ],

    helpsWith: [
      "Fine vertical lines above the upper lip",
      "A lip border that has lost its definition",
      "Rough or crepey texture around the mouth",
      "Lipstick that travels into the lines",
    ],

    whoItsFor: [
      "Anyone bothered by lip lines rather than lip size",
      "Patients who have had lip filler and still see the lines",
      "Anyone who wants the area improved without adding anything",
    ],

    notFor:
      "This adds no volume. If what you want is fuller lips, this is not it. It is often done alongside lip filler rather than instead of it, because the two address different things.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl confirms whether the lines are a texture problem, a volume problem, or both, because the answer changes the treatment.",
      },
      {
        title: "The week before",
        body: "Preparation instructions arrive by email. Sun exposure and retinoids both need stopping beforehand.",
      },
      {
        title: "The session",
        body: "Numbing first, then the treatment itself, which is quick because the area is small.",
      },
      {
        title: "Afterwards",
        body: "Redness and a rough texture for a few days as the skin renews. Aftercare arrives the same day.",
      },
    ],

    howJylApproaches:
      "Jyl will often suggest this to someone who came in for more lip filler. If the complaint is the lines rather than the fullness, more filler is the wrong answer and she will say so.",

    faqs: [
      {
        question: "Will this make my lips bigger?",
        answer:
          "No. It treats the skin around and on the lip border. The size and shape of the lip are unchanged.",
      },
      {
        question: "Can I have it with lip filler?",
        answer:
          "Yes, and the two are often done together because they address different problems. Jyl will advise on the order and the spacing.",
      },
      {
        question: "How much downtime?",
        answer:
          "A few days of redness and roughness around the mouth. Makeup is usually fine once the skin has settled.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "NEEDS APPROVAL: confirm whether Jyl treats this as a single session or a short series.",
      },
    ],
  },
  {
    id: "DEV-03",
    name: "The Skin Refinery by RIN",
    shortName: "The Skin Refinery by RIN",
    slug: "devices/skin-refinery",
    category: "Device & Laser",
    priceDisplay: "$900",
    priceBand: "high",
    downtime: "days",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["pigment", "redness", "texture", "fine_lines", "acne", "scarring"],
    pairsWith: ["DEV-06", "DEV-05", "SB-08", "SB-04"],
    precareId: "PC-LASER",
    aftercareId: "AC-LASER",
    shortDescription:
      "Her signature treatment. Three Candela technologies combined in one customized session.",

    options: [],
    eyebrow: "RIN SIGNATURE TREATMENT",
    tagline: "Tone. Texture. Clarity. Luminosity.",

    intro: [
      "The Skin Refinery is our signature light and laser treatment, built on the Candela Nordlys platform. It combines advanced IPL with two fractional laser wavelengths to refine, renew and reveal clearer skin in one customized session, rather than across months of separate appointments.",
      "Every session is set individually. Which technologies are used, and at what strength, depends on what your skin needs on the day.",
    ],

    promises: [
      { label: "CUSTOMIZED TO YOU", text: "Settings chosen for your skin, not a fixed protocol" },
      { label: "VISIBLE RESULTS", text: "Change you can see, documented at your follow-up" },
      { label: "MINIMAL DOWNTIME", text: "A few quiet days, not a few quiet weeks" },
      { label: "BROAD SUITABILITY", text: "Safe across a wide range of skin types" },
    ],

    helpsWith: [
      "Uneven tone, sun spots and pigmentation",
      "Persistent redness and rosacea",
      "Rough texture and enlarged pores",
      "Fine lines and deeper wrinkles",
      "Active breakouts and oil control",
      "Acne scarring at the surface and below it",
    ],

    whoItsFor: [
      "Anyone who wants several concerns addressed in one visit",
      "Skin that has stopped responding to skincare alone",
      "Patients planning four to five weeks before an event",
      "A wide range of skin types, confirmed individually at consultation",
    ],

    notFor:
      "Recent sun exposure, a very active breakout or travel within three weeks are all reasons to wait. Jyl will say so at consultation, and waiting produces a better result.",

    technologiesHeading: "Four ways to treat. One session.",
    technologiesIntro:
      "Each does something the others cannot. Combining them is what separates this from a standard photofacial.",
    technologies: [
      {
        badge: "SWT",
        name: "SWT IPL Photofacial",
        description: "Broadband light targeting the visible signs of sun exposure and time.",
        bullets: [
          "Evens skin tone",
          "Reduces redness and rosacea",
          "Improves pigmentation",
          "Stimulates collagen",
        ],
      },
      {
        badge: "SWT",
        name: "SWT IPL for Acne",
        description: "The same light technology tuned to acne and inflammation.",
        bullets: [
          "Reduces active breakouts",
          "Calms inflammation",
          "Helps control oil",
          "Discourages future breakouts",
        ],
      },
      {
        badge: "1940NM",
        name: "Fractional Laser",
        description: "Non-ablative resurfacing that works at the surface.",
        bullets: [
          "Improves fine lines and texture",
          "Minimizes enlarged pores",
          "Softens acne scarring",
          "Stimulates collagen & elastin",
        ],
      },
      {
        badge: "1550NM",
        name: "Fractional Laser",
        description: "Deeper fractional energy that remodels and tightens.",
        bullets: [
          "Improves deeper wrinkles",
          "Tightens lax skin",
          "Reduces deeper acne scars",
          "Enhances tone and firmness",
        ],
      },
    ],

    steps: [
      {
        title: "Consultation",
        body: "Jyl assesses your skin and confirms this is the right treatment, or that something gentler should come first.",
      },
      {
        title: "The week before",
        body: "Preparation instructions arrive by email. Following them is what makes the session safe and effective.",
      },
      {
        title: "The session",
        body: "Skin is cleansed and numbed, then each technology is applied in sequence at settings chosen for you.",
      },
      {
        title: "Afterwards",
        body: "Aftercare arrives the same day, with follow-up guidance across the first week. Your complimentary review is booked for four to five weeks later.",
      },
    ],

    howJylApproachesHeading: "Conservative settings, honest expectations",
    howJylApproaches:
      "Jyl will tell you plainly if your skin is not ready. Recent sun, active breakouts, or a holiday in three weeks are all reasons to wait, and waiting produces a better result. She treats this as one thorough session rather than a package sold in threes. Most people need one, reviewed at five weeks, and only then a decision about whether a second would add anything.",

    faqs: [
      {
        question: "How much downtime should I plan for?",
        answer:
          "NEEDS APPROVAL. Draft: A few days. Expect redness and a sandpaper texture that settles over roughly three to five days, with makeup usually fine after the first forty-eight hours.",
      },
      {
        question: "How is this different from a standard IPL photofacial?",
        answer:
          "A photofacial uses IPL alone. This adds two fractional laser wavelengths that reach texture, scarring and collagen. IPL cannot address those.",
      },
      {
        question: "Will one session be enough?",
        answer:
          "Often, yes. Your complimentary follow-up is where that gets assessed properly.",
      },
      {
        question: "Is it suitable for darker skin tones?",
        answer:
          "The platform is designed for a wide range of skin types, and Jyl confirms suitability individually at consultation.",
      },
      {
        question: "Can it treat acne as well as aging?",
        answer:
          "Yes. One of the technologies is tuned specifically for active acne, which is why the session can address both.",
      },
    ],
  },
  {
    id: "DEV-05",
    name: "Candela 1940 & 1550 Fractional Laser",
    shortName: "Fractional Laser",
    slug: "devices/fractional-laser",
    category: "Device & Laser",
    priceDisplay: "$675",
    priceBand: "high",
    downtime: "days",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["texture", "pigment", "pores", "fine_lines", "laxity", "scarring"],
    pairsWith: ["DEV-04"],
    precareId: "PC-LASER",
    aftercareId: "AC-RESURFACE",
    shortDescription:
      "Two fractional wavelengths working at different depths to renew skin from the inside out.",

    options: [],

    intro: [
      "Two wavelengths, used in the same session, working at two depths. The 1940nm resurfaces at the surface, where texture, pores and pigment live. The 1550nm goes deeper, where wrinkles and scarring are, and prompts the skin to rebuild.",
      "Doing both in one session is what separates this from a single wavelength treatment. The surface improves and the structure underneath improves with it.",
    ],

    helpsWith: [
      "Rough or uneven texture",
      "Enlarged pores",
      "Acne scarring at the surface and below it",
      "Fine lines and deeper wrinkles",
      "Sun damage and uneven pigmentation",
      "Loss of firmness",
    ],

    whoItsFor: [
      "Anyone whose skin texture has stopped responding to skincare",
      "Patients with acne scarring they have been told to live with",
      "Anyone willing to accept a few quiet days for a substantial change",
    ],

    notFor:
      "This has real downtime, which separates it from most of what RIN offers. If you cannot give it a few days, or there is an event inside three weeks, Jyl will tell you to wait rather than rush it.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl assesses the skin and confirms this rather than something gentler, and checks there is nothing in the next few weeks that the downtime would spoil.",
      },
      {
        title: "The week before",
        body: "Preparation instructions by email. Following them is what makes the session safe and effective.",
      },
      {
        title: "The session",
        body: "Cleansing and numbing, then both wavelengths applied at settings chosen for your skin.",
      },
      {
        title: "The first week",
        body: "Redness, then a sandpaper texture as the skin renews. Aftercare arrives the same day with guidance across the whole week.",
      },
    ],

    howJylApproaches:
      "Jyl picks the depth and the settings rather than running a protocol, and she will treat conservatively on a first session to see how your skin responds. She would rather do two measured sessions than one aggressive one.",

    faqs: [
      {
        question: "How much downtime should I plan for?",
        answer:
          "NEEDS APPROVAL: confirm what Jyl tells patients. Draft: a few days of redness and a rough texture, settling over roughly three to five days.",
      },
      {
        question: "How is this different from the Skin Refinery?",
        answer:
          "The Skin Refinery combines these two wavelengths with IPL in one session, which adds the ability to treat redness and vascular concerns. This is the two lasers alone.",
      },
      {
        question: "Will one session be enough?",
        answer:
          "Often, and the complimentary follow-up is where that gets assessed properly. Deeper scarring usually benefits from more than one.",
      },
      {
        question: "Is it suitable for darker skin tones?",
        answer:
          "The platform is designed for a wide range of skin types, and Jyl confirms suitability individually at consultation.",
      },
    ],
  },
  {
    id: "DEV-06",
    name: "Candela SWT IPL",
    shortName: "SWT IPL",
    slug: "devices/ipl",
    category: "Device & Laser",
    priceDisplay: "$250 spot, $450 full face or chest",
    priceBand: "mid",
    downtime: "minimal",
    seriesSessions: 1,
    repeatWeeks: 26,
    concernTags: ["sun_damage", "pigment", "redness", "texture"],
    pairsWith: ["DEV-04"],
    precareId: "PC-LASER",
    aftercareId: "AC-LASER",
    shortDescription:
      "Evens tone by targeting sun damage, redness and broken capillaries. Treat a few spots or the whole face or chest.",
    options: [
      {
        name: "Spot treatment",
        price: "$250",
        note: "A few specific spots rather than the whole area.",
      },
      {
        name: "Full face or chest",
        price: "$450",
        note: "Even tone across the whole area in one session.",
      },
    ],

    intro: [
      "Broadband light targets what has color in it: sun spots, freckling, redness and broken capillaries. It passes over everything else, which is why tone evens out without the skin being resurfaced.",
      "You can treat a handful of specific spots or the whole face or chest. The chest is worth mentioning, because it shows sun damage earlier than the face and is the area people forget until they see a photograph.",
    ],

    helpsWith: [
      "Sun spots and age spots",
      "Freckling from cumulative sun exposure",
      "Persistent redness and rosacea",
      "Broken capillaries",
      "Uneven tone across the face, neck or chest",
    ],

    whoItsFor: [
      "Anyone whose complaint is color rather than texture",
      "Patients who want visible change with little downtime",
      "Anyone treating the chest, where sun damage shows first",
    ],

    notFor:
      "IPL works on pigment and vessels. It does not resurface, so lines, scarring and texture need a laser instead. Recent sun exposure or a tan makes it unsafe, and Jyl will reschedule rather than treat.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl confirms that the concern is pigment or redness rather than texture, and checks for recent sun exposure.",
      },
      {
        title: "The week before",
        body: "Preparation instructions by email. No sun, no self-tanner, no exceptions.",
      },
      {
        title: "The session",
        body: "Cooling gel, then pulses across the area. Most people describe it as a brief snap.",
      },
      {
        title: "The following week",
        body: "Spots darken before they lift, usually flaking away over about a week. That darkening is the treatment working.",
      },
    ],

    howJylApproaches:
      "Jyl will turn away a tan, including a self-tanner, because treating pigmented skin with light is how burns happen. If you have been in the sun she will move the appointment rather than adjust the settings and hope.",

    faqs: [
      {
        question: "Why do my spots look darker afterwards?",
        answer:
          "Because that is how it works. The pigment comes to the surface, darkens, and flakes away over about a week. It looks worse before it looks better.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "NEEDS APPROVAL: confirm Jyl's usual recommendation for a full face and for spot treatment.",
      },
      {
        question: "Can I have this with a tan?",
        answer:
          "No, and that includes self-tanner. Light targets pigment, and tanned skin is pigmented everywhere. Jyl will reschedule.",
      },
      {
        question: "What is the difference between spot and full face?",
        answer:
          "Area, not technique. Spot treatment addresses a few specific marks. Full face or chest evens the tone across the whole area.",
      },
    ],
  },
  {
    id: "SKN-01",
    name: "VI Peel",
    shortName: "VI Peel",
    slug: "skin-treatments/vi-peel",
    category: "Skin Treatments",
    priceDisplay: "From $350",
    priceBand: "mid",
    downtime: "days",
    seriesSessions: 3,
    repeatWeeks: 8,
    concernTags: ["pigment", "texture", "acne", "scarring", "sun_damage"],
    pairsWith: ["SB-08"],
    precareId: "PC-PEEL",
    aftercareId: "AC-PEEL",
    shortDescription:
      "A medical-grade peel suitable for all skin types. Includes a post-care kit to take home.",

    options: [],

    intro: [
      "A medical-grade peel that works across all skin types, including darker skin tones where many peels are a poor idea. It addresses pigment, texture and breakouts at the same time.",
      "You go home with the post-care kit and the peeling happens over the following week. Knowing what that week looks like beforehand is the difference between a good experience and a worrying one.",
    ],

    helpsWith: [
      "Uneven pigmentation and melasma",
      "Sun damage",
      "Rough or congested texture",
      "Active breakouts and the marks they leave",
      "Early acne scarring",
    ],

    whoItsFor: [
      "Anyone wanting a reset rather than a gradual change",
      "Patients with darker skin tones, where this peel is safer than most",
      "Anyone who can give the peeling week some room",
    ],

    notFor:
      "The peeling is visible and it is not subtle. Do not book this inside two weeks of anything you want to look your best for. Jyl will tell you to move it rather than let you find out on day three.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl confirms the peel is right for your skin and for your timing.",
      },
      {
        title: "The appointment",
        body: "Cleansing and then the peel itself, applied in layers. It takes about 30 minutes and you leave with the solution still on.",
      },
      {
        title: "Day two to day five",
        body: "The peeling starts. This is the part people are not ready for unless they have been told. Follow the kit instructions and do not pull anything that has not released.",
      },
      {
        title: "The following weeks",
        body: "New skin, and the tone keeps improving for several weeks. Usually a series of three for pigment.",
      },
    ],

    howJylApproaches:
      "Jyl explains the peeling week in detail before you book, because the people who have a bad experience are almost always the ones who did not know what day three would look like.",

    faqs: [
      {
        question: "How bad is the peeling?",
        answer:
          "Visible. It usually starts around day two or three and continues for several days. Plan around it rather than hoping it will be subtle.",
      },
      {
        question: "Is it safe for darker skin?",
        answer:
          "Yes, which is one of the reasons Jyl uses this peel. Many peels are a poor idea on darker skin and this one is formulated differently.",
      },
      {
        question: "How many will I need?",
        answer:
          "NEEDS APPROVAL: confirm Jyl's protocol. Usually a series of three for pigment, spaced several weeks apart.",
      },
      {
        question: "What is in the kit?",
        answer:
          "NEEDS APPROVAL: confirm what the take-home post-care kit contains.",
      },
    ],
  },
  {
    id: "SKN-02",
    name: "Microneedling",
    shortName: "Microneedling",
    slug: "skin-treatments/microneedling",
    category: "Skin Treatments",
    priceDisplay: "From $650",
    priceBand: "high",
    downtime: "minimal",
    seriesSessions: 3,
    repeatWeeks: 6,
    concernTags: ["texture", "scarring", "pores", "fine_lines", "laxity", "hydration"],
    pairsWith: ["HY-05"],
    precareId: "PC-MICRO",
    aftercareId: "AC-RESURFACE",
    shortDescription:
      "Controlled micro-injury that triggers your own repair response, paired with exosomes, PRP or a biphasic peel.",
    options: [
      {
        name: "With exosomes or PRP",
        price: "$675",
        note: "Growth factors applied straight after needling to amplify the repair response.",
      },
      {
        name: "With biphasic peel",
        price: "$650",
        note: "A peel layered with the needling for renewal plus radiance.",
      },
    ],

    intro: [
      "Fine needles create controlled micro-injuries, and the skin responds by rebuilding collagen. The needling is only half of it. What goes on immediately afterwards, while those channels are open, is what decides the result.",
      "Two options: exosomes or your own platelets, which push the healing response further, or a biphasic peel, which adds radiance alongside the renewal. Jyl will tell you which suits your skin.",
    ],

    helpsWith: [
      "Acne scarring and other textural scarring",
      "Enlarged pores",
      "Rough or uneven texture",
      "Fine lines",
      "Loss of firmness",
    ],

    whoItsFor: [
      "Anyone with scarring or texture that skincare will not reach",
      "Patients who want real change with only a day or two of redness",
      "Anyone prepared to do a series rather than a single session",
    ],

    notFor:
      "Active breakouts need settling first, because needling through them spreads bacteria. Jyl will treat the acne before the scarring, in that order.",

    steps: [
      {
        title: "Consultation",
        body: "Jyl assesses the scarring or texture and recommends which pairing suits your skin.",
      },
      {
        title: "The session",
        body: "Numbing, then needling at a depth chosen for the area, then the exosomes, platelets or peel applied straight afterwards.",
      },
      {
        title: "The first days",
        body: "Redness like a sunburn for a day or two, then normal. Aftercare arrives the same day.",
      },
      {
        title: "The series",
        body: "Usually three sessions spaced about six weeks apart, with collagen continuing to build between them.",
      },
    ],

    howJylApproaches:
      "Jyl treats scarring as a series rather than a single appointment, and she will tell you up front how many it is likely to take. One session of microneedling on established scarring is not going to do it, and she would rather say that before you pay for one.",

    faqs: [
      {
        question: "Exosomes or the peel? How do I choose?",
        answer:
          "Jyl chooses, based on what your skin needs. Broadly, the exosomes and platelets push the repair response further, which suits scarring. The peel adds radiance, which suits dullness and texture.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "NEEDS APPROVAL: confirm Jyl's protocol. Usually three, spaced about six weeks apart, but hers is what should appear here.",
      },
      {
        question: "How much downtime?",
        answer:
          "A day or two of redness, like a sunburn. Most people are back to normal makeup the next day.",
      },
      {
        question: "Can I have it if I have active acne?",
        answer:
          "Not over active breakouts. Jyl will treat the acne first and the scarring afterwards.",
      },
    ],
  },
  {
    id: "HYD-01",
    name: "The Refinement Hydrafacial",
    shortName: "The Refinement",
    slug: "hydrafacials/the-refinement",
    category: "Hydrafacials",
    priceDisplay: "$195",
    priceBand: "low",
    downtime: "none",
    seriesSessions: 1,
    repeatWeeks: 4,
    concernTags: ["hydration", "texture", "pores", "dryness"],
    pairsWith: ["HY-01"],
    precareId: "",
    aftercareId: "AC-FACIAL",
    shortDescription:
      "A 50-minute treatment covering analysis, cleanse, exfoliation, extractions, LED, boosters and SPF.",

    options: [],

    intro: [
      "Fifty minutes that covers analysis, cleansing, exfoliation, extractions, LED, boosters and SPF. No downtime at all, which makes it the one treatment here you can have on the day of an event rather than weeks before.",
      "It is also the most useful first appointment for someone who has never had anything done. Nothing is injected, nothing peels, and you leave looking better than when you arrived.",
    ],

    helpsWith: [
      "Dull, tired-looking skin",
      "Congested or enlarged pores",
      "Dryness and dehydration",
      "Rough surface texture",
      "Blackheads and congestion",
    ],

    whoItsFor: [
      "Anyone who wants to look better today rather than in a month",
      "Patients new to treatments who want somewhere gentle to start",
      "Anyone maintaining results between stronger treatments",
    ],

    notFor:
      "This is a surface treatment. It will not change lines, scarring or volume, and anyone promising otherwise is overselling it. For those, Jyl will point you to the treatments that actually address them.",

    steps: [
      {
        title: "Analysis",
        body: "Jyl looks at what your skin needs that day, which is not always what it needed last time.",
      },
      {
        title: "Cleanse and exfoliate",
        body: "The surface is cleared, then exfoliated to reach the congestion underneath.",
      },
      {
        title: "Extractions and boosters",
        body: "Congestion is drawn out, then boosters chosen for your skin are applied, followed by LED.",
      },
      {
        title: "Afterwards",
        body: "SPF, and straight back to your day. No downtime, no redness, nothing to plan around.",
      },
    ],

    howJylApproaches:
      "Jyl uses this as an honest entry point rather than an upsell. If someone new is nervous about injectables, starting here and seeing how a consultation actually goes is better for them than being talked into something larger on a first visit.",

    faqs: [
      {
        question: "Is there any downtime?",
        answer:
          "None. You can have this before an event the same day and look better for it.",
      },
      {
        question: "How often should I have one?",
        answer:
          "Monthly suits most people, which is roughly how long the result holds.",
      },
      {
        question: "Will it help my acne?",
        answer:
          "It clears congestion and that helps, but it is not an acne treatment on its own. For active acne Jyl will recommend something that addresses the cause.",
      },
      {
        question: "What boosters do you use?",
        answer:
          "NEEDS APPROVAL: confirm which boosters Jyl carries and how she chooses between them.",
      },
    ],
  },
];

export interface BookingAction {
  id: string;
  name: string;
  slug: string;
  priceDisplay: string;
  shortDescription: string;
}

// Not pages. These are booking links and reminder triggers only.
export const bookingActions: BookingAction[] = [
  {
    id: "INJ-06",
    name: "Consultation",
    slug: "book/consultation",
    priceDisplay: "$100",
    shortDescription: "A full assessment with the provider. The fee goes toward your completed service.",
  },
  {
    id: "INJ-10",
    name: "Follow Up",
    slug: "book/follow-up",
    priceDisplay: "Free",
    shortDescription: "A complimentary touch-up after your initial tox, usually between weeks two and three.",
  },
  {
    id: "DEV-04",
    name: "Device Follow Up",
    slug: "book/device-follow-up",
    priceDisplay: "Free",
    shortDescription: "A complimentary review of your results and next steps, usually four to five weeks after treatment.",
  },
];

/** Booking link for a service: its own Vagaro URL when set, otherwise the general booking page. */
export function serviceBookingUrl(service: { bookingUrl?: string }): string {
  return service.bookingUrl && service.bookingUrl.trim() ? service.bookingUrl : "https://www.vagaro.com/rinaesthetics";
}
