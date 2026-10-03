// Generated from rin-catalog-and-quiz.xlsx, Care Emails tab.
// One record drives BOTH the email and the matching section of the service
// page. They must never be allowed to disagree about aftercare.
//
// Bullets are split at sentence ends, never at commas. Clinical copy uses
// commas inside a single instruction ("Avoid sun exposure, tanning beds and
// self-tanner") and splitting there changes the meaning.
//
// body is empty on every series except PC-LASER. The provider owes that
// clinical copy. An empty body renders nothing: no heading, no empty box.

export type SeriesType = "precare" | "aftercare";

export interface CareTouch {
  touch: number;
  // Hours relative to the appointment. Negative is before.
  sendOffsetHours: number;
  subject: string;
  topicsToCover: string;
  // Bullet lines. Empty until written and approved by the provider.
  body: string[];
  productIds: string[];
}

export interface CareSeries {
  id: string;
  type: SeriesType;
  name: string;
  touches: CareTouch[];
}

export const careSeries: CareSeries[] = [
  {
    id: "PC-LASER",
    type: "precare",
    name: "Laser prep",
    touches: [
      {
        touch: 1,
        sendOffsetHours: -168,
        subject: "Getting ready for your treatment next week",
        topicsToCover: "Her published one-week prep instruction, verbatim.",
        body: ["Avoid sun exposure, tanning beds and self-tanner.", "Stop retinol and retinoids, exfoliating acids and chemical peels.", "Wear SPF daily.", "Arrive with clean skin, free of makeup or lotions."],
        productIds: ["SB-08"],
      },
      {
        touch: 2,
        sendOffsetHours: -24,
        subject: "See you tomorrow",
        topicsToCover: "Short reminder of the day-of points only: clean skin, no makeup, SPF.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "PC-INJECT",
    type: "precare",
    name: "Injectable prep",
    touches: [
      {
        touch: 1,
        sendOffsetHours: -48,
        subject: "Before your appointment",
        topicsToCover: "Anything she wants avoided beforehand, and what to expect on the day.",
        body: ["Avoid alcohol for 24 hours before your appointment.", "Stop fish oil, vitamin E, ibuprofen and other blood thinners for three days beforehand if your doctor says it is safe to pause them.", "Come with clean skin.", "Let Jyl know if you have a dental appointment or any vaccination booked within two weeks either side."],
        productIds: [],
      },
    ],
  },
  {
    id: "PC-PEEL",
    type: "precare",
    name: "Peel prep",
    touches: [
      {
        touch: 1,
        sendOffsetHours: -168,
        subject: "Preparing for your VI Peel",
        topicsToCover: "Prep instructions, plus what the peeling week will actually look like so nobody is surprised.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "PC-MICRO",
    type: "precare",
    name: "Microneedling prep",
    touches: [
      {
        touch: 1,
        sendOffsetHours: -72,
        subject: "Before your microneedling appointment",
        topicsToCover: "Products to pause beforehand and day-of instructions.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "AC-TOX",
    type: "aftercare",
    name: "Neurotoxin aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "What to do and avoid for the rest of today. When to call.",
        body: ["Stay upright for the next four hours.", "Do not rub, massage or press on the treated areas today.", "Skip exercise, hot yoga, saunas and anything that raises your heart rate until tomorrow.", "Small raised bumps at the injection points are normal and settle within an hour.", "Call the practice if you have anything you were not expecting."],
        productIds: [],
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Checking in on day one",
        topicsToCover: "What is normal at 24 hours, and what is not.",
        body: ["Mild tenderness, a small bruise or a faint headache in the first day is normal.", "You will not see much change yet, and that is expected.", "Movement starts to ease around day three or four.", "Call the practice if you have drooping of an eyelid or brow, difficulty swallowing, or anything that feels wrong rather than just new."],
        productIds: [],
      },
      {
        touch: 3,
        sendOffsetHours: 336,
        subject: "Time for your complimentary follow-up",
        topicsToCover: "Results are assessed around two weeks. Direct link to book the free Follow Up.",
        body: ["Your result is now at its full effect, which is why this is the right moment to look at it together.", "Your follow-up is complimentary and takes a few minutes.", "If anything needs adjusting, this is when it gets adjusted, and it is included."],
        productIds: [],
      },
    ],
  },
  {
    id: "AC-FILLER",
    type: "aftercare",
    name: "Filler aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "First 24 hours. Swelling and bruising expectations. When to call.",
        body: [],
        productIds: [],
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Day one check-in",
        topicsToCover: "What is normal now. Sleeping and activity guidance.",
        body: [],
        productIds: ["HY-09"],
      },
      {
        touch: 3,
        sendOffsetHours: 72,
        subject: "Day three update",
        topicsToCover: "Swelling should be settling. What warrants a call.",
        body: [],
        productIds: [],
      },
      {
        touch: 4,
        sendOffsetHours: 336,
        subject: "How is it settling?",
        topicsToCover: "Final result assessment. Offer a review appointment.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "AC-BIOSTIM",
    type: "aftercare",
    name: "Biostimulator aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "Any at-home massage protocol she prescribes. First-day guidance.",
        body: [],
        productIds: [],
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Day one reminder",
        topicsToCover: "Reinforce the massage schedule if she uses one.",
        body: [],
        productIds: [],
      },
      {
        touch: 3,
        sendOffsetHours: 168,
        subject: "One week in",
        topicsToCover: "What to expect over coming weeks. When the next session in the series falls.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "AC-PRP",
    type: "aftercare",
    name: "PRP and EZ Gel aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "First-day guidance. What to avoid.",
        body: [],
        productIds: ["HY-05"],
      },
      {
        touch: 2,
        sendOffsetHours: 72,
        subject: "Day three check-in",
        topicsToCover: "Normal recovery signs. When to call.",
        body: [],
        productIds: [],
      },
      {
        touch: 3,
        sendOffsetHours: 840,
        subject: "Ready for your next session?",
        topicsToCover: "Sessions are usually spaced about six weeks apart. Rebooking link.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "AC-LASER",
    type: "aftercare",
    name: "Laser and IPL aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "First-day guidance. Heat, sun and activity restrictions.",
        body: [],
        productIds: ["SB-08"],
      },
      {
        touch: 2,
        sendOffsetHours: 72,
        subject: "Day three check-in",
        topicsToCover: "Normal recovery. For pigment work, the darkening and flaking that is expected.",
        body: [],
        productIds: [],
      },
      {
        touch: 3,
        sendOffsetHours: 672,
        subject: "Your complimentary device follow-up",
        topicsToCover: "Four to five weeks post-treatment. Direct link to book the free Device Follow Up.",
        body: [],
        productIds: ["SB-07"],
      },
    ],
  },
  {
    id: "AC-RESURFACE",
    type: "aftercare",
    name: "Resurfacing aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "First 24 hours. Cleansing, sun, what to apply and what to leave off.",
        body: [],
        productIds: ["HY-05"],
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Day one care",
        topicsToCover: "What is normal now. Barrier support and sun protection.",
        body: [],
        productIds: ["SB-05", "SB-08"],
      },
      {
        touch: 3,
        sendOffsetHours: 72,
        subject: "Day three check-in",
        topicsToCover: "When actives can come back in. Warning signs.",
        body: [],
        productIds: [],
      },
      {
        touch: 4,
        sendOffsetHours: 672,
        subject: "Your complimentary device follow-up",
        topicsToCover: "Book the free Device Follow Up, and the next session if it's a series.",
        body: [],
        productIds: ["SB-01"],
      },
    ],
  },
  {
    id: "AC-PEEL",
    type: "aftercare",
    name: "VI Peel aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Your aftercare instructions",
        topicsToCover: "How to use the post-care kit that came with the peel. Day-one guidance.",
        body: [],
        productIds: ["SB-08"],
      },
      {
        touch: 2,
        sendOffsetHours: 48,
        subject: "Day two: the peeling starts",
        topicsToCover: "What peeling looks like and the do-not-pick message. This is the email that stops the panic call.",
        body: [],
        productIds: ["SB-05"],
      },
      {
        touch: 3,
        sendOffsetHours: 168,
        subject: "One week on",
        topicsToCover: "Reintroducing actives. When the next peel in the series falls.",
        body: [],
        productIds: [],
      },
    ],
  },
  {
    id: "AC-FACIAL",
    type: "aftercare",
    name: "Hydrafacial aftercare",
    touches: [
      {
        touch: 1,
        sendOffsetHours: 1,
        subject: "Getting the most from today",
        topicsToCover: "Light guidance for the rest of the day. Sun protection.",
        body: [],
        productIds: ["HY-01"],
      },
      {
        touch: 2,
        sendOffsetHours: 672,
        subject: "Ready to rebook?",
        topicsToCover: "Monthly cadence nudge. Retention, not clinical.",
        body: [],
        productIds: [],
      },
    ],
  },
];

export function seriesById(id: string): CareSeries | undefined {
  return careSeries.find((s) => s.id === id);
}

// True when a series has at least one touch with written body copy.
export function hasContent(s: CareSeries | undefined): boolean {
  return !!s && s.touches.some((t) => t.body.length > 0);
}
