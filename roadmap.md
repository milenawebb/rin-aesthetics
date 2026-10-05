# Ask RIN removal

- [x] Unmount Ask RIN and remove canned replies while retaining its interface
- [x] Remove floating-button clearance from Contact and the booking band
- [ ] Verify home, Lip Filler, and Contact with no floating control or layout regressions

# Gallery roadmap

- [x] Add supplied gallery data and derived concern matching
- [x] Build consent-gated side-by-side pair and gallery grid
- [x] Preserve home desktop reveal and add touch side-by-side behavior
- [x] Build Results page with filters and larger pair view
- [x] Connect service and concern pages
- [x] Verify all placements, filters, consent paths, and responsive layouts

# Contact page roadmap

- [x] Add Follow as the fourth contact route
- [x] Replace the storefront image and preserve its full frame
- [x] Store validated contact submissions in Lovable Cloud
- [ ] Send each submission to the practice through Resend, blocked until the Resend connection is linked
- [x] Add visible success and failure states with spam protection
- [x] Verify desktop, mobile, persistence, failure behavior, and clean build

# Launch checklist

- [ ] Change the contact form recipient back from milena221@gmail.com to info@rinaestheticsva.com
- [ ] Connect Resend and verify a sending subdomain (root rinaestheticsva.com already has MX records for hosted mail). The From address in the send code must be on the exact verified domain, including subdomain: a verified send.rinaestheticsva.com cannot send From info@rinaestheticsva.com (403 domain mismatch). Reply-to stays the visitor's address.
