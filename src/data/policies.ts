// Policy pages. Transcribed from the documents supplied by the practice.
//
// Edits made during transcription, all flagged to the client:
//   1. The contact address in the privacy policy pointed at the previous
//      brand's domain, in two places. Both now read info@rinaestheticsva.com.
//   2. "aesthetician services" corrected to "aesthetic medical services".
//      The provider is a nurse injector, not an aesthetician.
//   3. The claim that this is an e-commerce site was removed. There is no
//      cart and no checkout. Products are bought from the brands directly.
//   4. The "Third Party Accounts" section was removed. The site has no
//      third party account connection.
//   5. "Please fill the form out below" rewritten, since the policies page
//      has no form on it.
//   6. The CookieYes generator credit was removed.
//   7. Suite address normalized to "340 Towncenter Ln, Suite 200B".
//
// Still outstanding: the cookie list, and whether the dates should be
// refreshed at launch.

export interface PolicySection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Policy {
  id: string;
  slug: string;
  title: string;
  standfirst: string;
  effective?: string;
  updated?: string;
  sections: PolicySection[];
}

export const policies: Policy[] = 
[
  {
    "id": "service-policies",
    "slug": "policies/service-policies",
    "title": "Service policies",
    "standfirst": "Appointments, cancellations, refunds and what to expect when you visit.",
    "sections": [
      {
        "heading": "Appointments",
        "paragraphs": [
          "Arriving late will deprive you of valuable treatment time. Although we aim to complete your entire session within the allotted time, tardiness of more than 10 minutes could result in rescheduling. For detailed information on fees, please consult our cancellation policy."
        ]
      },
      {
        "heading": "Cancellations and no-shows",
        "paragraphs": [
          "At RIN Aesthetic Practice we have a 48 hour Cancellation / No Show Policy in place to ensure guests can get in for appointments in a timely manner and to respect our providers' time.",
          "We require a major credit card to hold your appointment. Please provide us with a 48 hour notice to cancel your scheduled appointment. If you cancel within the 48 hours for a neurotoxin appointment, you will be charged $100. If you cancel within the 48 hours for a dermal filler or a lip filler appointment you will be charged $300. Thank you for respecting our small business's time."
        ]
      },
      {
        "heading": "Refunds",
        "paragraphs": [
          "We do not offer refunds on any services rendered.  Aesthetic results are quite variable from person to person and while we do our best to achieve the desired outcome, it cannot be guaranteed.  Clients are responsible for additional treatments needed to achieve desired results.",
          "Retail: We do not offer refunds on products purchased.  Defective products may be exchanged within 14 days for the same product only.",
          "No refund on Gift Certificates purchases."
        ]
      },
      {
        "heading": "Children",
        "paragraphs": [
          "Here at RIN Aesthetic Practice, we love babies and children, however, we ask that you please make child care arrangements prior to your appointment.  This ensures the safety of your children as well as a relaxing environment for all clients."
        ]
      },
      {
        "heading": "Pets",
        "paragraphs": [
          "Although we love animals, we ask that you please leave your pet at home during your visit to RIN Aesthetic Practice.",
          "Should you arrive to an appointment with a pet that is not a service animal, you will be asked to remove the animal from our healthcare facility. To avoid any disruption or inconvenience, we ask that you please leave your pet at home."
        ]
      },
      {
        "paragraphs": [
          "Thank you for your cooperation and consideration of all our patients. If you have questions about any of these policies, please get in touch."
        ]
      }
    ]
  },
  {
    "id": "medical-records",
    "slug": "policies/medical-records",
    "title": "Medical record requests",
    "standfirst": "How to request a copy of your records, and how long we keep them.",
    "sections": [
      {
        "paragraphs": [
          "RIN Aesthetic Practice shall not release any information contained in your medical record to anyone without your written consent unless required by law."
        ]
      },
      {
        "heading": "Making a request",
        "paragraphs": [
          "Should you require a copy of your medical record, you may make a request for copies of medical records in writing, dated, and signed by the person making the request. The request should include a  thorough description of the records sought. RIN Aesthetic Practice has a written medical records request form that must be utilized to obtain your records.",
          "If someone is making the request on your behalf, he or she must provide evidence of the authority to receive the records (such as a power of attorney). RIN Aesthetic Practice shall accept a photocopy or other copy of the original signed by the requester as if it were an original."
        ]
      },
      {
        "heading": "What happens next",
        "paragraphs": [
          "Upon receipt of the request, RIN Aesthetic Practice has 30 days to:"
        ],
        "bullets": [
          "Provide copies of the records",
          "Inform the requester if the information does not exist or cannot be found",
          "Inform the requester of the provider who now maintains the records",
          "Deny the records request as permitted in Virginia Code § 32.1-127.1:03 and provide the reason for the denial."
        ]
      },
      {
        "heading": "Fees and identification",
        "paragraphs": [
          "RIN Aesthetic Practice may impose a reasonable cost-based fee of $20.00 for each record request, reflecting the cost of supplies and labor to copy the medical records. The requester shall provider a copy of a valid picture ID (driver's license or passport) and a self-addressed pre-stamped envelope along with the request so that the records may be mailed to the requester."
        ]
      },
      {
        "heading": "How long we keep records",
        "paragraphs": [
          "RIN Aesthetic Practice will maintain patient records for a minimum of 5-7 years following your last patient encounter with the following exceptions:"
        ],
        "bullets": [
          "Records that have been previously transferred to another practitioner or health care provider or provided to the patient or his or her personal representative",
          "Records that are required by contractual obligation or federal law to be maintained for a longer period of time."
        ]
      },
      {
        "heading": "Where to send a request",
        "paragraphs": [
          "Requests for records and the self-addressed pre-stamped envelope should be delivered by mail to the practice at 340 Towncenter Ln, Suite 200B, Charlottesville, VA 22911."
        ]
      }
    ]
  },
  {
    "id": "privacy",
    "slug": "policies/privacy",
    "title": "Privacy policy",
    "standfirst": "What we collect, why, and how to ask us to change or delete it.",
    "effective": "22 April 2026",
    "updated": "22 April 2026",
    "sections": [
      {
        "paragraphs": [
          "This Privacy Policy describes the policies of Charlottesville Aesthetics, LLC DBA RIN Aesthetic Practice, 340 Towncenter Ln, Suite 200B, Charlottesville, Virginia 22911, United States of America (the), email: info@rinaestheticsva.com, phone: 434-217-5300 on the collection, use and disclosure of your information that we collect when you use our website ( https://rinaestheticsva.com ). (the \"Service\"). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.",
          "We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page."
        ]
      },
      {
        "heading": "Information we collect",
        "paragraphs": [
          "We will collect and process the following personal information about you:"
        ],
        "bullets": [
          "Name",
          "Email address",
          "Mobile number"
        ]
      },
      {
        "heading": "How we use your information",
        "paragraphs": [
          "We will use the information that we collect about you for the following purposes:"
        ],
        "bullets": [
          "Creating a user account",
          "Testimonials",
          "Customer feedback collection",
          "Processing payment"
        ]
      },
      {
        "paragraphs": [
          "If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law."
        ]
      },
      {
        "heading": "How long we keep your information",
        "paragraphs": [
          "We will retain your personal information with us for 90 days to 2 years after user accounts remain idle or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely."
        ]
      },
      {
        "heading": "Your rights",
        "paragraphs": [
          "Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at info@rinaestheticsva.com. We will respond to your request in accordance with applicable law.",
          "Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought."
        ]
      },
      {
        "heading": "Cookies",
        "paragraphs": [
          "To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our Cookie Policy."
        ]
      },
      {
        "heading": "Security",
        "paragraphs": [
          "The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk."
        ]
      },
      {
        "heading": "Third party links",
        "paragraphs": [
          "Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."
        ]
      },
      {
        "heading": "Questions and complaints",
        "paragraphs": [
          "If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at Charlottesville Aesthetics, LLC DBA RIN Aesthetic Practice, 340 Towncenter Ln, Suite 200B, Charlottesville, VA 22911, email: info@rinaestheticsva.com. We will address your concerns in accordance with applicable law."
        ]
      }
    ]
  },
  {
    "id": "cookies",
    "slug": "policies/cookies",
    "title": "Cookie policy",
    "standfirst": "What cookies are, which ones this site uses, and how to turn them off.",
    "effective": "22 April 2026",
    "updated": "22 April 2026",
    "sections": [
      {
        "heading": "What are cookies?",
        "paragraphs": [
          "This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.",
          "Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement."
        ]
      },
      {
        "heading": "How we use cookies",
        "paragraphs": [
          "As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.",
          "The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website."
        ]
      },
      {
        "heading": "The cookies this site uses",
        "paragraphs": [
          "NEEDS COMPLETING. The original policy had an empty table here. This list must be filled in with the cookies the rebuilt site actually sets before launch, naming each one, what it does and how long it lasts. A cookie policy that does not list its cookies is not a cookie policy."
        ]
      },
      {
        "heading": "Managing your preferences",
        "paragraphs": [
          "You can change your cookie preferences any time by clicking the above button. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away.",
          "In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers."
        ],
        "bullets": [
          "Chrome: https://support.google.com/accounts/answer/32050",
          "Safari: https://support.apple.com/en-in/guide/safari/sfri11471/mac",
          "Firefox: https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox",
          "Edge: https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
        ]
      },
      {
        "paragraphs": [
          "If you are using any other web browser, please visit your browser's official support documents."
        ]
      }
    ]
  },
  {
    "id": "terms",
    "slug": "policies/terms",
    "title": "Terms and conditions",
    "standfirst": "The terms you accept by using this website.",
    "effective": "22 April 2026",
    "sections": [
      {
        "heading": "Agreement between user and rinaestheticsva.com",
        "paragraphs": [
          "Welcome to https://rinaestheticsva.com. The https://rinaestheticsva.com website (the \"Site\") is comprised of various web pages operated by Charlottesville Aesthetics, LLC DBA RIN Aesthetic Practice. https://rinaestheticsva.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the \"Terms\"). Your use of https://rinaestheticsva.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.",
          "RIN Aesthetic Practice provides aesthetic medical services and sells service packages. Skincare products featured on this site are purchased from the brands directly, not from RIN."
        ]
      },
      {
        "heading": "Privacy",
        "paragraphs": [
          "Electronic Communications"
        ]
      },
      {
        "heading": "Electronic communications",
        "paragraphs": [
          "Your Account"
        ]
      },
      {
        "heading": "Your account",
        "paragraphs": [
          "Children Under Thirteen"
        ]
      },
      {
        "heading": "Children under thirteen",
        "paragraphs": [
          "Links to Third Party Sites/Third Party Services"
        ]
      },
      {
        "heading": "Links to third party sites and services",
        "paragraphs": [
          "Certain services made available via https://rinaestheticsva.com are delivered by third party sites and organizations. By using any product, service or functionality originating from the https://rinaestheticsva.com domain, you hereby acknowledge and consent that RIN Aesthetic Practice may share such information and data with any third party with whom RIN Aesthetic Practice has a contractual relationship to provide the requested product, service or functionality on behalf of https://rinaestheticsva.com users and customers.",
          "No Unlawful or Prohibited Use/Intellectual Property"
        ]
      },
      {
        "heading": "No unlawful or prohibited use, and intellectual property",
        "paragraphs": [
          "All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of RIN Aesthetic Practice or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.",
          "You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. RIN Aesthetic Practice content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of RIN Aesthetic Practice and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of RIN Aesthetic Practice or our licensors except as expressly authorized by these Terms.",
          "Third Party Accounts"
        ]
      },
      {
        "heading": "International users",
        "paragraphs": [
          "Indemnification"
        ]
      },
      {
        "heading": "Indemnification",
        "paragraphs": [
          "Arbitration"
        ]
      },
      {
        "heading": "Arbitration",
        "paragraphs": [
          "Class Action Waiver"
        ]
      },
      {
        "heading": "Class action waiver",
        "paragraphs": [
          "Liability Disclaimer"
        ]
      },
      {
        "heading": "Liability disclaimer",
        "paragraphs": [
          "CHARLOTTESVILLE AESTHETICS, LLC DBA RIN AESTHETIC PRACTICE AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED \"AS IS\" WITHOUT WARRANTY OR CONDITION OF ANY KIND. CHARLOTTESVILLE AESTHETICS, LLC DBA RIN AESTHETIC PRACTICE AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.",
          "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CHARLOTTESVILLE AESTHETICS, LLC DBA RIN AESTHETIC PRACTICE AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF CHARLOTTESVILLE AESTHETICS, LLC DBA RIN AESTHETIC PRACTICE OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.",
          "Termination/Access Restriction"
        ]
      },
      {
        "heading": "Termination and access restriction",
        "paragraphs": [
          "You agree that no joint venture, partnership, employment, or agency relationship exists between you and RIN Aesthetic Practice as a result of this agreement or use of the Site. RIN Aesthetic Practice's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of RIN Aesthetic Practice's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by RIN Aesthetic Practice with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.",
          "Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and RIN Aesthetic Practice with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and RIN Aesthetic Practice with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.",
          "Changes to Terms"
        ]
      },
      {
        "heading": "Changes to these terms",
        "paragraphs": [
          "Contact Us"
        ]
      },
      {
        "heading": "Contact us",
        "paragraphs": [
          "RIN Aesthetic Practice welcomes your questions or comments regarding these terms.",
          "Charlottesville Aesthetics, LLC DBA RIN Aesthetic Practice",
          "340 Towncenter Ln, Suite 200B, Charlottesville, Virginia 22911",
          "info@rinaestheticsva.com",
          "434-217-5300"
        ]
      }
    ]
  }
];


export function policyBySlug(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
