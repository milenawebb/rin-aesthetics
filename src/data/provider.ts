/**
 * The one definition of how the provider is named and described. Every heading, alt text, meta
 * tag and schema field that names her or states her credential renders from here.
 * The credential is confirmed by the practice.
 * Do not add letters or qualifications that have not been supplied.
 */
export const providerName = "Jyl Carter";
export const providerFirstName = "Jyl";
export const providerCredential = "cosmetic nurse injector";

/** Title case form for titles and schema, such as "Cosmetic Nurse Injector". */
export const providerCredentialTitle = providerCredential.replace(/\b\w/g, (c) => c.toUpperCase());

/** Medical Director named in the About page oversight section. Not part of the Person schema. */
export const medicalDirectorName = "Dawn Fisher";
/** Her credential line. Empty until the practice supplies it; renders nothing while empty. */
export const medicalDirectorCredential = "";
