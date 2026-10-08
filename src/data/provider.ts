/**
 * The one definition of how the provider is named and described. Every heading, alt text, meta
 * tag and schema field that names her or states her credential renders from here.
 * The credential is unconfirmed: change providerCredential once the practice supplies the exact line.
 * Do not add letters or qualifications that have not been supplied.
 */
export const providerName = "Jyl Carter";
export const providerFirstName = "Jyl";
export const providerCredential = "nurse injector";

/** Title case form for titles and schema, such as "Nurse Injector". */
export const providerCredentialTitle = providerCredential.replace(/\b\w/g, (c) => c.toUpperCase());
