import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Terms and Conditions, transcribed verbatim from the authoritative
// source document supplied for the November 5, 2026 Forest Hills Media Inc.
// language update.
// Effective November 5, 2026

export const termsAndConditions: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "Terms and Conditions",
  subtitle: "Forest Hills Media Inc.",
  effectiveDate: "November 5, 2026",
  lastUpdated: "November 5, 2026",
  contactEmail: "kscanai.app@gmail.com",
  governingLinks: [
    { label: "Governing full HTML version:", href: "https://kscan.app/legal/terms", boldLabel: true },
    { label: "Public summary:", href: "https://kscan.app/legal/terms-summary", boldLabel: false },
  ],
  sections: [
    {
      id: "service-contracting-party",
      heading: "1. The Service and Contracting Party",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is operated by Forest Hills Media Inc., a Wyoming corporation ("Forest Hills Media," "K Scan AI," "we," "us," or "our"). These Terms govern use of kscan.app, our iOS and Android applications, fashion scanning, Elise and StyleChat, personal fashion and wardrobe tools, sharing features, retailer discovery, and optional digital subscriptions (collectively, the "Service"). The Privacy Policy explains personal-data practices. Additional feature notices and in-store purchase terms apply where indicated.`,
        },
      ],
    },
    {
      id: "who-may-use",
      heading: "2. Who May Use K Scan AI",
      blocks: [
        {
          type: "paragraph",
          text: `The Service is intended only for individuals at least 18 years old who can enter a legally binding agreement. It is not intended for children. You must provide accurate information, protect your credentials, use only accounts you are authorized to access, and notify us if you suspect unauthorized account activity. Availability varies by territory and supported device. An app store's content-age rating does not change our contractual 18+ rule.`,
        },
      ],
    },
    {
      id: "content-limited-license",
      heading: "3. Your Content and Our Limited License",
      blocks: [
        {
          type: "paragraph",
          text: `You own the original photos, screenshots, captions, messages, Closet records, shared-room content, and other materials you supply ("User Content"), subject to third-party rights. You grant Forest Hills Media a worldwide, nonexclusive, royalty-free license, limited to the period and scope reasonably necessary to receive, transmit, store, adapt for technical processing, analyze, display to your selected audience, moderate, secure, support and deliver the functions you request and the other disclosed uses of the Service. You must have sufficient rights and any needed permission from people appearing in material you submit. This license does not transfer ownership of your User Content, authorize unrelated independent model training by third parties, or permit sale of your raw personal photographs to data brokers. The Privacy Policy and any feature-specific permission govern relevant personal-data processing.`,
        },
      ],
    },
    {
      id: "ai-data-sharing",
      heading: "4. Artificial Intelligence and Explicit Data Sharing",
      blocks: [
        {
          type: "paragraph",
          text: `Scanner and Elise may use Google Gemini for analysis of photos, text, questions, selected fashion information, and permitted conversation or wardrobe context. Information may pass through K Scan AI's controlled backend before reaching Google. Where required, K Scan AI asks for a separate, versioned, revocable permission before sharing personal data with third-party AI. Agreeing to these Terms alone is not that permission. If you decline or withdraw it, consent-dependent features may stop processing new requests. Withdrawal cannot automatically reverse data transfers or completed processing that occurred before withdrawal. Provider data use and retention depend on the applicable agreements and are described in the Privacy Policy as far as verified.`,
        },
      ],
    },
    {
      id: "scanner-text-search",
      heading: "5. Scanner, Text Search and Product Identification",
      blocks: [
        {
          type: "paragraph",
          text: `You may select or capture fashion-related images, choose multiple images or detected garments in supported flows, or submit text queries. Automated analysis may suggest a garment type, style, possible brand, or shopping search. These are estimates; they are not certification of origin, authenticity, condition, size or material. K Scan AI may prepare a copy of a chosen image before processing, but does not promise universal face masking, license-plate removal, anonymity, or device-only processing. Do not submit confidential, intimate, identifying, or unrelated material when it is unnecessary for a fashion task.`,
        },
      ],
    },
    {
      id: "elise-signature-style",
      heading: "6. Elise, Signature Style and Product Comparisons",
      blocks: [
        {
          type: "paragraph",
          text: `Elise is an automated fashion assistant, not a human employee, agent authorized to contract for us, or professional adviser. Elise may use your submitted prompts, selected images, authorized Closet or Saved Look information, Signature Style preferences, and limited recent context to provide advice. Where available, Elise may retrieve, explain, refine or compare independent merchant results. These are informational, read-only actions: Elise cannot autonomously complete a third-party checkout, purchase goods, modify your account, or save a product without the required user action and application authorization. Answers and product comparisons can be mistaken or outdated.`,
        },
      ],
    },
    {
      id: "saved-scanned-owned",
      heading: "7. Saved, Scanned and Owned Are Different",
      blocks: [
        {
          type: "paragraph",
          text: `A saved scan, merchant listing, wishlist entry or Dressing Room contribution is not proof that you bought or own an item. Closet entries should represent items you have selected or confirmed as part of your wardrobe. Recent Scans and certain other records may remain on your device; account-backed content may be held in our cloud when that specific capability is available. K Scan AI does not currently promise universal automatic Cloud Closet backup, migration or cross-device restoration. The absence of a cloud-sync feature does not mean all other account-based records are stored only on your device.`,
        },
      ],
    },
    {
      id: "rooms-messages-sharing",
      heading: "8. Rooms, Messages and Sharing",
      blocks: [
        {
          type: "paragraph",
          text: `Dressing Rooms and other supported collaboration features allow you to share selected content with people you invite or authorize. Content and messages may be viewed, saved or copied by those participants and may be moderated under our Community Rules. You can use available report and block controls. Do not share another person's private information, photos, trademarks, or intellectual property without appropriate permission. Deleting a post, leaving a Room, blocking an account or closing your account may not retrieve independent copies made by other users; K Scan AI handles account-associated shared content and legal retention as described in the Account Deletion Policy and applicable law.`,
        },
      ],
    },
    {
      id: "virtual-try-on-voice",
      heading: "9. Virtual Try-On, Voice and Other Optional Tools",
      blocks: [
        {
          type: "paragraph",
          text: `Photo Virtual Try-On, if available and selected by you, may send your chosen recognizable person image and garment information to AILabTools through RapidAPI for synthetic imagery. A separate feature disclosure and applicable permission precede such processing. Limited Live Camera Try-On may use camera and pose information on supported hardware and is not an accurate fit, body measurement or identity-analysis tool. Voice Scan may use device microphone or speech-recognition services when you activate it; this is different from Elise's optional synthesized speech, for which permitted reply text may be sent to ElevenLabs. Weather-aware styling may use approximate location and Open-Meteo. Packing, Watchlist and notifications are subject to activation, device, permission, entitlement, availability and quota restrictions. No alert delivery or feature availability is guaranteed.`,
        },
      ],
    },
    {
      id: "retailer-neutral-discovery",
      heading: "10. Retailer-Neutral Discovery and External Transactions",
      blocks: [
        {
          type: "paragraph",
          text: `Merchant search results and links are offered for discovery, not as offers to sell physical products by Forest Hills Media. Independent merchants set price, stock, shipping, taxes, authenticity, fulfillment, returns, warranties and their checkout privacy practices. Leaving K Scan AI for a retailer creates a separate relationship with that merchant. K Scan AI is not the merchant of record for third-party physical products and ordinarily cannot refund or receive their returns. Source display does not establish our endorsement, authorized brand partnership, inventory verification or authentication. Where any result is sponsored or a compensable endorsement, applicable material connections will be separately disclosed where presented.`,
        },
      ],
    },
    {
      id: "expanded-brand-sources",
      heading: "11. Optional Expanded Brand Sources",
      blocks: [
        {
          type: "paragraph",
          text: `Where enabled by your choice, K Scan AI may search additional websites from a research-based directory that includes businesses described by sources as Black-owned. Directory inclusion is not a certification of present ownership, an ownership verification badge, a product inventory, a sponsorship or a brand partnership. The additional-source preference may be off by default and may be disabled through available account controls. Searches may return no matches. Any separately verified ownership statement requires independent evidence before display.`,
        },
      ],
    },
    {
      id: "k-plus-membership",
      heading: "12. K+ Membership and Available Benefits",
      blocks: [
        {
          type: "paragraph",
          text: `K+ is an optional paid digital subscription offered as Monthly or Annual plans where approved for sale. Free functions remain available as described in the app. The precise K+ benefits presented to you are those accurately identified before purchase and actually available for your device, region, account and applicable feature configuration. No specific beta tool, Cloud Closet backup, guaranteed monitoring alert, unlimited AI usage, or future feature is promised merely by the K+ name. K Scan AI may set fair usage limits and may modify optional tools, subject to applicable law and purchased entitlements.`,
        },
      ],
    },
    {
      id: "store-billing-renewal",
      heading: "13. Store Billing, Trial and Renewal",
      blocks: [
        {
          type: "paragraph",
          text: `Native K+ subscriptions are purchased using Apple In-App Purchase on supported Apple devices or Google Play Billing on supported Android devices. RevenueCat helps deliver available offerings, purchase information and restoration. K Scan AI's account systems determine whether the signed-in user has an active entitlement. The applicable store checkout presents the actual localized price, tax treatment, billing frequency, any eligible introductory offer and renewal conditions. Unless cancelled according to the applicable store process, an auto-renewing plan renews on its store-defined schedule. An annual plan ordinarily charges for a year in advance. No free trial, discount or reminder is promised unless the individual checkout actually offers it.`,
        },
      ],
    },
    {
      id: "purchase-processing-restoration",
      heading: "14. Purchase Processing, Restoration and Account Matching",
      blocks: [
        {
          type: "paragraph",
          text: `After a store confirms a purchase, access can require purchase receipt and entitlement reconciliation. A temporary pending state may occur. Use Restore Purchases in the app when offered; if premium access remains missing after a store-confirmed purchase, contact support rather than buying the same plan again. Account mismatch, pending payment, revocation, refund, expiration and provider delays can affect access. K Scan AI does not collect your complete bank-card number as part of the documented store-billed mobile subscription flow.`,
        },
      ],
    },
    {
      id: "cancellation-not-refund",
      heading: "15. Cancellation Is Not a Refund",
      blocks: [
        {
          type: "paragraph",
          text: `Manage and cancel Apple-billed subscriptions through https://apps.apple.com/account/subscriptions/ or device Apple Account subscription settings. Manage and cancel Google Play subscriptions through https://play.google.com/store/account/subscriptions. Cancellation generally stops the next renewal, but may not end already-paid access immediately. Uninstalling the app or deleting a K Scan AI account does not itself cancel a store-billed subscription. Refund requests are separate and are governed by our Refund and Cancellation Policy, store procedures and non-waivable consumer rights.`,
        },
      ],
    },
    {
      id: "refunds-other-purchases",
      heading: "16. Refunds and Other Purchases",
      blocks: [
        {
          type: "paragraph",
          text: `Our published policy currently allows requests during a 30-calendar-day period for eligible prorated refunds on monthly K+ charges, subject to the calculation and applicable store mechanism stated in the Refund and Cancellation Policy. Annual charges are not automatically subject to the monthly calculation. The Apple and Google stores may control refund authorization and issuance. Nothing in these Terms restricts refunds or remedies required by applicable consumer law. Physical merchandise purchased from retailers is governed by their separate arrangements.`,
        },
      ],
    },
    {
      id: "acceptable-use-safety",
      heading: "17. Acceptable Use and Content Safety",
      blocks: [
        {
          type: "paragraph",
          text: `You must not harass, impersonate, threaten, discriminate, stalk, exploit minors, upload nonconsensual intimate images, share unlawful or infringing content, evade reporting or blocking controls, abuse accounts, deceive shoppers, scrape protected systems, or use the Service for surveillance or other unlawful activity. We may review, restrict, report, remove or suspend inappropriate content or accounts where permitted by law. Reports can be submitted through available in-app tools or to kscanai.app@gmail.com. We may cooperate with lawful requests and authorities where required.`,
        },
      ],
    },
    {
      id: "access-security-changes",
      heading: "18. Access, Security and Service Changes",
      blocks: [
        {
          type: "paragraph",
          text: `Features may vary by geography, platform, permission, paid status, provider availability, operational limits and staged rollout. We may change, limit or discontinue functionality where reasonably necessary, subject to payment terms, consumer protection laws and adequate notice for material changes when required. We do not guarantee continuous availability or absolute security. You remain responsible for maintaining your device and credentials.`,
        },
      ],
    },
    {
      id: "account-deletion-restoration",
      heading: "19. Account Deletion and Restoration",
      blocks: [
        {
          type: "paragraph",
          text: `You may initiate deletion in the app or use our public deletion request channel at https://kscan.app/legal/delete-account, subject to that web resource being operational. Our account process includes deactivation and may offer an approximately 30-day restoration opportunity. Permanent deletion proceeds after applicable eligibility checks, with lawful retention or technical exceptions. Deactivation alone is not a completed deletion. Data on offline devices and independently copied material may remain outside our ability to remove. Store subscription cancellation is separate. Further details appear in the Account Deletion and Restoration Policy.`,
        },
      ],
    },
    {
      id: "intellectual-property-feedback",
      heading: "20. Intellectual Property and Feedback",
      blocks: [
        {
          type: "paragraph",
          text: `We and our licensors retain ownership of the K Scan AI platform, software, designs, brand, interface and related materials, excluding your User Content. You may not copy, reverse engineer or misuse the software except as permitted by mandatory law or license. You grant us permission to consider feedback without an obligation to implement it; feedback will not be used to acquire ownership of your private User Content.`,
        },
      ],
    },
    {
      id: "disclaimers",
      heading: "21. Disclaimers",
      blocks: [
        {
          type: "paragraph",
          text: `To the fullest extent permitted by law, the Service and AI outputs are provided "as is" and "as available," without promises that analysis, matches, styling advice, VTO depictions, pricing, merchant listings, availability or technical operation will be flawless. Some statutory warranties and rights cannot be disclaimed. No AI output replaces professional advice on health, safety, law, finance or product authentication.`,
        },
      ],
    },
    {
      id: "limitation-liability",
      heading: "22. Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: `To the maximum extent lawful, Forest Hills Media and its affiliates are not responsible for indirect, consequential, special or exemplary damages, or losses caused by inaccurate AI outputs or third-party merchants beyond obligations imposed by law. Consistent with our existing published terms, aggregate liability for a claim is limited to the greater of $100 USD or amounts you paid to K Scan AI during the preceding 12 months, where that limit is permitted by law. This provision does not limit liability for fraud, intentional wrongdoing or other liability that cannot legally be excluded or limited; applicable mandatory consumer rights control.`,
        },
      ],
    },
    {
      id: "indemnification",
      heading: "23. Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: `To the extent permitted by applicable law, you agree to protect Forest Hills Media against third-party claims arising from content you unlawfully submit or distribute, infringement of third-party rights, or material misuse of the Service in violation of these Terms. This obligation does not apply where prohibited by consumer law or to claims caused by our own unlawful conduct. Changes to this section require management and counsel approval.`,
        },
      ],
    },
    {
      id: "governing-law-disputes",
      heading: "24. Governing Law and Disputes",
      blocks: [
        {
          type: "paragraph",
          text: `These Terms are governed by Ohio law, without regard to conflicts principles, except that mandatory protections in your home jurisdiction continue to apply. We encourage you to contact kscanai.app@gmail.com to seek an informal resolution and will consider a reasonable response within 30 days. Where lawful, non-mandatory consumer disputes may be filed in state or federal courts located in Cuyahoga County, Ohio. We do not impose mandatory arbitration under these Terms. Statutory small-claims, regulatory or other non-waivable venues and remedies are preserved.`,
        },
      ],
    },
    {
      id: "app-stores-third-parties",
      heading: "25. App Stores and Third Parties",
      blocks: [
        {
          type: "paragraph",
          text: `Apple and Google provide independent distribution, billing, identity and other services governed by their own agreements. Apple and Google are not parties to most user-facing K Scan AI service obligations except as established by their terms or applicable law. Any mandatory Apple licensed application terms, including third-party beneficiary language if required by the applicable license choice, remain effective. The chosen app marketplace controls its own account and refund functions.`,
        },
      ],
    },
    {
      id: "changes-notice-contact",
      heading: "26. Changes, Notice and Contact",
      blocks: [
        {
          type: "paragraph",
          text: `We may update these Terms for material legal, commercial or functional changes. Where required, we will give appropriate notice or obtain new agreement rather than treating mere continued use as a substitute for a legally required consent. The governing version is the version actually published and presented for acceptance. Contact: Forest Hills Media Inc. (K Scan AI), kscanai.app@gmail.com, https://kscan.app. The official corporate mailing address, if legally required for a particular jurisdiction or transaction, will be supplied through an appropriate verified disclosure.`,
        },
      ],
    },
  ],
};
