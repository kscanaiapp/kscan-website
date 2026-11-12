import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Privacy Policy, transcribed verbatim from the authoritative
// source document supplied for the November 5, 2026 Forest Hills Media Inc.
// language update.
// Effective November 5, 2026

export const privacyPolicy: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "Privacy Policy",
  subtitle: "Forest Hills Media Inc.",
  effectiveDate: "November 5, 2026",
  lastUpdated: "November 5, 2026",
  contactEmail: "kscanai.app@gmail.com",
  governingLinks: [
    { label: "Governing full HTML version:", href: "https://kscan.app/legal/privacy", boldLabel: true },
    { label: "Public summary:", href: "https://kscan.app/privacy", boldLabel: false },
  ],
  sections: [
    {
      id: "operator-scope-contact",
      heading: "1. Operator, Scope and Contact",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is operated by Forest Hills Media Inc., a Wyoming corporation ("we," "our," "us"). This Privacy Policy explains how personal information is handled through the K Scan AI mobile apps, website, account systems, Scanner, Elise, Closet, collaborative tools, optional subscriptions, and other enabled services. Contact: kscanai.app@gmail.com. Some stores, retailers, sign-in providers and other parties act independently under their own privacy policies.`,
        },
      ],
    },
    {
      id: "adults-only",
      heading: "2. Adults Only",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is intended for adults aged 18 and older, and is not directed to children. We do not knowingly offer accounts to minors. If you believe a minor has provided information, contact us; we will review and take action required by law. Platform content ratings do not override the 18+ account rule.`,
        },
      ],
    },
    {
      id: "information-we-receive",
      heading: "3. Information We Receive",
      blocks: [
        {
          type: "table",
          head: ["Category", "Examples", "Typical source"],
          rows: [
            [
              "Contact and identity",
              "Email, display name if provided, account ID, sign-in method and support correspondence",
              "You; Supabase Auth; Apple or Google sign-in",
            ],
            [
              "Preferences and rights records",
              "Age representation, accepted legal versions, AI permission status, privacy choices, requests and timestamps",
              "Your app interactions and account records",
            ],
            [
              "Photos and other content",
              "Chosen scan images, attachments, selfies, selected clothing pictures, outfit and Room content",
              "Camera, gallery or content you intentionally submit",
            ],
            [
              "Fashion and search",
              "Garment characteristics, queries, results, saved products, wishlists, selected merchants, scan metadata",
              "Your searches; AI; search providers",
            ],
            [
              "Chats and personalization",
              "Elise questions, conversation context, owned Closet entries, Signature Style information, Looks and reactions",
              "Your messages, selected data, inferences about fashion preferences",
            ],
            [
              "Commerce and subscriptions",
              "Plan/product IDs, purchase or receipt metadata, renewal, cancellation, restoration, refunds, entitlement states",
              "Apple/Google billing; RevenueCat; our account system",
            ],
            [
              "Location and device data",
              "Approximate location for optional weather, device or push tokens, diagnostics and operational security logs",
              "Device/OS; SDKs; service requests",
            ],
            [
              "User reports and moderation",
              "Complaint category, reported message or user ID, block relationships, timestamps and investigation records",
              "User reports and our systems",
            ],
          ],
        },
        {
          type: "paragraph",
          text: `Some of these categories are collected only when you activate a particular feature. We do not automatically read your entire photo library or every message in a shared Room. We do not intentionally request full credit-card numbers for native app-store purchases.`,
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: "4. How We Use Personal Information",
      blocks: [
        {
          type: "paragraph",
          text: `We use relevant information to authenticate accounts; deliver chosen scans and AI styling; retrieve independent merchant offers; save and display authorized content; operate collaboration and safety tools; provide optional weather, generated speech and virtual try-on; administer subscriptions and entitlements; respond to privacy, billing and support requests; secure the Service; monitor errors and fraud; and comply with law. We may analyze appropriately aggregated or de-identified information for product quality and business trends, subject to applicable law and measures against reidentification. We do not treat raw uploaded images as automatically anonymous.`,
        },
      ],
    },
    {
      id: "scanner-google-gemini",
      heading: "5. Scanner and Google Gemini",
      blocks: [
        {
          type: "paragraph",
          text: `For a consented Scanner or relevant Elise operation, you may send selected photos, text prompts, messages and necessary authorized fashion context through our backend to Google Gemini for garment interpretation, styling or shopping assistance. Selected images may show recognizable people or incidental details. Some supported flows resize, re-encode or remove metadata before transmission; this does not establish comprehensive face, bystander or license-plate masking. We do not promise that every transmission is entirely on-device or anonymized. Where our app requires third-party AI permission, requests are blocked until the account has the current appropriate authorization. Turning consent off can disable future Gemini-dependent requests, but does not automatically erase prior third-party processing.`,
        },
      ],
    },
    {
      id: "search-commerce-providers",
      heading: "6. Search and Independent Commerce Providers",
      blocks: [
        {
          type: "paragraph",
          text: `We may provide garment descriptions, fashion queries, product identifiers, URLs and related search data to Serper Shopping, Brave Search and other enabled commerce search intermediaries. Optional specialized integrations may retrieve sneaker, resale or retailer listings. The information returned may be incomplete or inaccurate. Selecting a merchant link takes you outside K Scan AI, where the seller may independently collect payment, cookies and shopping information. A returned result does not establish a partnership, authentic product, ownership certification or inventory guarantee.`,
        },
      ],
    },
    {
      id: "expanded-brand-search",
      heading: "7. Optional Expanded Brand Search",
      blocks: [
        {
          type: "paragraph",
          text: `If you enable the additional Black-owned brand-source search preference, K Scan AI may include relevant researched brand websites among normal search sources. The preference is off unless you activate it in the supported app interface. Research-directory inclusion is not verification of present ownership, a sponsored placement or an endorsed merchant relationship. We may store the account-scoped choice and related limited search metadata. We do not infer a user's race from opting into this feature.`,
        },
      ],
    },
    {
      id: "elise-stylechat-signature-style",
      heading: "8. Elise, StyleChat and Signature Style",
      blocks: [
        {
          type: "paragraph",
          text: `Elise may process what you type or intentionally attach, approved recent conversation context, style preferences, and authorized Saved Looks or Closet records. Where enabled, read-only product lookup can involve search providers and retrieved merchant data. Elise does not have blanket access to every private record and does not independently purchase goods. Style preferences or fashion-derived inferences can be personal data when linked to an account. We do not intentionally use the Service to identify people, diagnose health conditions, or make employment, housing, credit or insurance decisions. Please avoid submitting sensitive information unnecessary for fashion styling.`,
        },
      ],
    },
    {
      id: "device-local-cloud-data",
      heading: "9. Device-Local and Cloud-Backed Fashion Data",
      blocks: [
        {
          type: "paragraph",
          text: `Recent Scans and some Closet or preference information can remain stored on the device. Other account-dependent records, including authorized Rooms, preferences, chats, entitlements, saved content or media, can be stored or processed in Supabase-backed services. The ordinary Cloud Closet upload/migration/restore feature is not being represented as available for general use. A current lack of cloud backup does not mean that no account data is stored remotely. Local content on an offline or unlinked device may not be removed by account deletion on our servers.`,
        },
      ],
    },
    {
      id: "dressing-rooms-looks-sharing",
      heading: "10. Dressing Rooms, Looks and Sharing",
      blocks: [
        {
          type: "paragraph",
          text: `When you intentionally share content with a Room or invitee, participants can view the material and potentially make independent copies. We process selected images, messages, reactions, access permissions and reports to facilitate the requested collaboration and protect users. Reports and blocks are handled by the moderation system. When you delete your account, our deletion process must address your associated content, subject only to lawful exceptions and data beyond our control; continued access by other users is not a blanket justification to retain all of your original material.`,
        },
      ],
    },
    {
      id: "voice-scan-elise-speech",
      heading: "11. Voice Scan and Generated Elise Speech",
      blocks: [
        {
          type: "paragraph",
          text: `If you activate Voice Scan, the device may access the microphone and use its supported speech-recognition service to convert speech to text. Whether the operating-system service processes raw audio locally or through an external system depends on the actual platform configuration; K Scan AI does not claim every such operation is wholly on-device. Separately, eligible Elise text may be sent to ElevenLabs to generate synthesized spoken playback. This output feature does not itself require K Scan AI to send a recording of your microphone input to ElevenLabs. No universal provider training or zero-retention representation is made.`,
        },
      ],
    },
    {
      id: "photo-live-virtual-try-on",
      heading: "12. Photo and Live Virtual Try-On",
      blocks: [
        {
          type: "paragraph",
          text: `If Photo Virtual Try-On is available and you choose to use it, we may send a selected recognizable self-image, garment input and generation instructions to AILabTools through RapidAPI for a simulated image. Additional feature-specific permission is requested where applicable. Provider logs, retention and training arrangements must be confirmed under the actual services agreement and cannot be assumed absent. On supported devices, limited Live Camera Try-On can use frames or pose landmarks for on-device visualization. We do not claim that every camera-related saved or fallback path remains on-device. Neither function is intended for biometric identification or reliable body measurements; ordinary images are not automatically exempt from every biometric law.`,
        },
      ],
    },
    {
      id: "weather-location-notifications",
      heading: "13. Weather, Location and Notifications",
      blocks: [
        {
          type: "paragraph",
          text: `Optional weather-aware styling may use foreground approximate or rounded location and transmit relevant geography to Open-Meteo to retrieve weather conditions. We do not represent this fashion feature as continuous background location tracking. Optional alerts may use Apple Push Notification service, Firebase Cloud Messaging, Expo routing where verified, and device tokens; notification functionality is not universally guaranteed. You control applicable operating-system permissions.`,
        },
      ],
    },
    {
      id: "k-plus-purchases-subscriptions",
      heading: "14. K+ Purchases and Subscription Information",
      blocks: [
        {
          type: "paragraph",
          text: `Apple and Google manage native subscription checkout and payment credentials. RevenueCat assists with offerings, purchase status and restore, and K Scan AI's authenticated systems maintain server-based K+ entitlement decisions. We may process plan IDs, transaction identifiers, dates, charge states, trial or offer eligibility, refunds, renewals and account linkage. We do not require your full payment-card number for documented store-billed purchases. Billing support and fraud or legal records can be retained independently of active membership.`,
        },
      ],
    },
    {
      id: "infrastructure-analytics-safety",
      heading: "15. Infrastructure, Analytics, Email and Safety",
      blocks: [
        {
          type: "paragraph",
          text: `Supabase provides core hosted authentication, databases, functions and relevant storage. Render and Resend may support transactional account and restoration email. We process error, request, account security and service-quality records to operate and protect the Service. PostHog analytics, if configured and enabled, may process structured product events and identifiers; its inclusion in source code alone does not establish active collection. We do not represent all diagnostics as anonymous or inherently exempt from privacy choices. We do not state that session replay, cross-app targeted-advertising SDKs or advertising identifiers are operating without production evidence.`,
        },
      ],
    },
    {
      id: "provider-recipient-types",
      heading: "16. Provider and Recipient Types",
      blocks: [
        {
          type: "table",
          head: ["Recipient", "Role in enabled feature", "Relevant information"],
          rows: [
            ["Google Gemini", "AI fashion analysis and Elise", "Consented images, text, selected context and request metadata"],
            ["Supabase", "Core authentication, storage and cloud functions", "Account, content, consent, entitlement and operational records"],
            ["Apple / Google Play", "Independent distribution, identity and native billing", "Sign-in and store purchase details"],
            ["RevenueCat", "Subscription information and restoration", "App user reference, purchase and entitlement metadata"],
            ["Serper / Brave and enabled commerce providers", "Retrieval of third-party shopping records", "Fashion search terms, product URLs and results"],
            ["ElevenLabs", "Optional text-to-speech", "Eligible text and speech settings"],
            ["AILabTools / RapidAPI", "Optional Photo Virtual Try-On", "Selected person and garment media"],
            ["Open-Meteo", "Optional weather context", "Approximate geographic requests"],
            ["Render / Resend", "Relevant account email delivery", "Email addresses, messages and delivery metadata"],
            ["APNs / FCM / verified Expo services", "Optional notifications", "Device tokens and alert metadata"],
            ["PostHog, if activated", "Operational/product analytics", "Structured events, potentially linked identifiers"],
          ],
        },
        {
          type: "paragraph",
          text: `Each provider processes only relevant categories for enabled purposes, subject to its configuration. Vendors may have their own retention periods, logs or subprocessors. K Scan AI will not claim that every provider is legally a processor or has agreed to specific training, deletion, hosting or residency restrictions without an actual verified agreement.`,
        },
      ],
    },
    {
      id: "sharing-sale-targeted-advertising",
      heading: "17. Sharing, Sale and Targeted Advertising",
      blocks: [
        {
          type: "paragraph",
          text: `We may disclose personal information to service providers for permitted service functions and to third parties at your direction, such as merchants you elect to visit or people with whom you choose to share a Room. Depending on applicable law and actual technology use, some analytics, affiliate, advertising or attribution activity can constitute a legal "sale," "share," or targeted advertising even without a sale of raw data. We will provide applicable notices, rights and opt-outs if such processing occurs and is regulated. We do not state an unsupported blanket conclusion that a generic opt-out switch disables every necessary service transfer. Any sponsored ranking or compensation must be disclosed where material. Aggregate business insights are not represented as de-identified unless they meet applicable requirements.`,
        },
      ],
    },
    {
      id: "retention-deletion-criteria",
      heading: "18. Retention and Deletion Criteria",
      blocks: [
        {
          type: "table",
          head: ["Record", "Retention criteria and ordinary trigger"],
          rows: [
            [
              "Account, contact and security",
              "While an account is active and through applicable deletion processing; longer only where needed for security, law or disputes",
            ],
            [
              "Local Recent Scans, Closet cache and local preferences",
              "On the device until removed through app/device storage controls or operating-system lifecycle",
            ],
            [
              "Account-backed fashion, chats, Rooms, uploaded media",
              "While needed for the requested feature or until deletion; subject to lawful shared-content and technical exceptions",
            ],
            [
              "Consent and policy acceptance",
              "As necessary to demonstrate permissions and contractual/legal compliance",
            ],
            [
              "Search and AI request records",
              "Only for necessary request processing, safety, diagnostics or law; provider-specific logs may differ",
            ],
            [
              "Subscription and financial records",
              "As needed for billing, restoration, fraud, accounting and applicable legal duties",
            ],
            [
              "Push tokens and analytics",
              "While active/relevant and pending opt-out, unbinding, account deletion or configured retention",
            ],
            [
              "Privacy requests and moderation reports",
              "As reasonably needed to complete requests, enforce safety, resolve disputes and comply with law",
            ],
          ],
        },
        {
          type: "paragraph",
          text: `These are criteria, not a universal numeric retention promise. The approximately 30-day account restoration opportunity is not a blanket deletion deadline for every provider, backup, legal record or shared artifact.`,
        },
      ],
    },
    {
      id: "account-deletion-restoration",
      heading: "19. Account Deletion and Restoration",
      blocks: [
        {
          type: "paragraph",
          text: `You may initiate an account deletion request in app settings or through the public web-based deletion request route. The system may deactivate your account and allow an approximately 30-day restoration opportunity, followed by permanent deletion processing unless a lawful retention basis or operational blocker applies. We will not equate account deactivation with completed erasure. Provider-side records, shared content and device-only records can follow different processes. Subscriptions must be cancelled through the purchase platform separately. Contact support if you need assistance or confirmation of deletion status.`,
        },
      ],
    },
    {
      id: "security",
      heading: "20. Security",
      blocks: [
        {
          type: "paragraph",
          text: `We use access controls, authentication, protected hosting, reasonable encryption in transit where supported, account isolation and similar safeguards. No system is perfectly secure. We do not promise complete anonymity, zero-knowledge storage, universal masking, end-to-end encryption for all content or instant erasure from backups unless these have been specifically verified.`,
        },
      ],
    },
    {
      id: "privacy-choices",
      heading: "21. Your Privacy Choices",
      blocks: [
        {
          type: "paragraph",
          text: `Depending on the feature, you may manage consent to Google Gemini, relevant Photo VTO or spoken responses, optional notifications and location, source-directory preferences, supported exports or corrections, and account deletion. Some settings are device-local while others follow your account. Withdrawing Gemini permission can disable future dependent functionality without erasing prior processing. For privacy requests, email kscanai.app@gmail.com or use the available in-app controls. Identity verification may be needed to prevent disclosure to an unauthorized requester.`,
        },
      ],
    },
    {
      id: "california-state-rights",
      heading: "22. California and Other U.S. State Rights",
      blocks: [
        {
          type: "paragraph",
          text: `Where a state privacy law applies to K Scan AI and your information, you may have rights to know, access, correct, delete, obtain a portable copy, opt out of legally defined sale/sharing or targeted advertising, limit certain sensitive-information use, and appeal a denial, subject to statutory exceptions. Rights, verification rules and deadlines vary by jurisdiction, and applicability depends on statutory business and processing thresholds. Where legally applicable, we honor required browser-based opt-out signals and provide functional methods. We do not claim that every state statute applies to our company merely because an app is downloadable there.`,
        },
      ],
    },
    {
      id: "international-users",
      heading: "23. International Users",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is U.S.-first. If an international storefront is enabled and applicable law governs our offering, additional notices, lawful-basis explanations, local rights, transfer safeguards, consumer cancellation terms or representative contact information may apply. We will not claim a designated EU/UK representative, a data-transfer contract, a regional office, or a statutory withdrawal waiver without evidence. Users retain non-waivable rights under applicable law. Region-specific addenda will be provided where required.`,
        },
      ],
    },
    {
      id: "site-cookies-external-links",
      heading: "24. Site Cookies and External Links",
      blocks: [
        {
          type: "paragraph",
          text: `Our website may use cookies or equivalent technologies for essential operation, security, preferences and, if enabled, measurement. Any legally required opt-in for nonessential storage or tracking must precede its operation. External merchants, platform operators and other sites may set their own cookies and independently collect information once you leave our Service. Our separate Website Cookie and Tracking Notice explains website-specific practices subject to live verification.`,
        },
      ],
    },
    {
      id: "changes-version-governance",
      heading: "25. Changes and Version Governance",
      blocks: [
        {
          type: "paragraph",
          text: `We update this Policy when actual personal-data practices materially change, including a new type of user information, recipient, purpose or rights control. We provide additional notice or seek renewed consent where required. The effective version is the version published and appropriately presented to users; internal draft preparation does not make a document effective. We retain documented acceptance and consent versions as necessary for accountability.`,
        },
      ],
    },
    {
      id: "contact",
      heading: "26. Contact",
      blocks: [
        {
          type: "paragraph",
          text: `Privacy and account requests: Forest Hills Media Inc. (K Scan AI), kscanai.app@gmail.com. Website: https://kscan.app. Account-deletion instructions: https://kscan.app/legal/delete-account. If a jurisdiction legally requires a postal or representative address, we will provide the verified required address before making that offering available; do not substitute an invented mailing address.`,
        },
      ],
    },
  ],
};
