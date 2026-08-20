import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Privacy Policy, transcribed verbatim from the authoritative
// source document supplied for the August 9, 2026 language update.
// Effective Date: June 12, 2026 | Last Updated: August 9, 2026

export const privacyPolicy: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "Privacy Policy",
  subtitle: "Full public policy for the website and current mobile app release",
  effectiveDate: "June 12, 2026",
  lastUpdated: "August 9, 2026",
  contactEmail: "kscanai.app@gmail.com",
  governingLinks: [
    { label: "Governing full HTML version:", href: "https://kscan.app/legal/privacy", boldLabel: true },
    { label: "Public summary:", href: "https://kscan.app/privacy", boldLabel: false },
  ],
  sections: [
    {
      id: "introduction",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you use the K Scan AI website, Android application, APIs, AI systems, Elise and her StyleChat conversational capability, Style Library, Recent Scans, Dressing Rooms, shopping-assistance tools, and related services (collectively, the "Service").`,
        },
        {
          type: "paragraph",
          text: `K Scan AI is a fashion-specific visual discovery, style-assistance, and shopping-assistance service. The current Android release allows users to scan or select one to five fashion-related images, receive AI-generated item and style results, view retailer-neutral shopping options, save scans, use Elise for conversational styling support, and organize or share items through Dressing Rooms.`,
        },
        {
          type: "paragraph",
          text: `This Policy describes the current Service as of the Last Updated date. Website, investor, demonstration, or roadmap materials may describe planned functionality. Planned functionality is not treated as active data processing unless it is enabled in the Service and described here.`,
        },
      ],
    },
    {
      id: "privacy-controls-summary",
      heading: "Privacy Controls Summary",
      blocks: [
        {
          type: "bullets",
          items: [
            `K Scan AI is intended for users 18 years of age and older. The Service is not directed to children or minors.`,
            `Camera and image-picker access are used only when you choose to capture or select fashion-related images.`,
            `The Android release can process up to five selected images in one scan flow and may identify multiple garments across those images.`,
            `K Scan AI is not designed for surveillance, facial recognition, biometric identification, or identifying people. K Scan AI does not create or retain biometric templates, faceprints, face geometry, or identity profiles.`,
            `The current release does not guarantee automatic face, bystander, license-plate, or sensitive-document blurring before upload. Avoid submitting sensitive or non-fashion content.`,
            `Images, prompts, style context, and related information may be processed through K Scan AI cloud systems and authorized AI providers. The current release is not device-only or cloud-free.`,
            `Elise spoken responses use text-to-speech. The feature does not record your voice and the Android app does not request microphone permission.`,
            `Recent Scans and their saved shopping snapshots are device-local by default. Cloud Saved Scans synchronization is disabled by default. Account-backed Dressing Rooms and Shared with Me memberships use cloud services.`,
            `The Android app may request approximate location only for optional weather-aware styling. It does not request precise or background location in the current release.`,
            `K Scan AI does not currently use third-party advertising SDKs or collect Advertising ID for targeted advertising.`,
            `You may request account deletion. A verified deletion request deactivates the account and begins an approximately 30-day recovery period, after which the account becomes eligible for permanent deletion, subject to legal, security, backup, fraud-prevention, and technical limitations.`,
            `Dressing Room safety controls include in-app report-message, report-user, and block-user functions. Blocking is enforced by the backend across access, messaging, share redemption, and contribution rights.`,
            `AI-generated responses can be reported entirely in-app. The report records structured moderation metadata and strictly allowlisted identifiers/context, but does not store the raw AI response, uploaded photos, scan media, or raw image content.`,
            `Mirror Selfie may use user-requested image and pose/body-positioning processing for the fashion experience. It is not used for facial recognition, biometric identification, or creating identity profiles.`,
          ],
        },
      ],
    },
    {
      id: "scope-and-overview",
      heading: "1. Scope and Overview",
      blocks: [
        {
          type: "paragraph",
          text: `This Policy applies to the K Scan AI website, Android app, current mobile releases and any explicitly identified beta or preview features, APIs, AI systems, and related services unless a separate privacy notice applies. It covers information you provide, information generated through use of the Service, information stored locally on your device, information stored in K Scan AI cloud systems, and information processed by authorized service providers.`,
        },
        {
          type: "paragraph",
          text: `The current Android application uses package com.kscanai.app. Platform Data Safety disclosures and in-app disclosures should be read together with this Policy. If a feature materially changes data collection or processing, K Scan AI will update this Policy and any required platform disclosures before or when the change is enabled.`,
        },
      ],
    },
    {
      id: "age-eligibility",
      heading: "2. Age Eligibility and 18+ Audience",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is intended for users 18 years of age and older. The Service is not directed to children or minors, and users under 18 should not use the Service.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not knowingly collect personal information from children or minors. If we learn that we collected information from a person under 18, we will take reasonable steps to delete or restrict it, subject to legal, safety, security, fraud-prevention, backup, and technical requirements. K Scan AI does not participate in Google Play Families or Designed for Families for the current release posture.`,
        },
      ],
    },
    {
      id: "key-definitions",
      heading: "3. Key Definitions",
      blocks: [
        {
          type: "definition",
          term: "Personal Information or Personal Data:",
          text: `Information that identifies, relates to, describes, can reasonably be linked to, or could reasonably identify an individual or household.`,
        },
        {
          type: "definition",
          term: "User Content:",
          text: `Content a user submits, captures, uploads, saves, sends, or shares through the Service, including images, scan content, Elise or StyleChat messages, room content, notes, captions, and support communications.`,
        },
        {
          type: "definition",
          term: "Submitted Visual Data:",
          text: `Camera captures, selected photos, screenshots, and other visual inputs submitted for fashion scanning, item recognition, style analysis, shopping assistance, Style Library, Recent Scans, or Dressing Rooms.`,
        },
        {
          type: "definition",
          term: "Derived Fashion Data:",
          text: `Information generated from Submitted Visual Data or use of the Service, such as garment category, color, texture, silhouette, material estimate, product-match signals, source-image association, shopping queries, and other fashion-related analytical outputs.`,
        },
        {
          type: "definition",
          term: "Elise:",
          text: `The K Scan AI stylist interface. StyleChat is Elise's conversational capability. Elise may provide text responses and, when enabled and available, generated spoken responses.`,
        },
        {
          type: "definition",
          term: "Recent Scans:",
          text: `Saved scan records and related commerce snapshots stored on the user's device by default, including available retailer, price, currency, product link, and product-image information captured when the scan is saved.`,
        },
        {
          type: "definition",
          term: "Dressing Rooms:",
          text: `Account-backed private or shared spaces used to organize, discuss, save, and share fashion-related items and images.`,
        },
        {
          type: "definition",
          term: "Safety and Moderation Data:",
          text: `Block relationships, report categories, target user/content identifiers, room or message identifiers, AI-response report identifiers, timestamps, status information, and limited context used to investigate safety, abuse, policy, or moderation issues.`,
        },
        {
          type: "definition",
          term: "Mirror Selfie:",
          text: `A user-requested visual experience that may use image and pose/body-positioning signals to support fashion visualization. It is not a facial-recognition, identity-verification, or biometric-identification feature.`,
        },
        {
          type: "definition",
          term: "Aggregated or De-identified Data:",
          text: `Information processed or combined so that it does not reasonably identify a person and is subject to controls designed to prevent re-identification.`,
        },
      ],
    },
    {
      id: "information-we-collect",
      heading: "4. Information We Collect",
      blocks: [
        { type: "subheading", text: "4.1 Account, Contact, and Authentication Information" },
        {
          type: "paragraph",
          text: `We may collect information you provide directly, including your name if provided, email address, profile settings, support messages, feedback, privacy requests, and other account information. Authentication may be provided through email, Google, Apple, or another enabled provider. We receive only the profile and authentication information permitted by the provider and your settings.`,
        },
        { type: "subheading", text: "4.2 Camera, Image Picker, and Multi-Image Scan Data" },
        {
          type: "paragraph",
          text: `When you intentionally start a scan or select images, K Scan AI may access the camera or the images you select through the operating-system image picker. The current Android release supports selecting and reviewing between one and five images before submission. You can remove selected images before starting analysis.`,
        },
        {
          type: "paragraph",
          text: `Submitted Visual Data may be resized, compressed, transmitted through encrypted connections, and processed by K Scan AI cloud services and authorized AI providers. A scan may produce one result, multiple garment results, partial results, or no result. K Scan AI may maintain an association between each detected item and its source image so that results, saved items, shopping options, and Dressing Room actions remain understandable.`,
        },
        {
          type: "paragraph",
          text: `Camera access is activated only when you initiate a camera action. K Scan AI does not use the camera for continuous monitoring, background capture, or surveillance.`,
        },
        {
          type: "paragraph",
          text: `The current release does not guarantee that faces, bystanders, license plates, private documents, or other identifying visual elements are detected, removed, blurred, or filtered before transmission. K Scan AI is designed to analyze clothing and accessories, not people. Do not submit sensitive or non-fashion content unless you intend that content to be processed as part of your request.`,
        },
        {
          type: "paragraph",
          text: `When you use Mirror Selfie, K Scan AI may process the image and pose/body-positioning information needed to provide the requested fashion experience. K Scan AI does not use Mirror Selfie to identify you, perform facial recognition, authenticate identity, or create biometric identity profiles.`,
        },
        { type: "subheading", text: "4.3 Device-Local Recent Scans and Commerce Snapshots" },
        {
          type: "paragraph",
          text: `Recent Scans are stored on the device by default. When you save a scan that contains shopping options, K Scan AI may store a snapshot of the available retailer, source, price, currency, product link, availability, product type, and product image information. Reopening a saved scan uses that stored snapshot. If no shopping option existed when the scan was saved, none may appear when it is reopened.`,
        },
        {
          type: "paragraph",
          text: `Cloud Saved Scans synchronization is disabled by default in the current release. Device-local records do not automatically become available on another device. Clearing app data or uninstalling the app may remove device-local records. Account deletion from K Scan AI cloud systems may not erase a local copy that remains on a disconnected device; you may also delete local records through the app, clear app data, or uninstall the app.`,
        },
        { type: "subheading", text: "4.4 Style Library and Account-Backed Content" },
        {
          type: "paragraph",
          text: `When you save or upload content to account-backed features, K Scan AI may store the content and related metadata in private cloud storage associated with your account. This may include selected images, item metadata, style preferences, timestamps, and references needed to display, organize, retrieve, or delete the content. Signed or time-limited URLs may be generated to display protected images.`,
        },
        { type: "subheading", text: "4.5 Elise, StyleChat, Signature Style, and Spoken Responses" },
        {
          type: "paragraph",
          text: `When you use Elise or her StyleChat conversational capability, K Scan AI may process your prompts, messages, selected item or image context, recent conversation context, saved style preferences, and Signature Style signals needed to respond. Signature Style may include fashion preferences inferred from items you save, scan, like, reject, discuss, or organize.`,
        },
        {
          type: "paragraph",
          text: `When Spoken Responses are enabled, K Scan AI may send the text of an eligible Elise response, limited message and session identifiers, and the selected stylist voice profile to K Scan AI's speech service and an authorized text-to-speech provider, currently ElevenLabs, to generate audio and timing information. Generated audio may be cached temporarily on the device for playback and removed after playback, interruption, or cache cleanup.`,
        },
        {
          type: "paragraph",
          text: `Spoken Responses do not record your voice. The current Android release does not request microphone permission, does not collect raw microphone audio, and does not create voiceprints or biometric voice identifiers. Spoken Responses may be unavailable because of network conditions, provider availability, account limits, or provider quota.`,
        },
        { type: "subheading", text: "4.6 Dressing Rooms, Shared with Me, Messaging, and Sharing" },
        {
          type: "paragraph",
          text: `Owned Dressing Rooms, room items, and Shared with Me memberships are account-backed. K Scan AI may process room names, descriptions, item snapshots, images, participants, membership status, messages, reactions, timestamps, invitations, removals, revocations, and related metadata to operate these features.`,
        },
        {
          type: "paragraph",
          text: `Content you deliberately add to a shared Dressing Room may be visible to room members. Where a room owner enables a share link or public preview, selected room details, items, and images may be visible to anyone who possesses the active link. Share links and memberships may be revoked, but recipients may retain screenshots or copies of content they previously viewed. K Scan AI does not describe Dressing Rooms as end-to-end encrypted or zero-knowledge storage.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI processes block relationships and moderation reports to enforce user-safety boundaries. A blocked or departed participant may lose collaboration rights, and unblocking does not necessarily restore a prior collaboration without a fresh valid share or invitation.`,
        },
        {
          type: "paragraph",
          text: `Users may report Dressing Room users or messages in-app. K Scan AI may store the reporter, target user/content identifiers, room/message identifiers, report category, timestamps, status, and limited moderation context as necessary to investigate and enforce safety and policy requirements.`,
        },
        { type: "subheading", text: "4.7 Shopping, Retailer, Marketplace, and Product Interaction Data" },
        {
          type: "paragraph",
          text: `K Scan AI may process scan-derived product signals, search terms, item attributes, product identifiers, retailer or marketplace identifiers, product URLs, product images, saved items, and outbound-link interactions to return shopping options and retailer-neutral product results. Product availability, pricing, images, currency, and links may change or be incomplete.`,
        },
        {
          type: "paragraph",
          text: `When you open a third-party retailer or marketplace link, you leave K Scan AI and the third party's privacy policy applies. K Scan AI does not intentionally provide raw uploaded images to retailers for their independent use unless separately disclosed. K Scan AI may receive referral or affiliate compensation from qualifying outbound links, but the current mobile release does not use third-party advertising SDKs or Advertising ID for targeted advertising.`,
        },
        { type: "subheading", text: "4.8 Approximate Location" },
        {
          type: "paragraph",
          text: `The Android app may request approximate location for optional weather-aware styling or localization. K Scan AI does not request precise location or background location in the current release. If you deny approximate location, core scanning, saving, Dressing Rooms, and Elise text functionality remain available, although optional weather-aware context may be limited.`,
        },
        {
          type: "paragraph",
          text: `Approximate location may also be inferred from an IP address for security, localization, fraud prevention, or service delivery. K Scan AI does not use location for continuous tracking.`,
        },
        { type: "subheading", text: "4.9 Device, App, Diagnostics, and Security Data" },
        {
          type: "paragraph",
          text: `We may process device type, operating system, app version, package and build information, language settings, IP address, request metadata, authentication identifiers, app interactions, feature usage, error information, performance information, and security or fraud-prevention signals. The precise data depends on the feature used and the production configuration. The current app does not use a third-party targeted-advertising SDK or collect Advertising ID.`,
        },
        { type: "subheading", text: "4.10 Website, Cookies, and Similar Technologies" },
        {
          type: "paragraph",
          text: `When you use the K Scan AI website, we may process browser, device, referral, traffic, cookie, and interaction data to operate the website, maintain security, measure performance, and understand usage. Where required by law, non-essential cookies or similar technologies are used only after valid consent.`,
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: "5. How We Use Information",
      blocks: [
        {
          type: "bullets",
          items: [
            `Provide, operate, maintain, secure, and troubleshoot the Service.`,
            `Authenticate users and maintain account, session, and actor isolation.`,
            `Process single-image and multi-image scans and return fashion-related results.`,
            `Provide Elise text responses, spoken responses, Signature Style personalization, and related AI functions.`,
            `Save and reopen Recent Scans and stored commerce snapshots.`,
            `Operate Style Library, owned Dressing Rooms, Shared with Me, room sharing, messages, and reactions.`,
            `Return retailer-neutral shopping results and route users to third-party product pages.`,
            `Prevent duplicate actions, abuse, fraud, unauthorized access, and cross-account data leakage.`,
            `Enforce block relationships, investigate user/content/AI-response reports, moderate objectionable content, and apply safety or policy restrictions.`,
            `Measure service reliability, diagnose errors, and improve product quality where permitted.`,
            `Comply with law, respond to lawful requests, enforce terms, and protect users and the Service.`,
            `Create aggregated or de-identified analytics for internal service improvement, planning, and reporting.`,
          ],
        },
      ],
    },
    {
      id: "ai-processing",
      heading: "6. AI Processing and Automated Results",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI uses cloud-hosted AI and automated systems to identify clothing and accessories, generate fashion attributes, match products, provide Elise responses, generate spoken audio, and personalize style assistance. Depending on the production configuration, providers may include Google Gemini, Supabase-hosted functions, ElevenLabs, and other authorized infrastructure or fallback providers.`,
        },
        {
          type: "paragraph",
          text: `AI-generated results are probabilistic and may be incomplete, inaccurate, unavailable, offensive, or based on similar rather than exact products. K Scan AI does not guarantee product identity, brand, authenticity, price, currency, availability, fit, material, retailer listing, or recommendation accuracy. AI Outputs are for fashion discovery and informational use, not professional, legal, medical, financial, authentication, or purchasing advice.`,
        },
        {
          type: "paragraph",
          text: `Users can report AI-generated responses from within K Scan AI without leaving the app. AI-response reports use structured reasons and limited allowlisted identifiers/context tied to the authenticated reporter. The report record does not store the raw AI response, uploaded photos, scan media, or raw image content.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not use AI to identify people, perform facial recognition, create biometric profiles, infer protected traits for legally significant decisions, or make decisions about employment, housing, credit, health care, insurance, or similar opportunities.`,
        },
      ],
    },
    {
      id: "how-we-disclose-information",
      heading: "7. How We Disclose Information",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may disclose information to service providers and other recipients only as reasonably necessary for the purposes described in this Policy, based on the feature used, user choices, app version, provider configuration, and legal requirements.`,
        },
      ],
    },
    {
      id: "service-providers",
      heading: "8. Service Providers and Infrastructure",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may use providers for authentication, database hosting, storage, cloud infrastructure, AI inference, text-to-speech, product search, email, security, diagnostics, support, account deletion, and app operations. These providers may process account data, Submitted Visual Data, prompts, messages, generated audio, item metadata, diagnostics, and related information as necessary to provide their services.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI uses reasonable contractual, technical, and organizational measures designed to have providers handle information consistently with this Policy and applicable law. Provider-specific logging, retention, safety review, quality improvement, and deletion terms may apply. K Scan AI does not make a zero-retention or no-human-review promise unless the applicable production configuration has been verified and separately disclosed.`,
        },
      ],
    },
    {
      id: "retailer-marketplace-providers",
      heading: "9. Retailer, Marketplace, and Product-Search Providers",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may disclose limited fashion and product information, such as search terms, garment attributes, product signals, product identifiers, and product URLs, to product-search, commerce, affiliate, retailer, or marketplace providers to return relevant results and route users to third-party pages. When you visit a third party, its privacy policy and terms apply.`,
        },
      ],
    },
    {
      id: "analytics-advertising-tracking",
      heading: "10. Analytics, Advertising, and Tracking Posture",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may use first-party operational logs and basic usage information to maintain security, understand feature performance, diagnose errors, and improve the Service. The current mobile release does not use third-party advertising SDKs, does not collect Advertising ID for targeted advertising, and does not track users across third-party apps or websites for targeted advertising.`,
        },
        {
          type: "paragraph",
          text: `If K Scan AI later introduces cross-app tracking, targeted advertising, advertising SDKs, or activities requiring consent or App Tracking Transparency, K Scan AI will update this Policy and platform disclosures and request required consent before enabling those activities.`,
        },
      ],
    },
    {
      id: "sale-sharing-deidentified",
      heading: "11. Sale, Sharing, and De-identified Information",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI does not sell raw scans, uploaded images, Elise messages, biometric identifiers, face templates, voiceprints, precise location, government identification, payment-card information, or sensitive personal information for independent third-party use.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may use aggregated or de-identified information for internal analytics, security, service improvement, product planning, trend analysis, and business reporting, provided the information does not reasonably identify a person. If K Scan AI later begins a regulated sale or sharing activity, it will provide required notice, consent, and opt-out controls before or when the activity begins.`,
        },
      ],
    },
    {
      id: "data-retention",
      heading: "12. Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI retains information only as long as reasonably necessary for the purposes described in this Policy, unless a longer period is required or permitted by law.`,
        },
        {
          type: "bullets",
          items: [
            `Account and contact data: retained while the account is active and for a reasonable period afterward for support, security, fraud prevention, dispute resolution, or legal compliance.`,
            `Device-local Recent Scans: retained on the device until deleted in the app, app data is cleared, or the app is uninstalled, subject to device and operating-system behavior.`,
            `Account-backed Style Library and Dressing Room data: retained while the account is active or until the user deletes the item, room, membership, or account, subject to backup, security, fraud-prevention, and legal requirements.`,
            `Submitted Visual Data used for AI processing: retained only as long as reasonably necessary to process the request, maintain security, troubleshoot, prevent abuse, comply with law, or support an item the user intentionally saves.`,
            `Elise and StyleChat messages: retained as needed to operate sessions, preserve requested history, provide Signature Style context, troubleshoot, maintain security, and honor privacy requests.`,
            `Block relationships and UGC moderation reports: retained as account-linked safety/moderation records as reasonably necessary to enforce restrictions, investigate reports, prevent abuse, resolve disputes, and comply with law.`,
            `AI-response reports: structured report metadata may be retained for moderation, safety, abuse prevention, policy enforcement, support, and audit purposes. The report record does not store the raw AI-generated response, uploaded photos, scan media, or raw image content.`,
            `Generated spoken-response audio: generally stored temporarily for playback and cache management rather than as a permanent voice recording.`,
            `Operational logs and diagnostics: retained for a reasonable period for security, reliability, troubleshooting, and legal compliance.`,
            `Aggregated or de-identified information: may be retained for internal analytics and planning if it cannot reasonably identify a person.`,
          ],
        },
        {
          type: "paragraph",
          text: `A verified deletion request begins an approximately 30-day recovery period. If the account is not restored, active application systems become eligible for deletion after that period. Residual copies may remain in encrypted or access-controlled backups for a limited additional period before expiring through normal backup lifecycle processes, unless a longer period is required or permitted by law.`,
        },
      ],
    },
    {
      id: "account-deletion",
      heading: "13. Account Deletion and Privacy Requests",
      blocks: [
        {
          type: "paragraph",
          text: `You may request deletion through the app at Settings > Account > Delete Account, through the public deletion page, or by contacting K Scan AI. The external deletion resource is available at https://kscan.app/legal/delete-account.`,
        },
        {
          type: "paragraph",
          text: `A verified deletion request deactivates the account and begins an approximately 30-day recovery period. If the account is not restored, it becomes eligible for permanent deletion, subject to legal, security, fraud-prevention, dispute-resolution, backup, and technical limitations. K Scan AI does not claim that deletion is immediate or fully automated across every system.`,
        },
        {
          type: "paragraph",
          text: `Cloud account deletion does not necessarily remove device-local Recent Scans from a device that is offline or no longer connected to the account. To remove local records, delete them in the app, clear app data, or uninstall the app. Information may be retained where legally permitted or technically necessary for security, fraud prevention, dispute resolution, tax or accounting obligations, backup integrity, or other legitimate operational purposes.`,
        },
      ],
    },
    {
      id: "privacy-choices-controls",
      heading: "14. Your Privacy Choices and Controls",
      blocks: [
        {
          type: "bullets",
          items: [
            `Use device settings to allow or deny camera, selected-photo, and approximate-location access.`,
            `Turn Elise Spoken Responses on or off in the app.`,
            `Delete individual Recent Scans, Style Library items, Dressing Rooms, or memberships where the app provides those controls.`,
            `Revoke room share links or remove Shared with Me memberships where available.`,
            `Use available in-app controls to report objectionable Dressing Room users/messages, report AI-generated responses, and block users where supported.`,
            `Request access, correction, deletion, export, restriction, objection, or withdrawal of consent where required by law.`,
            `Opt out of marketing communications through the method included in the communication.`,
            `Use any legally required sale, sharing, or targeted-advertising opt-out control if such processing is introduced.`,
          ],
        },
        {
          type: "paragraph",
          text: `Privacy requests may be submitted to kscanai.app@gmail.com. We may need to verify your identity before completing certain requests.`,
        },
      ],
    },
    {
      id: "us-state-privacy-rights",
      heading: "15. California and Other U.S. State Privacy Rights",
      blocks: [
        {
          type: "paragraph",
          text: `Residents of California and other U.S. states with applicable privacy laws may have rights to know, access, correct, delete, obtain a copy of, or opt out of certain processing of personal information, and to avoid unlawful discrimination for exercising those rights, subject to legal exceptions. K Scan AI honors Global Privacy Control signals where required by law.`,
        },
        {
          type: "paragraph",
          text: `The current mobile release does not use third-party advertising SDKs or Advertising ID for targeted advertising. K Scan AI does not sell raw scans, uploaded images, biometric data, or sensitive personal information. Requests may be submitted through available in-app controls, https://kscan.app/legal/delete-account, or kscanai.app@gmail.com.`,
        },
      ],
    },
    {
      id: "gdpr-rights",
      heading: "16. GDPR and UK GDPR Rights and Legal Bases",
      blocks: [
        {
          type: "paragraph",
          text: `If you are located in the European Economic Area, United Kingdom, or another jurisdiction with similar rights, you may have rights to access, correct, delete, restrict, object, request portability, withdraw consent, and lodge a complaint with a supervisory authority.`,
        },
        {
          type: "paragraph",
          text: `Possible legal bases include performance of a contract for core Service delivery; consent where required for optional permissions, cookies, marketing, or other optional processing; legitimate interests for security, fraud prevention, diagnostics, service improvement, account support, and commerce routing where lawful; and legal obligations.`,
        },
      ],
    },
    {
      id: "international-transfers",
      heading: "17. International Data Transfers",
      blocks: [
        {
          type: "paragraph",
          text: `Information may be processed in the United States and other countries. Where required, K Scan AI uses lawful transfer mechanisms and safeguards, which may include Standard Contractual Clauses or other approved mechanisms.`,
        },
      ],
    },
    {
      id: "security",
      heading: "18. Security",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI implements reasonable administrative, technical, and organizational safeguards designed to protect information, including encryption in transit where appropriate, access controls, private storage where appropriate, actor-scoped authorization, data minimization, and operational security practices. No system can be guaranteed completely secure, and K Scan AI does not use absolute-security or zero-knowledge claims for the current mobile architecture.`,
        },
      ],
    },
    {
      id: "children-minor-safety",
      heading: "19. Children and Minor Safety",
      blocks: [
        {
          type: "paragraph",
          text: `The Service is intended for adults 18 and older and is not directed to children or minors. If you believe a minor has provided information to K Scan AI, contact kscanai.app@gmail.com.`,
        },
      ],
    },
    {
      id: "third-party-links",
      heading: "20. Third-Party Links and Retailer Transactions",
      blocks: [
        {
          type: "paragraph",
          text: `The Service may link to third-party retailers, marketplaces, websites, or apps. K Scan AI is not responsible for third-party privacy practices, security, pricing, availability, authenticity, shipping, returns, payment processing, or customer service. Purchases are completed directly with the applicable third party unless K Scan AI expressly discloses otherwise.`,
        },
      ],
    },
    {
      id: "payments",
      heading: "21. Payments and Future Paid Features",
      blocks: [
        {
          type: "paragraph",
          text: `In the current release, shopping actions route users to third-party pages for physical goods. K Scan AI does not process payment-card information for those purchases. If K Scan AI later offers paid digital features or subscriptions in the app, it will use Google Play Billing, Apple In-App Purchase, or other required payment methods and will update applicable disclosures.`,
        },
      ],
    },
    {
      id: "platform-disclosures",
      heading: "22. Platform Privacy Disclosures",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI will maintain Google Play Data Safety and other platform disclosures that correspond to the applicable app build. Depending on the features used, reportable categories may include contact information, identifiers, photos, User Content, search terms, app activity, product interactions, diagnostics, and approximate location. Platform disclosures must be updated when permissions, SDKs, AI providers, storage practices, or data flows change.`,
        },
      ],
    },
    {
      id: "changes-to-policy",
      heading: "23. Changes to This Policy",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may update this Privacy Policy as the Service, data flows, providers, platform requirements, or law changes. For material changes, K Scan AI will provide additional notice or obtain consent where required. The Last Updated date will be revised when changes are published.`,
        },
      ],
    },
    {
      id: "contact-us",
      heading: "24. Contact Us",
      blocks: [
        {
          type: "contact",
          lines: [
            { text: "K Scan AI" },
            { label: "Email:", text: "kscanai.app@gmail.com", href: "mailto:kscanai.app@gmail.com" },
            { label: "Website:", text: "https://kscan.app", href: "https://kscan.app" },
            { label: "Full Privacy Policy:", text: "https://kscan.app/legal/privacy", href: "https://kscan.app/legal/privacy" },
            { label: "Privacy Summary:", text: "https://kscan.app/privacy", href: "https://kscan.app/privacy" },
            { label: "Account Deletion:", text: "https://kscan.app/legal/delete-account", href: "https://kscan.app/legal/delete-account" },
          ],
        },
      ],
    },
    {
      id: "appendix-a",
      heading: "Appendix A - Current Data Category Summary",
      blocks: [
        {
          type: "table",
          head: ["Category", "Examples", "Primary purpose"],
          rows: [
            ["Contact information", "Email address and name if provided", "Authentication, support, notices, privacy requests",],
            ["Identifiers", "User ID, account ID, authentication and session identifiers", "Account security, actor isolation, diagnostics",],
            ["Photos and User Content", "Selected images, scans, Elise/StyleChat messages, room content", "Scanning, AI styling, saving, sharing, support",],
            ["Search and commerce data", "Product queries, item attributes, retailer links, saved commerce snapshots", "Product matching, retailer-neutral routing, reopen behavior",],
            ["App activity", "Feature usage, save actions, room actions, outbound-link interactions", "App functionality, reliability, fraud prevention, internal analytics",],
            ["Approximate location", "Optional coarse device location or IP-derived region", "Optional weather context, localization, security",],
            ["Diagnostics", "Error, performance, request, and security logs", "Troubleshooting, reliability, security",],
            ["Audio", "Generated Elise speech audio and timing data", "Text-to-speech playback; no microphone recording",],
            ["Financial information", "Payment-card data for retailer purchases", "Not collected by K Scan AI in the current third-party checkout flow",],
            ["Sensitive information", "Not intentionally requested; may appear incidentally in uploaded content", "Users should avoid submitting sensitive or non-fashion information",],
            ["Safety and moderation", "Block relationships, UGC reports, AI-response report metadata and allowlisted identifiers/context", "User safety, abuse prevention, moderation, policy enforcement, support",],
            ["Pose/body-positioning context", "User-requested Mirror Selfie image/pose signals where used", "Fashion visualization; not facial recognition or biometric identification",],
          ],
        },
      ],
    }
  ],
};
