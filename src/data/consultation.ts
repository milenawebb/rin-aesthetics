/**
 * The one definition of the consultation. Every mention of its fee or credit on the site renders
 * from here. Wording is Vagaro's published policy; add no conditions the practice has not stated.
 */
export const consultation = {
  name: "Consultation",
  fee: "$100",
  credit: "applied toward a completed service",
} as const;

/** The short line shown beside every call to action that books a consultation. */
export const consultationFeeLine = `${consultation.name} ${consultation.fee}, ${consultation.credit}`;
