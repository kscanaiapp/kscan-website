import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Terms and Conditions, transcribed verbatim from the authoritative
// source document supplied for the August 9, 2026 language update.
// Effective Date: May 13, 2026 | Last Updated: August 9, 2026

export const termsAndConditions: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "Terms and Conditions",
  subtitle: "Full public terms for the website and current mobile app release",
  effectiveDate: "May 13, 2026",
  lastUpdated: "August 9, 2026",
  contactEmail: "kscanai.app@gmail.com",
  governingLinks: [
    { label: "Governing full HTML version:", href: "https://kscan.app/legal/terms", boldLabel: true },
    { label: "Public summary:", href: "https://kscan.app/legal/terms-summary", boldLabel: false },
  ],
  sections: [
    {
      id: "introduction",
      blocks: [
        {
          type: "paragraph",
          text: `These Terms and Conditions ("Terms") govern your access to and use of the K Scan AI website, Android application, APIs, AI systems, Elise and her StyleChat conversational capability, scanning and visual-commerce tools, Style Library, Recent Scans, Dressing Rooms, sharing features, and related products and services (collectively, the "Service"). By accessing, downloading, registering for, or using the Service, you agree to these Terms and the K Scan AI Privacy Policy.`,
        },
        {
          type: "paragraph",
          text: `The current Android version is a production release. K Scan may separately identify particular features as beta, preview, or experimental. Those features may contain errors, interruptions, incomplete functionality, provider limits, or changes, and these Terms apply to them unless separate terms are provided.`,
        },
        {
          type: "paragraph",
          text: `The governing Privacy Policy is available at https://kscan.app/legal/privacy. A shorter public summary may be available at https://kscan.app/privacy. The full Privacy Policy controls if a summary differs from it.`,
        },
      ],
    },
    {
      id: "definitions",
      heading: "1. Definitions",
      blocks: [
        {
          type: "definition",
          term: "Service:",
          text: `The K Scan AI website, mobile applications, APIs, AI systems, Elise, StyleChat, scan and visual-commerce systems, Style Library, Recent Scans, Dressing Rooms, sharing tools, and related services.`,
        },
        {
          type: "definition",
          term: "Elise:",
          text: `K Scan's AI stylist interface. StyleChat is Elise's conversational capability.`,
        },
        {
          type: "definition",
          term: "Spoken Responses:",
          text: `Optional AI-generated speech that reads eligible Elise responses aloud through text-to-speech. Spoken Responses do not use microphone input in the current Android release.`,
        },
        {
          type: "definition",
          term: "AI Outputs:",
          text: `Fashion analysis, item identification, product matches, styling suggestions, Elise or StyleChat responses, spoken responses, generated metadata, and other outputs produced through automated systems.`,
        },
        {
          type: "definition",
          term: "User Content:",
          text: `Images, photographs, screenshots, scan content, prompts, messages, notes, captions, room names, item snapshots, and other materials submitted, saved, shared, or transmitted by users.`,
        },
        {
          type: "definition",
          term: "Recent Scans:",
          text: `Device-local saved scan records and related shopping snapshots, including available retailer, price, currency, product-link, and product-image information stored when an item is saved.`,
        },
        {
          type: "definition",
          term: "Dressing Rooms:",
          text: `Account-backed private or shared spaces where users may organize, discuss, save, and share fashion-related items and images.`,
        },
        {
          type: "definition",
          term: "Retailer or Marketplace Provider:",
          text: `A third-party retailer, marketplace, product-search provider, affiliate network, commerce API, or seller linked through or used to support the Service.`,
        },
        {
          type: "definition",
          term: "Digital Features:",
          text: `Future subscriptions, premium AI capabilities, account upgrades, digital entitlements, or other digital services sold by K Scan inside an app.`,
        },
      ],
    },
    {
      id: "acceptance",
      heading: "2. Acceptance of Terms and Separate Privacy Choices",
      blocks: [
        {
          type: "paragraph",
          text: `By creating an account, accessing, downloading, registering for, uploading content to, sharing content through, or otherwise using the Service, you agree to these Terms and applicable law. If you do not agree, do not use the Service.`,
        },
        {
          type: "paragraph",
          text: `Where applicable law requires separate consent for optional cookies, tracking, targeted advertising, location, or similar processing, that consent will not be bundled into acceptance of these Terms. Declining an optional permission or consent may limit the related optional feature but will not prevent access to core functionality unless the permission is necessary for the feature you request.`,
        },
      ],
    },
    {
      id: "eligibility",
      heading: "3. Eligibility and 18+ Requirement",
      blocks: [
        {
          type: "paragraph",
          text: `The Service is intended for users 18 years of age and older and is not directed to children or minors. By using the Service, you represent that you are at least 18 and legally able to agree to these Terms. Users under 18 may not use the Service.`,
        },
      ],
    },
    {
      id: "accounts-security",
      heading: "4. Accounts and Security",
      blocks: [
        {
          type: "bullets",
          items: [
            `Provide accurate, complete, and current account information.`,
            `Maintain the confidentiality of login credentials and authentication methods.`,
            `Use only accounts and authentication methods you are authorized to use.`,
            `Accept responsibility for activity under your account unless prohibited by law.`,
            `Notify K Scan promptly if you suspect unauthorized access or account misuse.`,
            `Do not share accounts, impersonate another person, or attempt to bypass access controls.`,
          ],
        },
      ],
    },
    {
      id: "beta-preview-experimental",
      heading: "5. Beta, Preview, and Experimental Features",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan may designate specific features as beta, preview, or experimental. Such features may contain bugs, inaccurate results, incomplete workflows, unavailable providers, service interruptions, data-loss risk, or changes without notice. Features may be modified, limited, suspended, or discontinued at any time.`,
        },
        {
          type: "paragraph",
          text: `Marketing, investor, demo, or roadmap materials may show planned functionality. Planned functionality is not guaranteed to be live, included, or supported unless the Service expressly makes it available.`,
        },
      ],
    },
    {
      id: "privacy-data-processing",
      heading: "6. Privacy and Data Processing",
      blocks: [
        {
          type: "paragraph",
          text: `The K Scan Privacy Policy is incorporated into these Terms by reference. It explains how K Scan processes account information, selected images, AI prompts, Elise and StyleChat content, generated speech, device-local Recent Scans, account-backed Dressing Rooms, approximate location, diagnostics, and shopping interactions.`,
        },
        {
          type: "paragraph",
          text: `K Scan does not sell raw uploaded scans, raw images, biometric templates, faceprints, voiceprints, government identification, payment-card information, or sensitive personal information for independent third-party use. The current mobile release does not use third-party advertising SDKs or Advertising ID for targeted advertising.`,
        },
      ],
    },
    {
      id: "user-content-license",
      heading: "7. User Content and Limited License",
      blocks: [
        {
          type: "paragraph",
          text: `You retain ownership of your User Content. By submitting User Content, you grant K Scan a limited, non-exclusive, worldwide, royalty-free license to host, process, analyze, reproduce as technically necessary, transmit, display to you and users you authorize, moderate, preserve, and otherwise use the content to:`,
        },
        {
          type: "bullets",
          items: [
            `Operate, secure, maintain, support, and improve the Service.`,
            `Generate scan results, AI Outputs, Elise responses, spoken responses, product matches, and requested functionality.`,
            `Save and display content in Recent Scans, Style Library, Dressing Rooms, and Shared with Me where applicable.`,
            `Display content to users or link recipients you authorize through a sharing feature.`,
            `Prevent abuse, investigate reports, troubleshoot, comply with law, and enforce these Terms.`,
            `Create aggregated or de-identified internal analytics as described in the Privacy Policy.`,
          ],
        },
        {
          type: "paragraph",
          text: `This license does not transfer ownership of raw uploaded images to K Scan and does not authorize K Scan to sell raw image files or re-identifiable image datasets to independent data buyers. You represent that you have the rights and permissions needed to submit and share your User Content.`,
        },
      ],
    },
    {
      id: "elise-stylechat",
      heading: "8. Elise, StyleChat, Signature Style, and Spoken Responses",
      blocks: [
        {
          type: "paragraph",
          text: `Elise provides AI-assisted fashion and styling support. StyleChat is Elise's conversational capability. Elise may use selected item context, saved preferences, and Signature Style signals to personalize responses. Signature Style may reflect preferences inferred from your saved, scanned, discussed, liked, or rejected items.`,
        },
        {
          type: "paragraph",
          text: `Spoken Responses are optional and use authorized text-to-speech infrastructure, currently including ElevenLabs. The feature may transmit eligible Elise response text, limited session or message identifiers, and a selected voice profile to generate audio and timing data. The current Android release does not record microphone audio or request microphone permission for Spoken Responses.`,
        },
        {
          type: "paragraph",
          text: `Text and spoken AI Outputs may be inaccurate, unavailable, delayed, offensive, or incomplete. Voice availability, voice characteristics, provider choice, audio quality, and provider quota may change. K Scan does not guarantee that Spoken Responses will be available for every avatar, message, device, network, or account state.`,
        },
        {
          type: "paragraph",
          text: `You may disable Spoken Responses. Typing, navigation, changing avatars, changing voice preferences, changing accounts, or signing out may interrupt active speech. Do not rely on spoken output without independently reviewing the underlying text and context.`,
        },
      ],
    },
    {
      id: "camera-image-selection",
      heading: "9. Camera, Image Selection, Multi-Image Scanning, and Sensitive Content",
      blocks: [
        {
          type: "paragraph",
          text: `The Service allows users to capture or select clothing-focused images. The current Android release may allow selection of one to five images in a scan flow, review and removal before submission, and identification of multiple garments across those images.`,
        },
        {
          type: "paragraph",
          text: `Images may be resized, compressed, and processed locally and through cloud systems and authorized AI providers. K Scan does not currently guarantee automatic face blurring, bystander filtering, license-plate masking, or automatic removal of sensitive information before upload.`,
        },
        {
          type: "paragraph",
          text: `Mirror Selfie may use a user-requested image and pose/body-positioning signals to support the fashion visualization experience. Mirror Selfie is not facial recognition, biometric identification, identity authentication, or an identity-profile feature.`,
        },
        {
          type: "paragraph",
          text: `Do not submit images or other content that you do not have the right to use, that violates another person's privacy, that infringes intellectual-property rights, or that contains faces, bystanders, license plates, government IDs, financial records, medical information, confidential documents, or other sensitive information unless you have the right to submit it and intend it to be processed as part of your request.`,
        },
      ],
    },
    {
      id: "recent-scans-local-data",
      heading: "10. Recent Scans and Device-Local Data",
      blocks: [
        {
          type: "paragraph",
          text: `Recent Scans and saved commerce snapshots are stored on the device by default in the current release. Cloud Saved Scans synchronization is disabled by default. Saving one item does not necessarily save every item returned from a multi-image scan unless you deliberately choose a save-all action.`,
        },
        {
          type: "paragraph",
          text: `Device-local records may be lost if you delete them, clear app data, uninstall the app, replace the device, or experience device failure. K Scan does not guarantee cross-device restoration of device-local Recent Scans. A server-side account deletion may not remove a local copy on an offline or disconnected device; you are responsible for deleting local records or clearing app data when appropriate.`,
        },
      ],
    },
    {
      id: "dressing-rooms-sharing",
      heading: "11. Dressing Rooms, Shared with Me, and Sharing",
      blocks: [
        {
          type: "paragraph",
          text: `Owned Dressing Rooms and Shared with Me memberships are account-backed. Users may add one item or deliberately add multiple selected items to a room. Successful item additions may remain even if another item in the same multi-item action fails.`,
        },
        {
          type: "paragraph",
          text: `A room owner may invite users, manage memberships, remove items, revoke access, or create a share link or public preview where available. Content deliberately shared with a room may be visible to room members. Content exposed through an active share link may be visible to anyone who possesses that link. Revoking a link or membership prevents future authorized access but cannot retrieve screenshots or copies already made by recipients.`,
        },
        {
          type: "paragraph",
          text: `Dressing Rooms are not represented as end-to-end encrypted or zero-knowledge storage. Do not place confidential, sensitive, or legally restricted information in a Dressing Room.`,
        },
      ],
    },
    {
      id: "ugc-safety-moderation",
      heading: "12. User-Generated Content, Safety, and Moderation",
      blocks: [
        {
          type: "paragraph",
          text: `You are responsible for User Content you create, upload, save, share, or message. You may not use the Service for harassment, threats, stalking, doxxing, hate, exploitation, sexual content involving minors, impersonation, privacy invasion, intellectual-property infringement, fraud, illegal activity, or other harmful or policy-violating conduct.`,
        },
        {
          type: "paragraph",
          text: `Users may report problematic Dressing Room content or behavior through available in-app report-message and report-user controls, and may block users through the in-app block function. Blocking is enforced as a backend safety boundary across collaboration access, messaging, share redemption, and item contribution. K Scan may review, restrict, remove, preserve, or disable access to content, rooms, messages, accounts, or AI-related material that K Scan reasonably believes violates these Terms, law, safety requirements, platform policy, or the rights of others.`,
        },
        {
          type: "paragraph",
          text: `A blocked or departed participant cannot continue contributing through an old collaboration relationship. Unblocking does not automatically restore a prior collaboration; a fresh valid share or invitation may be required before collaboration resumes.`,
        },
        {
          type: "paragraph",
          text: `AI-generated responses can be reported entirely inside K Scan. The report flow provides fixed reasons, optional context, loading/duplicate-submit protection, success feedback, and error/retry handling. Structured moderation metadata is submitted to K Scan without requiring an external email application.`,
        },
      ],
    },
    {
      id: "ai-outputs-disclaimer",
      heading: "13. AI Outputs and Reliance Disclaimer",
      blocks: [
        {
          type: "paragraph",
          text: `AI Outputs are probabilistic. Product identifications, categories, colors, materials, brands, prices, availability, links, fit, authenticity, and styling recommendations may be wrong, incomplete, outdated, or based on visually similar items.`,
        },
        {
          type: "paragraph",
          text: `AI Outputs are provided for fashion discovery and informational purposes only. They are not professional, legal, financial, medical, authentication, sizing, resale, or purchasing advice. You are responsible for independently evaluating any output before relying on it or making a purchase.`,
        },
        {
          type: "paragraph",
          text: `If an AI Output appears offensive, unsafe, or otherwise problematic, use the in-app Report Response control where available. Reports are used to support filtering, moderation, abuse prevention, and policy enforcement.`,
        },
        {
          type: "paragraph",
          text: `You may not attempt to bypass safety controls, extract system prompts or model weights, perform model extraction, reverse engineer protected AI workflows, or use the Service to develop a competing model or service except where legally permitted.`,
        },
      ],
    },
    {
      id: "retailer-neutral-shopping",
      heading: "14. Retailer-Neutral Shopping and Third-Party Commerce",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan is a fashion discovery and shopping-assistance service, not a retailer, marketplace, product authenticator, warehouse, seller, or merchant of record for third-party physical goods. K Scan may display product matches and links from multiple retailers or marketplaces without favoring a single closed inventory system.`,
        },
        {
          type: "paragraph",
          text: `K Scan does not guarantee product authenticity, identity, price, availability, currency, fit, quality, legality, shipping, taxes, fulfillment, returns, refunds, warranties, seller legitimacy, or customer support. All third-party purchases and disputes are between you and the applicable retailer, marketplace, seller, or provider.`,
        },
        {
          type: "paragraph",
          text: `Displaying a product, brand, retailer, or marketplace does not establish an official partnership, sponsorship, endorsement, or guarantee unless K Scan expressly confirms a verified relationship. K Scan may receive referral or affiliate compensation from qualifying outbound links where permitted.`,
        },
      ],
    },
    {
      id: "billing-paid-features",
      heading: "15. Google Play Billing, Apple In-App Purchase, and Future Paid Features",
      blocks: [
        {
          type: "paragraph",
          text: `Outbound shopping links for physical goods lead to third-party retailers or marketplaces and are not completed through K Scan. K Scan does not process payment-card information for those transactions.`,
        },
        {
          type: "paragraph",
          text: `If K Scan later sells Digital Features, subscriptions, premium AI capabilities, account upgrades, or digital entitlements inside an app, it will use Google Play Billing, Apple In-App Purchase, or other required payment methods where platform rules require them. Additional terms, billing disclosures, and refund rules may apply.`,
        },
      ],
    },
    {
      id: "location-permissions",
      heading: "16. Approximate Location and Permissions",
      blocks: [
        {
          type: "paragraph",
          text: `The Android app may request approximate location for optional weather-aware styling or localization. It does not request precise or background location in the current release. Denying optional approximate-location access may limit weather-aware context but does not prevent core scanning, saving, Dressing Rooms, or Elise text use.`,
        },
        {
          type: "paragraph",
          text: `The current Android release does not request microphone permission for Spoken Responses. MODIFY_AUDIO_SETTINGS may be used for playback behavior and is not permission to record microphone audio.`,
        },
      ],
    },
    {
      id: "prohibited-uses",
      heading: "17. Prohibited Uses",
      blocks: [
        {
          type: "bullets",
          items: [
            `Do not use the Service if you are under 18 or prohibited by law.`,
            `Do not upload content you do not have the right to use.`,
            `Do not upload or share illegal, counterfeit, infringing, abusive, hateful, sexually exploitative, deceptive, threatening, privacy-invasive, or otherwise harmful content.`,
            `Do not use the Service for unauthorized surveillance, stalking, fraud, exploitation, harassment, or privacy invasion.`,
            `Do not attack, scrape, decompile, disrupt, overload, or bypass rate limits, authentication, content controls, or security measures.`,
            `Do not submit malicious prompts, attempt prompt injection against protected systems, extract protected system instructions, or misuse AI providers.`,
            `Do not misrepresent AI Outputs, retailer listings, product authenticity, or K Scan's relationship with any retailer or brand.`,
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "18. Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: `The Service, including software, AI workflows, recommendation systems, visual-analysis systems, interface design, graphics, trade dress, brand elements, documentation, and related technology, is owned by K Scan or its licensors. No ownership rights are transferred to users. All rights not expressly granted are reserved.`,
        },
      ],
    },
    {
      id: "third-party-services",
      heading: "19. Third-Party Services",
      blocks: [
        {
          type: "paragraph",
          text: `The Service depends on third-party providers for authentication, hosting, databases, storage, AI, text-to-speech, product search, and retailer links. Third-party services may be unavailable, changed, rate-limited, or governed by their own terms. K Scan is not responsible for third-party services beyond obligations imposed by law or applicable agreements.`,
        },
      ],
    },
    {
      id: "disclaimer-warranties",
      heading: "20. Disclaimer of Warranties",
      blocks: [
        {
          type: "paragraph",
          text: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, K SCAN DISCLAIMS EXPRESS AND IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY, ERROR-FREE OPERATION, PRODUCT AUTHENTICITY, RETAILER PERFORMANCE, AI OUTPUT ACCURACY, AND UNINTERRUPTED SERVICE.`,
        },
        {
          type: "paragraph",
          text: `Some jurisdictions do not allow certain warranty limitations, so some disclaimers may not apply to you.`,
        },
      ],
    },
    {
      id: "limitation-liability",
      heading: "21. Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          text: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, K SCAN WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES; LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION; RELIANCE ON AI OUTPUTS; THIRD-PARTY PRODUCTS OR FRAUD; USER CONTENT; RETAILER TRANSACTIONS; OR PROVIDER OR PLATFORM ACTIONS.`,
        },
        {
          type: "paragraph",
          text: `K Scan's total liability for any claim will not exceed the greater of amounts paid by you to K Scan in the preceding 12 months or $100 USD, unless prohibited by law. Nothing in these Terms limits liability that cannot lawfully be limited.`,
        },
      ],
    },
    {
      id: "indemnification",
      heading: "22. Indemnification",
      blocks: [
        {
          type: "paragraph",
          text: `To the extent permitted by law, you agree to defend, indemnify, and hold harmless K Scan and its officers, directors, employees, contractors, affiliates, and agents from claims, damages, losses, liabilities, and expenses arising from your User Content, misuse of the Service, violation of these Terms, violation of law, or infringement of third-party rights. This provision does not apply where prohibited by applicable consumer or privacy law.`,
        },
      ],
    },
    {
      id: "suspension-termination",
      heading: "23. Suspension and Termination",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan may suspend, restrict, or terminate access for violations, suspected abuse, fraud, unlawful activity, security concerns, repeated reports, harmful content, platform-compliance issues, operational reasons, or risk to users, providers, or the Service. Upon termination, your right to use the Service ends. Provisions that by their nature should survive will remain in effect.`,
        },
      ],
    },
    {
      id: "account-deletion-local-data",
      heading: "24. Account Deletion and Local Data",
      blocks: [
        {
          type: "paragraph",
          text: `You may request account deletion through the app, at https://kscan.app/legal/delete-account, or by contacting kscanai.app@gmail.com. A verified deletion request deactivates the account and begins an approximately 30-day recovery period, after which the account becomes eligible for permanent deletion, subject to legal, security, backup, fraud-prevention, and technical limitations.`,
        },
        {
          type: "paragraph",
          text: `Cloud account deletion does not necessarily remove device-local Recent Scans on an offline or disconnected device. To remove local records, delete them in the app, clear app data, or uninstall the app. K Scan may retain limited information where permitted for security, fraud prevention, dispute resolution, tax, accounting, legal compliance, or backup integrity.`,
        },
      ],
    },
    {
      id: "governing-law",
      heading: "25. Governing Law and Dispute Resolution",
      blocks: [
        {
          type: "paragraph",
          text: `These Terms are governed by the laws of the State of Ohio, United States, without regard to conflict-of-law principles, except that mandatory consumer protections in your jurisdiction may apply. Before filing a claim, you agree to contact K Scan at kscanai.app@gmail.com and allow 30 days for informal resolution. Court proceedings not subject to mandatory consumer-law venues will be brought in state or federal courts located in Cuyahoga County, Ohio, unless applicable law provides otherwise.`,
        },
      ],
    },
    {
      id: "app-store-terms",
      heading: "26. App Store and Marketplace Terms",
      blocks: [
        {
          type: "paragraph",
          text: `If you obtain the app through Google Play, the Apple App Store, TestFlight, or another marketplace, your use must also comply with that marketplace's terms and policies. App marketplaces are not responsible for K Scan support, AI Outputs, User Content, retailer transactions, or other matters except as required by their terms or law.`,
        },
      ],
    },
    {
      id: "accessibility-localization",
      heading: "27. Accessibility and Localization",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan aims to support accessible digital experiences. Contact kscanai.app@gmail.com if you encounter an accessibility barrier. These Terms are provided in English; translations are for convenience unless applicable law requires otherwise.`,
        },
      ],
    },
    {
      id: "changes-to-terms",
      heading: "28. Changes to These Terms",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan may update these Terms as the Service, providers, platform rules, or law changes. If changes are material, K Scan may provide additional notice or request renewed acceptance where required. Continued use after updated Terms become effective constitutes acceptance except where law requires another form of consent.`,
        },
      ],
    },
    {
      id: "miscellaneous",
      heading: "29. Miscellaneous",
      blocks: [
        {
          type: "paragraph",
          text: `These Terms and the Privacy Policy constitute the agreement between you and K Scan regarding the Service unless additional written terms apply to a specific beta, API, enterprise, partner, or commercial relationship. If a provision is unenforceable, the remaining provisions remain effective. Failure to enforce a provision is not a waiver. You may not assign these Terms without consent. K Scan may assign them in connection with an affiliate, restructuring, merger, acquisition, or sale of assets.`,
        },
      ],
    },
    {
      id: "contact-information",
      heading: "30. Contact Information",
      blocks: [
        {
          type: "contact",
          lines: [
            { text: "K Scan AI" },
            { label: "Email:", text: "kscanai.app@gmail.com", href: "mailto:kscanai.app@gmail.com" },
            { label: "Website:", text: "https://kscan.app", href: "https://kscan.app" },
            { label: "Full Terms:", text: "https://kscan.app/legal/terms", href: "https://kscan.app/legal/terms" },
            { label: "Terms Summary:", text: "https://kscan.app/legal/terms-summary", href: "https://kscan.app/legal/terms-summary" },
            { label: "Privacy Policy:", text: "https://kscan.app/legal/privacy", href: "https://kscan.app/legal/privacy" },
            { label: "Account Deletion:", text: "https://kscan.app/legal/delete-account", href: "https://kscan.app/legal/delete-account" },
          ],
        },
      ],
    },
    {
      id: "appendix-a",
      heading: "Appendix A - Current Release Alignment Summary",
      blocks: [
        {
          type: "table",
          head: ["Topic", "Current position"],
          rows: [
            ["Android release posture", "Current production release; package com.kscanai.app",],
            ["Scanning", "One to five selected images; multiple garments may be returned",],
            ["Recent Scans", "Device-local by default; saved commerce snapshots reopen locally",],
            ["Cloud Saved Scans", "Disabled by default in the current release",],
            ["Dressing Rooms", "Account-backed owned rooms and Shared with Me memberships",],
            ["Elise", "AI stylist; StyleChat conversational capability; optional generated speech",],
            ["Microphone", "Not requested or used for Spoken Responses",],
            ["Location", "Approximate only for optional weather-aware context; no precise/background location",],
            ["Advertising", "No third-party advertising SDK or Advertising ID for targeted advertising",],
            ["Retail checkout", "Completed with third-party retailers; K Scan is not merchant of record",],
            ["Face blurring", "Not guaranteed in the current release",],
            ["Age", "18 and older",],
            ["UGC safety", "In-app report user/message + block user; backend block enforcement across access, messaging, share redemption, and contribution",],
            ["AI response reporting", "Fully in-app report flow with structured moderation submission and in-app success/error handling",],
            ["Mirror Selfie", "User-requested image/pose processing for fashion visualization; not facial recognition or biometric identification",],
          ],
        },
      ],
    }
  ],
};
