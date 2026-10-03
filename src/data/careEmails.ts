// Generated from rin-catalog-and-quiz.xlsx, Care Emails tab.
// One record drives BOTH the email and the matching section of the service
// page. They must never be allowed to disagree about aftercare.
//
// Bullets are split at sentence ends, never at commas. Clinical copy uses
// commas inside a single instruction ("Avoid sun exposure, tanning beds and
// self-tanner") and splitting there changes the meaning.
//
// showOnPage is false for a touch whose only job is to get someone to
// rebook. Those are emails, not care instructions, and they read as nonsense
// in a list of things to do after a treatment.

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
  // Email always. Page only when true.
  showOnPage: boolean;
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
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: -24,
        subject: "See you tomorrow",
        topicsToCover: "Short reminder of the day-of points only: clean skin, no makeup, SPF.",
        body: ["Your appointment is tomorrow.", "Come with clean skin, free of makeup, moisturizer and sunscreen.", "No sun, no self-tanner.", "If you have had any sun exposure since we spoke, or if anything has changed with your skin, call us today rather than tomorrow so we can decide together whether to go ahead."],
        productIds: [],
        showOnPage: true,
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
        showOnPage: true,
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
        body: ["Stop retinol, retinoids and exfoliating acids one week before your appointment.", "Avoid sun exposure, tanning beds and self-tanner.", "Do not wax or have laser hair removal on the area in the two weeks beforehand.", "Arrive with clean skin, free of makeup.", "Plan your week before you come.", "The peeling usually starts around day two or three and continues for several days, and it is visible.", "Do not book anything you want to look your best for inside two weeks of this appointment."],
        productIds: [],
        showOnPage: true,
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
        body: ["Stop retinol, retinoids and exfoliating acids three days before your appointment.", "Avoid sun exposure and self-tanner.", "Stop fish oil, vitamin E and ibuprofen for three days beforehand if your doctor says it is safe to pause them.", "Do not come with active breakouts in the treatment area, and call us instead so we can move the appointment.", "Arrive with clean skin, free of makeup."],
        productIds: [],
        showOnPage: true,
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
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Checking in on day one",
        topicsToCover: "What is normal at 24 hours, and what is not.",
        body: ["Mild tenderness, a small bruise or a faint headache in the first day is normal.", "You will not see much change yet, and that is expected.", "Movement starts to ease around day three or four.", "Call the practice if you have drooping of an eyelid or brow, difficulty swallowing, or anything that feels wrong rather than just new."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 336,
        subject: "Time for your complimentary follow-up",
        topicsToCover: "Results are assessed around two weeks. Direct link to book the free Follow Up.",
        body: ["Your result is now at its full effect, which is why this is the right moment to look at it together.", "Your follow-up is complimentary and takes a few minutes.", "If anything needs adjusting, this is when it gets adjusted, and it is included."],
        productIds: [],
        showOnPage: false,
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
        body: ["Stay upright for the next four hours.", "Do not rub, massage or press on the treated areas today.", "Skip exercise, hot yoga, saunas and anything that raises your heart rate until tomorrow.", "Use a cool compress gently if you are swollen, never ice directly on the skin.", "Swelling and bruising in the first days are normal and expected.", "Call the practice straight away if you have severe or increasing pain, skin that looks white or mottled, or any change in your vision."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Day one check-in",
        topicsToCover: "What is normal now. Sleeping and activity guidance.",
        body: ["Swelling is usually at its worst today or tomorrow.", "Sleep with your head elevated on an extra pillow tonight.", "You can return to normal activity and light exercise.", "Keep avoiding saunas, steam rooms and sunbeds for another few days.", "Do not judge the result yet.", "What you are looking at today is swelling, not filler."],
        productIds: ["HY-09"],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 72,
        subject: "Day three update",
        topicsToCover: "Swelling should be settling. What warrants a call.",
        body: ["Swelling should be noticeably settling by now and any bruising should be fading.", "Makeup over the area is fine.", "If one side looks different from the other, that is common at this stage and usually evens out.", "Call the practice if swelling is increasing rather than decreasing, if an area is hot or painful to touch, or if you have a lump that is firm and growing."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 4,
        sendOffsetHours: 336,
        subject: "How is it settling?",
        topicsToCover: "Final result assessment. Offer a review appointment.",
        body: ["Your filler has now fully settled, so this is the first fair look at the result.", "If anything needs adjusting, now is the right time to look at it together rather than months from now.", "Reply to this email or call the practice and we will find you a time."],
        productIds: [],
        showOnPage: true,
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
        body: ["NEEDS APPROVAL: the massage protocol is the clinically important part of this email and it must come from Jyl.", "Confirm whether she prescribes at-home massage, how many times a day, for how many minutes, and for how many days.", "Draft of the rest: Avoid exercise, saunas and anything that raises your heart rate until tomorrow.", "Mild swelling and tenderness are normal.", "Call the practice if you have increasing pain, a hot or red area, or a firm lump."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Day one reminder",
        topicsToCover: "Reinforce the massage schedule if she uses one.",
        body: ["NEEDS APPROVAL: this email exists to reinforce the massage schedule and cannot be written until that protocol is confirmed."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 168,
        subject: "One week in",
        topicsToCover: "What to expect over coming weeks. When the next session in the series falls.",
        body: ["This treatment works slowly, so there is very little to see yet and that is exactly as expected.", "Your own collagen rebuilds over the coming months, and the change will be gradual enough that you may notice it first in a photograph.", "Your next session in the series is the point at which we build on this one, so keep that appointment even though you cannot see much yet."],
        productIds: [],
        showOnPage: true,
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
        body: ["Leave the scalp alone for the rest of today.", "No washing, no hats, no products.", "Skip exercise, saunas and anything that raises your heart rate until tomorrow.", "Tenderness and small bumps where the injections went in are normal and settle within a day.", "Avoid alcohol tonight.", "Call the practice if you have increasing pain, spreading redness, or any discharge from an injection site."],
        productIds: ["HY-05"],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 72,
        subject: "Day three check-in",
        topicsToCover: "Normal recovery signs. When to call.",
        body: ["Any tenderness should be gone by now and you can return to your normal routine, including washing and styling as usual.", "Do not expect to see anything yet.", "Shedding usually slows first, and that takes weeks rather than days.", "Call the practice if you have an area that is still sore, red or swollen."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 840,
        subject: "Ready for your next session?",
        topicsToCover: "Sessions are usually spaced about six weeks apart. Rebooking link.",
        body: ["Your next session is due.", "The series works because the sessions build on each other, and leaving a long gap between them undoes some of that.", "Book your next appointment using the link below."],
        productIds: [],
        showOnPage: false,
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
        body: ["Keep the treated area cool and leave it alone for the rest of today.", "No makeup, no actives, nothing beyond a gentle cleanser and the moisturizer you were given.", "Skip exercise, saunas, hot showers and anything that raises your heart rate or your body temperature until tomorrow.", "Stay out of the sun completely and wear SPF every day from tomorrow onward, including when you are indoors near windows.", "Redness and warmth like a sunburn are normal today.", "Call the practice if you have blistering, severe pain, or any area that looks infected."],
        productIds: ["SB-08"],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 72,
        subject: "Day three check-in",
        topicsToCover: "Normal recovery. For pigment work, the darkening and flaking that is expected.",
        body: ["Redness should be settling and your skin may feel rough or look slightly darker in treated spots.", "If we treated pigment, those spots will darken, then flake away over the next several days.", "That is the treatment working and it is the stage people worry about unnecessarily.", "Do not pick, scrub or exfoliate anything that has not released on its own.", "Keep wearing SPF daily.", "Call the practice if you have blistering, increasing pain, or an area that is hot and spreading."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 672,
        subject: "Your complimentary device follow-up",
        topicsToCover: "Four to five weeks post-treatment. Direct link to book the free Device Follow Up.",
        body: ["Your complimentary follow-up is due.", "This is where we look at the result together, decide whether anything else would help, and plan what comes next if it would.", "It takes a few minutes and it is included.", "Book it using the link below."],
        productIds: ["SB-07"],
        showOnPage: false,
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
        body: ["Cleanse gently with your fingers only, no cloths and no brushes.", "Apply the moisturizer you were given and nothing else.", "No retinol, no acids, no vitamin C and no scrubs.", "Skip makeup today.", "Avoid exercise, saunas, hot showers and direct sun.", "Redness, warmth and tightness are normal today.", "Call the practice if you have blistering, severe pain, or anything that looks infected."],
        productIds: ["HY-05"],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 24,
        subject: "Day one care",
        topicsToCover: "What is normal now. Barrier support and sun protection.",
        body: ["Your skin will feel rough and tight today, and may look slightly bronzed or sandpapery.", "That is the treated tissue working its way out and it is exactly what should be happening.", "Keep cleansing gently and moisturizing often.", "SPF every single day from now on.", "Makeup is usually fine from today if you want it.", "Do not scrub, pick or exfoliate.", "Let everything come away on its own."],
        productIds: ["SB-05", "SB-08"],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 72,
        subject: "Day three check-in",
        topicsToCover: "When actives can come back in. Warning signs.",
        body: ["The roughness should be settling and new skin coming through.", "You can usually bring your normal cleanser back now.", "Wait until the skin is completely smooth and calm before restarting retinol, acids or vitamin C, which is typically around a week.", "Keep wearing SPF daily.", "The result keeps improving for several weeks as collagen rebuilds.", "Call the practice if any area is still raw, painful, or has not healed."],
        productIds: [],
        showOnPage: true,
      },
      {
        touch: 4,
        sendOffsetHours: 672,
        subject: "Your complimentary device follow-up",
        topicsToCover: "Book the free Device Follow Up, and the next session if it's a series.",
        body: ["Your complimentary follow-up is due.", "This is where we assess how your skin responded and decide whether a second session would add anything.", "It takes a few minutes and it is included.", "If you are partway through a series, this is also when we book the next one."],
        productIds: ["SB-01"],
        showOnPage: false,
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
        body: ["Follow the kit instructions exactly, in the order given.", "Do not wash your face until the time stated in your kit.", "Avoid exercise, saunas, hot showers and sun completely.", "No makeup today.", "Your skin will feel tight and may look slightly bronzed or darker before anything peels.", "That is normal.", "Call the practice if you have severe pain, blistering, or swelling that is spreading."],
        productIds: ["SB-08"],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 48,
        subject: "Day two: the peeling starts",
        topicsToCover: "What peeling looks like and the do-not-pick message. This is the email that stops the panic call.",
        body: ["The peeling starts around now, and this is the part that worries people who have not been told what to expect.", "It is meant to happen.", "Your skin will come away in sheets over the next several days, and underneath is the result.", "Do not pull, pick or peel anything that has not released on its own.", "Pulling skin that is not ready is how people end up with marks that last months.", "Keep using the kit, keep moisturizing, and stay out of the sun entirely.", "Call the practice if you have blistering, severe pain, or an area that looks infected."],
        productIds: ["SB-05"],
        showOnPage: true,
      },
      {
        touch: 3,
        sendOffsetHours: 168,
        subject: "One week on",
        topicsToCover: "Reintroducing actives. When the next peel in the series falls.",
        body: ["The peeling should be finished and your new skin visible.", "Tone keeps improving over the next few weeks, so this is not the final result.", "Wait until the skin is completely calm before restarting retinol, acids or vitamin C, and reintroduce one product at a time.", "SPF daily, without exception, or the pigment comes back.", "Your next peel in the series is what builds on this one."],
        productIds: [],
        showOnPage: true,
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
        body: ["Leave your skin alone for the rest of today.", "No makeup if you can manage it, no actives, and nothing exfoliating.", "Wear SPF, and keep wearing it.", "Drink some water.", "That is genuinely the whole list.", "There is no downtime with this one, which is the point of it."],
        productIds: ["HY-01"],
        showOnPage: true,
      },
      {
        touch: 2,
        sendOffsetHours: 672,
        subject: "Ready to rebook?",
        topicsToCover: "Monthly cadence nudge. Retention, not clinical.",
        body: ["Your skin holds the result of a hydrafacial for about a month, which is why most people come monthly.", "If you are due, book your next one using the link below."],
        productIds: [],
        showOnPage: true,
      },
    ],
  },
];

export function seriesById(id: string): CareSeries | undefined {
  return careSeries.find((s) => s.id === id);
}

// Bullets for the service page: written touches that belong on a page.
export function pageBullets(s: CareSeries | undefined): string[] {
  if (!s) return [];
  return s.touches
    .filter((t) => t.showOnPage && t.body.length > 0)
    .sort((a, b) => a.touch - b.touch)
    .flatMap((t) => t.body);
}

// True when a series has anything to show on a page.
export function hasContent(s: CareSeries | undefined): boolean {
  return pageBullets(s).length > 0;
}
