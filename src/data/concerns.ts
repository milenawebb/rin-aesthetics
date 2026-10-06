// Generated from rin-catalog-and-quiz.xlsx.
// Services on a concern page are derived at runtime by matching tags against
// Service.concernTags. Never hardcode a service list onto a concern.

export interface Concern {
  id: string;
  slug: string;
  h1: string;
  tags: string[];
  // Stage 3 content.
  intro: string;
  body: string[];
  faqs: { question: string; answer: string }[];
}

export const concerns: Concern[] = [
  {
    id: "lines-and-wrinkles",
    slug: "concerns/lines-and-wrinkles",
    h1: "Lines and wrinkles",
    tags: ["fine_lines"],
    intro: "Expression lines come from muscles doing the same thing thousands of times. Static lines, the ones still there when your face is at rest, come from the skin underneath them thinning. They are two different problems, and the treatments below are not interchangeable.",
    body: [
      "The first question is whether the line moves. A line that appears when you frown or raise your brows is being made by a muscle, and relaxing that muscle is what softens it. A line that sits in the skin whether you are expressing or not needs the skin itself rebuilt, which means resurfacing, microneedling or a collagen stimulator.",
      "Most people have both kinds by the time they start looking. That is why the better results usually come from combining a muscle treatment with a skin treatment, rather than doing more of either one.",
      "The two also work on completely different calendars. Neurotoxin shows up quickly and wears off gradually. Collagen treatments show nothing for weeks and then keep improving for months. If you are treating ahead of something, which one you choose decides how far ahead you need to start."
    ],
    faqs: [
      {
        "question": "Will I look frozen?",
        "answer": "Not unless you ask for it. How much movement you keep is decided by dose and placement, and the default here is to leave you expressive. It is easier to add a little at a follow up than to wait out too much."
      },
      {
        "question": "Should I start before I have lines?",
        "answer": "There is a reasonable argument for treating a line before it sets into the skin, because keeping one away is easier than removing one. There is also no urgency. If the line is only there when you move, you have time to think about it."
      },
      {
        "question": "Can I combine more than one of these?",
        "answer": "Often, and sometimes in the same appointment. Which combinations make sense depends on your skin and on what you have had done recently, which is what the consultation is for."
      }
    ],
  },
  {
    id: "volume-loss",
    slug: "concerns/volume-loss",
    h1: "Volume loss",
    tags: ["volume_loss"],
    intro: "Faces deflate before they sag. Fat pads shrink and shift downward, the bone underneath changes shape, and skin that used to have something supporting it now has less. The hollows and the heaviness tend to arrive together, which is why treating one without the other rarely looks right.",
    body: [
      "Replacing volume is not the same as filling in the place where you see the problem. A hollow under the eye is often caused by the cheek above it losing support, and treating that hollow directly can make it look worse. More often than not the product goes somewhere other than the spot that bothers you.",
      "There are two ways to add volume back. Filler puts it there immediately and you see the result the same day. Biostimulators prompt your own collagen to build gradually over a series. Neither is better than the other. They answer different questions about how quickly you want to see change.",
      "The amount needed is usually less than people expect. Faces that look overdone are rarely the result of one strong treatment. They are the result of too many areas treated at once, too quickly, without waiting to see how the first round settled."
    ],
    faqs: [
      {
        "question": "Will people be able to tell?",
        "answer": "They should notice that you look rested rather than that you had something done. That is a function of how much is placed and how it is spread out, not of which product is used."
      },
      {
        "question": "Is filler or a biostimulator better for me?",
        "answer": "It depends on whether you want to see the change now or over a few months, and on how much structural support has been lost. Jyl will tell you which she would choose for your face and why, including when the honest answer is that neither is worth doing yet."
      },
      {
        "question": "What happens when it wears off?",
        "answer": "Your face returns to where it would have been. Neither filler nor a biostimulator makes anything worse when it fades, and neither one commits you to continuing."
      }
    ],
  },
  {
    id: "facial-contour",
    slug: "concerns/facial-contour",
    h1: "Facial contour and balance",
    tags: ["contour"],
    intro: "Contour is about proportion rather than any single feature. A jawline that has softened, a chin that sits back, cheeks that have flattened and a profile that has lost its angles are usually one change rather than four, and they tend to respond better to being treated as one.",
    body: [
      "This is the concern where treating the thing that bothers you is least likely to work. People who dislike their jawline often need the cheek supported. People who want a sharper profile often need the chin projected rather than the jaw defined. What you see in the mirror is the symptom, and the cause is usually somewhere above it.",
      "That is the reasoning behind full facial balancing as a single appointment rather than a series of separate ones. Treating areas one at a time, months apart, means each decision is made without seeing how it sits against the others.",
      "It is also the concern where doing less is most often the right answer. If what is bothering you is a proportion you have had your whole life rather than one that has changed, say so at the consultation, because that is a different conversation and sometimes a different answer."
    ],
    faqs: [
      {
        "question": "Is this the same as a liquid facelift?",
        "answer": "That phrase gets used for a lot of different things. What happens here is that proportions are assessed across the whole face and treated in the order that supports the structure, rather than area by area."
      },
      {
        "question": "Do I have to do everything at once?",
        "answer": "No. It is planned as one assessment, and it can be carried out in stages. What matters is that the plan is made with the whole face in view, not that it is all done on the same day."
      },
      {
        "question": "Can this make my face look wider?",
        "answer": "It can, if volume is added without regard to proportion. Avoiding that is most of the skill involved, and it is the reason this is assessed as a whole rather than treated as a list of areas."
      }
    ],
  },
  {
    id: "skin-laxity",
    slug: "concerns/skin-laxity",
    h1: "Skin laxity and firmness",
    tags: ["laxity"],
    intro: "Laxity is skin that has lost its spring, and it is not the same as volume loss, although they usually turn up together. Volume loss is about what sits under the skin. Laxity is about the collagen and elastin in the skin itself.",
    body: [
      "This is the concern where expectations need setting honestly, because it is the one most heavily oversold. Energy-based treatments and collagen stimulators genuinely tighten skin, and they genuinely do not do what surgery does. Anything advertising a facelift result without surgery is describing a different outcome than the one you will get.",
      "What they do well is slow the trajectory and improve quality. Skin that is firmer, thicker and more even is a real result and it is often what people actually wanted when they asked about tightening.",
      "These also work cumulatively rather than immediately. The first session is rarely the impressive one, and judging the result before the series is finished is the most common way people conclude something did not work when it was still working."
    ],
    faqs: [
      {
        "question": "Will this replace a facelift?",
        "answer": "No. It is a different category of result. If what you want is what surgery does, Jyl will say so rather than sell you a series that cannot get you there."
      },
      {
        "question": "When will I see something?",
        "answer": "Later than you would like. These treatments work by prompting your own collagen, which takes weeks to build and keeps building afterwards. The result at the end of a series is not the final result."
      },
      {
        "question": "Which one tightens the most?",
        "answer": "It depends on where the laxity is and how thick your skin is, which is why the table above does not rank them. Depth matters more than strength, and that is assessed in person."
      }
    ],
  },
  {
    id: "lips",
    slug: "concerns/lips",
    h1: "Lips",
    tags: ["lips"],
    intro: "Lips change in two separate ways. They lose volume, and the border and the skin around them soften. Filler answers the first. The second usually needs something else, which is why lip filler is not always the answer to a complaint about lips.",
    body: [
      "Most people who ask for lip filler want definition rather than size. Those are different injections, placed differently, and the amount of product involved can be very small. If what you want is shape rather than volume, say that, because it changes the approach entirely.",
      "The lines above the lip are a different problem from the lips themselves. Those vertical lines are in the skin, and filling the lip will not remove them. They need something that works on skin texture, and the two are often done at separate appointments rather than together.",
      "Lips swell more than anywhere else on the face. What you see on the day is not the result. Judging it too early is the most common reason people ask for more before they needed it."
    ],
    faqs: [
      {
        "question": "How much bigger will they look?",
        "answer": "As much or as little as you want, within what your lips can carry well. The default here is to start conservatively, because adding more at a follow up is straightforward and the reverse is a longer conversation."
      },
      {
        "question": "Can filler fix the lines above my lip?",
        "answer": "Usually not. Those lines sit in the skin rather than in the lip, and adding volume underneath them does not smooth them. They respond to treatments aimed at skin texture instead."
      },
      {
        "question": "How long before they look normal?",
        "answer": "Swelling is immediate and settles over the following days. Do not book this for the day before something that matters, and do not judge the shape until it has calmed down."
      }
    ],
  },
  {
    id: "under-eye-area",
    slug: "concerns/under-eye-area",
    h1: "Under-eye area",
    tags: ["eye_area"],
    intro: "Dark circles, hollows and puffiness look alike in the mirror and have almost nothing in common underneath. One is pigment in the skin, one is shadow cast by lost volume, one is fluid or fat. Treating the wrong one is the most common mistake made in this area.",
    body: [
      "There is a quick test you can do yourself. Face a mirror, tilt your head back, and look up. If the darkness lifts, it is shadow from a hollow. If it stays where it is, it is pigment. Those two need different treatments, and nothing treats both at once.",
      "This is also the least forgiving area on the face. The skin is thin, the anatomy underneath is crowded, and products behave differently here than anywhere else. It is the area where the honest answer is most often not yet, or not with this.",
      "Sleep, allergies and salt move this area more than people expect. If what you see changes noticeably from one day to the next, part of it is not structural, and no treatment on this page will hold it still."
    ],
    faqs: [
      {
        "question": "Can anything fix dark circles?",
        "answer": "It depends entirely on what is causing them. Shadow from a hollow and pigment in the skin look the same and respond to completely different things, which is why this area is assessed in person before anything is recommended."
      },
      {
        "question": "Why are some practices cautious about treating here?",
        "answer": "Because it is technically demanding and mistakes are visible, close to the eye, and slow to resolve. Caution here is a good sign rather than a limitation."
      },
      {
        "question": "Will makeup still be needed afterwards?",
        "answer": "Possibly, and that is not a failure. The goal is to improve what is causing the shadow or the darkness, not to guarantee you will never reach for concealer again."
      }
    ],
  },
  {
    id: "pigmentation",
    slug: "concerns/pigmentation",
    h1: "Pigmentation and sun damage",
    tags: ["pigment", "sun_damage"],
    intro: "Brown spots, uneven tone and melasma are not one condition. They look similar in a photograph and they are managed differently, and the treatment that clears one of them can make another worse. That is why pigment is assessed before anything is aimed at it.",
    body: [
      "Sun damage collected over years outdoors usually clears well with light-based treatment, and often faster than people expect. Melasma is hormonal, sits deeper, and returns. Telling them apart is the first thing that happens, because getting it wrong is not a wasted appointment, it is a setback.",
      "Whatever is done in the room, pigment comes back without daily sun protection. This is the one concern where the home routine is not an optional extra. It is most of the result.",
      "Expect this to be staged rather than finished in one visit. Pigment lifts in layers, and pushing harder to finish sooner is how post-inflammatory pigmentation starts, which leaves you with more than you began with."
    ],
    faqs: [
      {
        "question": "Will it come back?",
        "answer": "Sun damage stays away if you protect against more of it. Melasma is more likely to return regardless, which is why it is managed over time rather than treated once."
      },
      {
        "question": "I think I have melasma. Can I still be treated?",
        "answer": "Often yes, but carefully and not with everything. Heat and aggressive light can worsen melasma, so it is identified first and the approach is chosen around it."
      },
      {
        "question": "Why did my spots look darker afterwards?",
        "answer": "That is expected with light-based treatment. Treated pigment darkens before it lifts away over the following days. It is a sign the treatment reached its target."
      }
    ],
  },
  {
    id: "redness",
    slug: "concerns/redness",
    h1: "Redness and visible vessels",
    tags: ["redness"],
    intro: "Flushing, background redness and visible vessels usually travel together and respond differently. Individual vessels can be targeted directly and often change visibly. Diffuse redness improves by degrees over a series. Rosacea underlies a lot of this, and rosacea is managed rather than cured.",
    body: [
      "The fine vessels around the nose and cheeks are the most satisfying thing to treat here, because the change is often obvious after a single session. Generalized background flush is slower, improves gradually, and is better judged across a series than after any one appointment.",
      "Triggers matter more than treatment frequency for most people. Heat, alcohol, spice and sun will undo progress faster than anything done in the room can build it. The people who get the most out of this are the ones who already know what sets them off.",
      "If redness is new, spreading, or arrives with bumps, pain or irritated eyes, that is a question for a dermatologist before it is an aesthetic one. Say so at your consultation and you will be told the same thing."
    ],
    faqs: [
      {
        "question": "Is this a cure for rosacea?",
        "answer": "No. Rosacea is a condition that is managed, not resolved. What treatment does here is reduce how visible it is, and that result is maintained rather than permanent."
      },
      {
        "question": "Do the vessels come back?",
        "answer": "A vessel that has been treated is gone. New ones can form over time, particularly if the underlying flushing is not managed, which is why triggers matter as much as sessions."
      },
      {
        "question": "Will my face be red afterwards?",
        "answer": "Yes, for a while, which is the part people find counterintuitive about treating redness. It settles, and the aftercare on the treatment page says how long to expect and what to avoid."
      }
    ],
  },
  {
    id: "texture-and-pores",
    slug: "concerns/texture-and-pores",
    h1: "Texture and pores",
    tags: ["texture", "pores"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "acne-and-scarring",
    slug: "concerns/acne-and-scarring",
    h1: "Acne and acne scarring",
    tags: ["acne", "scarring"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "dryness-and-dullness",
    slug: "concerns/dryness-and-dullness",
    h1: "Dryness and dullness",
    tags: ["dryness", "hydration"],
    intro: "",
    body: [],
    faqs: [],
  },
  {
    id: "hair-thinning",
    slug: "concerns/hair-thinning",
    h1: "Hair thinning",
    tags: ["hair_loss"],
    intro: "",
    body: [],
    faqs: [],
  },
];

export function servicesForConcern<T extends { concernTags: string[] }>(
  concern: Concern,
  all: T[],
): T[] {
  return all.filter((s) => s.concernTags.some((t) => concern.tags.includes(t)));
}
