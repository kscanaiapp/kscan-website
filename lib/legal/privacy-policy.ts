import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Privacy Policy, transcribed verbatim from the authoritative
// Build 34-aligned source document (K_Scan_AI_Privacy_Policy_Build_34_Aligned_September_1_2026.docx).
// Effective Date: June 12, 2026 | Last Updated: September 1, 2026

export const privacyPolicy: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "Privacy Policy",
  subtitle: "Full public policy for the website and K Scan AI mobile applications",
  effectiveDate: "June 12, 2026",
  lastUpdated: "September 1, 2026",
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
          text: `K Scan AI ("K Scan AI," "we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you use the K Scan AI website, Android and iOS mobile applications, APIs, AI systems, Scanner, Text Scan, Voice Scan, Elise and her StyleChat conversational capability, Closet, Signature Style, Dressing Rooms, Packing Intelligence, Wardrobe Concierge, Smart Watchlist, Virtual Try-On, retailer-neutral shopping tools, and related services (collectively, the "Service").`,
        },
        {
          type: "paragraph",
          text: `K Scan AI is a fashion-specific visual discovery, personal fashion intelligence, wardrobe, collaboration, and shopping-assistance service. K Scan AI mobile applications are available through Google Play and the Apple App Store. Different features use different privacy architectures: some processing occurs locally on the device, while other features require information to be transmitted to K Scan AI and authorized service providers. This Policy describes those practices feature by feature.`,
        },
        {
          type: "paragraph",
          text: `This Policy describes the Build 34 product baseline and the Service as offered on the Last Updated date. It should be read together with in-app permission notices, Apple App Privacy disclosures, Google Play Data Safety disclosures, account-deletion notices, and any feature-specific notices presented at or before collection. If a material data flow changes, K Scan AI will update the applicable disclosures as required.`,
        },
      ],
    },
    {
      id: "privacy-controls-summary",
      heading: `Privacy Controls Summary`,
      blocks: [
        {
          type: "bullets",
          items: [
            `K Scan AI is intended for users 18 years of age and older. The Service is not directed to children or minors.`,
            `K Scan AI is designed to understand fashion, not identify people. K Scan AI does not use Scanner, Mirror Selfie, Elise, or Virtual Try-On to create faceprints, voiceprints, biometric identity profiles, or identify a person.`,
            `Camera and photo access are used when you choose to capture or select content for features such as Scanner, Closet, Mirror Selfie, Dressing Rooms, Elise attachments, or Virtual Try-On. K Scan AI does not use the camera for continuous or background monitoring.`,
            `Supported image flows may use local preparation, metadata reduction, or privacy filtering where available. K Scan AI does not promise that every face, bystander, license plate, or identifying element is automatically removed from every image before processing.`,
            `Voice Scan uses microphone input only when you choose to speak a request. Under the supported Build 34 architecture, speech recognition is performed on-device and raw Voice Scan audio is not intentionally uploaded to K Scan AI, Gemini, ElevenLabs, OpenRouter, or a separate speech-to-text provider. A reviewed transcript may be submitted as Text Scan content.`,
            `Elise Spoken Responses are separate from Voice Scan. Eligible Elise response text and voice-generation settings may be sent to ElevenLabs to generate spoken audio.`,
            `Closet may store account-backed wardrobe items, private item media, ownership state, synchronization information, and derived wardrobe facts so your wardrobe can persist across devices and support personalized features.`,
            `Signature Style is an inferred, non-sensitive fashion-preference profile derived from authorized fashion information such as Closet contents and relevant styling activity. It is used for fashion personalization, not sensitive-trait or personality profiling.`,
            `Packing Intelligence and Wardrobe Concierge may send bounded, task-relevant wardrobe, trip, weather, Signature Style, and prompt context to authorized AI services to generate requested recommendations.`,
            `Virtual Try-On requires a different data flow: when you use it, a recognizable person image and garment image may be transmitted to K Scan AI and an external AI image-processing provider to generate an illustrative result.`,
            `Smart Watchlist may store watched product listings, product URLs, observed prices, price targets, monitoring status/history, refresh metadata, and notification preferences.`,
            `If you enable notifications, K Scan AI may process a push token, platform/device delivery information, account association, Watch association, and notification payload needed to deliver alerts through Expo, Apple Push Notification Service, and/or Firebase Cloud Messaging.`,
            `K Scan AI may request optional approximate foreground location for weather-aware styling. Core K Scan features remain available if you deny location. K Scan AI does not use background location for this purpose.`,
            `K+ Early Access is currently a complimentary $0.00 subscription/entitlement. RevenueCat supports entitlement synchronization and operational measurement, while K Scan AI's server remains the authoritative source of K+ access. K+ Early Access does not currently create an automatic recurring charge.`,
            `K Scan AI does not currently use third-party advertising SDKs or track users across unrelated apps and websites for targeted advertising.`,
            `You may request account deletion through the app and through K Scan AI's external deletion resource. Account deletion is a staged process that may include a limited restoration period before verified permanent purge, subject to disclosed shared-content, legal, security, fraud-prevention, and technical exceptions.`,
          ],
        },
      ],
    },
    {
      id: "scope-overview",
      heading: `1. Scope and Overview`,
      blocks: [
        {
          type: "paragraph",
          text: `This Policy applies to the K Scan AI website, Android and iOS mobile applications, APIs, account-backed cloud services, AI features, and other services that reference this Policy. It covers information you provide, information generated through use of the Service, information stored locally on your device, information stored in K Scan AI cloud systems, and information processed by authorized service providers.`,
        },
        {
          type: "paragraph",
          text: `Google Play Data Safety disclosures, Apple App Privacy disclosures, operating-system permission prompts, and feature-specific notices should be read together with this Policy. Platform labels summarize only certain categories and do not replace this Policy.`,
        },
      ],
    },
    {
      id: "age-eligibility",
      heading: `2. Age Eligibility and 18+ Audience`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is intended for users 18 years of age and older. The Service is not directed to children or minors, and users under 18 should not use the Service.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not knowingly collect personal information from children or minors. If we learn that we collected personal information from a person under 18, we will take reasonable steps to delete or restrict it, subject to legal, safety, security, fraud-prevention, backup, and technical requirements. K Scan AI does not participate in Google Play Families or Designed for Families.`,
        },
      ],
    },
    {
      id: "key-definitions",
      heading: `3. Key Definitions`,
      blocks: [
        {
          type: "definition",
          term: `Personal Information or Personal Data:`,
          text: `Information that identifies, relates to, describes, can reasonably be linked to, or could reasonably identify an individual or household.`,
        },
        {
          type: "definition",
          term: `User Content:`,
          text: `Content a user submits, captures, uploads, saves, sends, shares, or creates through the Service, including images, Scanner content, Text Scan queries, reviewed Voice Scan transcripts, Elise or StyleChat messages, Closet media, Dressing Room content, Packing inputs, notes, and support communications.`,
        },
        {
          type: "definition",
          term: `Submitted Visual Data:`,
          text: `Camera captures, selected photos, screenshots, Mirror Selfie images, Elise attachments, Closet images, Dressing Room images, Virtual Try-On images, and other visual inputs intentionally submitted to a K Scan feature.`,
        },
        {
          type: "definition",
          term: `Derived Fashion Data:`,
          text: `Fashion information generated from Submitted Visual Data or other authorized fashion activity, such as garment category, subtype, brand evidence, color, material estimate, silhouette, fit, pattern, texture, construction details, product-match signals, source-image association, and other fashion-related analytical outputs.`,
        },
        {
          type: "definition",
          term: `Closet Data:`,
          text: `Account-backed wardrobe records, item images or media, item facts, ownership state, metadata, synchronization information, source information, timestamps, and derived wardrobe characteristics associated with the user's canonical Closet.`,
        },
        {
          type: "definition",
          term: `Signature Style:`,
          text: `An inferred, non-sensitive fashion-preference profile derived from authorized fashion information such as Closet contents and relevant styling activity. Signature Style may reflect patterns such as colors, brands, categories, materials, silhouettes, recurring garment relationships, and other wardrobe tendencies.`,
        },
        {
          type: "definition",
          term: `Elise:`,
          text: `K Scan AI's conversational AI stylist. StyleChat is Elise's conversational capability. Depending on the feature, Elise may use bounded conversation context and authorized fashion, wardrobe, weather, Packing, Dressing Room, commerce, or Signature Style context.`,
        },
        {
          type: "definition",
          term: `Voice Scan:`,
          text: `A user-initiated feature that converts spoken fashion intent into text using supported on-device speech recognition. The reviewed transcript may then be submitted through Text Scan.`,
        },
        {
          type: "definition",
          term: `Packing Intelligence:`,
          text: `A K+ feature that may combine user-provided trip information, authorized Closet data, Signature Style, weather context, outfit composition, and AI processing to generate fashion-focused packing recommendations.`,
        },
        {
          type: "definition",
          term: `Wardrobe Concierge:`,
          text: `A K+ capability of Elise that reasons over authorized Closet and related fashion information to answer wardrobe questions and recommendations.`,
        },
        {
          type: "definition",
          term: `Watchlist Data:`,
          text: `Information used to monitor supported products, including canonical product identity, product URL, retailer or marketplace, product title, observed price, price target, creation time, account ownership, monitoring state, refresh metadata, price/status history, and notification preferences.`,
        },
        {
          type: "definition",
          term: `Virtual Try-On or VTO:`,
          text: `An optional AI image-generation feature that uses a person image and garment image to generate an illustrative visualization of how an eligible garment may appear. It is not a measurement, fit, sizing, or authentication service.`,
        },
        {
          type: "definition",
          term: `Approximate Location Data:`,
          text: `Coarse or rounded foreground location information used for optional weather-aware styling, localization, security, fraud prevention, or service delivery. Trip destinations entered by a user are treated as user-provided travel information, not device-location collection.`,
        },
        {
          type: "definition",
          term: `Safety and Moderation Data:`,
          text: `Block relationships, report categories, target user/content identifiers, room or message identifiers, AI-response report identifiers, timestamps, status information, and limited context used to investigate safety, abuse, policy, or moderation issues.`,
        },
        {
          type: "definition",
          term: `Aggregated or De-identified Data:`,
          text: `Information processed or combined so that it does not reasonably identify a person and is subject to controls designed to prevent re-identification.`,
        },
      ],
    },
    {
      id: "information-we-collect",
      heading: `4. Information We Collect`,
      blocks: [
        { type: "subheading", text: `4.1 Account, Contact, Authentication, and Preference Information` },
        {
          type: "paragraph",
          text: `We may collect information you provide directly, including your name if provided, email address, profile information, support communications, feedback, privacy requests, and account preferences. Authentication may be provided through email/password, Sign in with Google, Sign in with Apple, or another enabled provider. We receive account and authentication information permitted by the provider and your settings.`,
        },
        {
          type: "paragraph",
          text: `We may also store account-scoped stylist, avatar, personalization, K+, notification, privacy, and feature preferences. Optional styling context that you explicitly provide is used as a fashion preference and is not inferred from photographs, name, voice, or wardrobe unless separately disclosed.`,
        },
        { type: "subheading", text: `4.2 Camera, Photo Access, Scanner, Mirror Selfie, and Image Preparation` },
        {
          type: "paragraph",
          text: `When you intentionally start an image-based feature, K Scan AI may access the camera or images you select through operating-system photo or image pickers. Image-based features may include Scanner, Closet intake, Mirror Selfie, Dressing Rooms, Elise attachments, and Virtual Try-On. K Scan AI uses scoped or user-selected photo access where supported by the platform.`,
        },
        {
          type: "paragraph",
          text: `On supported flows, K Scan AI may create a new image derivative on your device before remote processing. Local preparation may include resizing, compression, re-encoding, metadata reduction, or privacy filtering where available. These safeguards are feature-specific. K Scan AI does not promise that every face, bystander, license plate, private document, or identifying element is automatically detected or removed before every upload.`,
        },
        {
          type: "paragraph",
          text: `Submitted Visual Data may be transmitted through encrypted connections and processed by K Scan AI cloud systems and authorized AI or infrastructure providers when the requested feature requires remote processing. K Scan AI does not use the camera for continuous monitoring, background capture, or surveillance.`,
        },
        {
          type: "paragraph",
          text: `Mirror Selfie may process a recognizable user image and pose or body-positioning information needed for the requested wardrobe or fashion experience. K Scan AI does not use Mirror Selfie to identify the person, authenticate identity, perform facial recognition, or create a biometric identity profile.`,
        },
        { type: "subheading", text: `4.3 Text Scan and Voice Scan` },
        {
          type: "paragraph",
          text: `Text Scan processes fashion queries, instructions, and other text you intentionally submit to provide fashion analysis and commerce results.`,
        },
        {
          type: "paragraph",
          text: `Voice Scan uses microphone input only when you choose to activate the feature. Under the supported Build 34 architecture, speech recognition is performed using platform-native on-device speech recognition. K Scan AI does not intentionally upload or store the raw Voice Scan microphone recording in K Scan AI cloud storage or send it to Gemini, ElevenLabs, OpenRouter, Meta Llama, or a separate cloud speech-to-text provider. If supported on-device recognition cannot be used, Voice Scan may be unavailable.`,
        },
        {
          type: "paragraph",
          text: `After speech is recognized, you can review or edit the transcript. If you submit the transcript, it is treated as user-provided Text Scan content and may be transmitted to K Scan AI and authorized providers for fashion, AI, and commerce processing. Device and platform speech services remain subject to the operating-system provider's own terms and privacy practices.`,
        },
        { type: "subheading", text: `4.4 Device-Local Recent Scans and Local Data` },
        {
          type: "paragraph",
          text: `Some Recent Scan information and saved commerce snapshots may remain device-local. Device-local data may include submitted or prepared image references, fashion results, product information, timestamps, saved state, and local preferences. Device-local records do not automatically become available on another device unless a cloud-backed feature explicitly synchronizes them.`,
        },
        {
          type: "paragraph",
          text: `Clearing app data or uninstalling the app may remove device-local records, subject to operating-system behavior. Account deletion from K Scan AI cloud systems may not erase a local copy that remains on an offline or disconnected device.`,
        },
        { type: "subheading", text: `4.5 Closet, Cloud Closet, and Account-Backed Wardrobe Data` },
        {
          type: "paragraph",
          text: `Closet is K Scan AI's authoritative account-backed wardrobe system for items the user identifies as owned. Depending on the feature and K+ entitlement, K Scan AI may store Closet records and private item media in cloud systems so wardrobe information can be restored or synchronized across devices.`,
        },
        {
          type: "paragraph",
          text: `Closet Data may include item images, category, brand, colors, materials, style information, silhouette, fit, source, timestamps, ownership status, synchronization status, derived fashion characteristics, and other facts needed to operate the user's wardrobe. Closet Data may be used by Elise, Signature Style, Packing Intelligence, Wardrobe Concierge, outfit tools, and other authorized fashion-personalization features.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI distinguishes owned Closet items from products that are merely scanned, saved, viewed, shared, or available from retailers. A product appearing elsewhere in the Service is not treated as owned unless the canonical Closet record supports that conclusion.`,
        },
        { type: "subheading", text: `4.6 Signature Style and Inferred Fashion Preferences` },
        {
          type: "paragraph",
          text: `K Scan AI may derive Signature Style from authorized fashion information, including the user's Closet and relevant styling activity. Signature Style may summarize non-sensitive fashion patterns such as preferred colors, categories, brands, materials, silhouettes, style themes, garment relationships, and other wardrobe tendencies.`,
        },
        {
          type: "paragraph",
          text: `Signature Style is used to personalize fashion recommendations, ordering, explanations, outfit suggestions, Packing recommendations, and other styling experiences. It is not used to change objective Scanner facts, identify a person, create a biometric profile, infer protected traits, diagnose personality or health conditions, or make legally significant decisions.`,
        },
        {
          type: "paragraph",
          text: `Where available, users may adjust or disable certain personalization or feedback features through app controls. Some detailed preference signals may remain device-local, while compact or account-backed fashion preference information may be stored or transmitted when needed for the requested personalization feature.`,
        },
        { type: "subheading", text: `4.7 Elise, StyleChat, Wardrobe Concierge, and AI Context` },
        {
          type: "paragraph",
          text: `When you use Elise or StyleChat, K Scan AI may process and persist your prompts and messages, selected item or image context, recent conversation context, feedback/reporting information, attachment references, and related session metadata. Conversations may be associated with your authenticated account so they can be reopened or used for authorized continuity.`,
        },
        {
          type: "paragraph",
          text: `For a new AI response, K Scan AI is designed to send a bounded set of information relevant to the request rather than automatically exposing the user's entire lifetime account history. Depending on the request and enabled features, relevant context may include current Scanner or Text Scan results, reviewed Voice Scan transcript, selected attachment, authorized Closet facts, Signature Style, Dressing Room item context, weather context, Packing information, Wardrobe Concierge context, or product context.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may derive non-sensitive fashion preferences from authorized activity, such as commonly selected brands, categories, colors, or general price ranges. Elise is designed not to infer sensitive traits such as race, ethnicity, religion, health conditions, disability, sexual orientation, political beliefs, biometric identity, or other protected characteristics from your images or wardrobe activity.`,
        },
        {
          type: "paragraph",
          text: `Free-text messages can contain information you choose to provide. Please do not submit sensitive personal information that is not necessary for the fashion service you are requesting.`,
        },
        { type: "subheading", text: `4.8 Packing Intelligence and User-Provided Trip Information` },
        {
          type: "paragraph",
          text: `Packing Intelligence may process destination, travel dates, trip type, expected activities, preferences, additional instructions, authorized Closet candidates, Signature Style, weather summaries, and related fashion context to generate a requested packing plan.`,
        },
        {
          type: "paragraph",
          text: `A trip destination that you type into Packing is user-provided travel information. K Scan AI may send the destination, relevant dates, and/or rounded destination coordinates to a weather or geocoding provider to retrieve weather information. The user's Closet, K Scan account ID, email address, and broader personal profile are not required merely to obtain weather data.`,
        },
        {
          type: "paragraph",
          text: `Packing recommendations are AI-generated and may be incomplete, inaccurate, or unsuitable for particular weather, activities, cultural expectations, safety needs, or travel circumstances. K Scan AI does not guarantee a weather outcome or that a packing plan is complete.`,
        },
        { type: "subheading", text: `4.9 Virtual Try-On` },
        {
          type: "paragraph",
          text: `Virtual Try-On is an optional K+ AI image-generation feature. When you use Virtual Try-On, a recognizable person image, garment image, garment category or slot, and technical generation parameters may be transmitted to K Scan AI and an authorized external image-processing provider, currently AILabTools Try On Clothes Pro accessed through RapidAPI, to generate the requested visualization.`,
        },
        {
          type: "paragraph",
          text: `Virtual Try-On is not a zero-knowledge or fully on-device feature. K Scan AI seeks to minimize unrelated account information and unnecessary metadata included with the provider request. Virtual Try-On output is intended to remain session-oriented unless you choose to save, share, or use it through another supported feature.`,
        },
        {
          type: "paragraph",
          text: `Virtual Try-On does not identify the person in the image, create a biometric identity profile, or guarantee real-world fit, sizing, garment dimensions, drape, fabric behavior, color accuracy, body measurements, authenticity, or actual appearance.`,
        },
        { type: "subheading", text: `4.10 Dressing Rooms, Shared Content, Messaging, and Safety` },
        {
          type: "paragraph",
          text: `Dressing Rooms are collaborative fashion spaces. K Scan AI may process room titles, descriptions, item snapshots, images, participants, memberships, messages, reactions, Saved Looks, invitations, share links, revocations, timestamps, and related metadata to operate these features.`,
        },
        {
          type: "paragraph",
          text: `Content you deliberately share may be visible to authorized participants or, where a share link or preview is enabled, to people with access to that link. Recipients may retain screenshots or copies of information they were authorized to view. Dressing Rooms are not described as end-to-end encrypted or zero-knowledge storage.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI processes reports, block relationships, revocations, moderation records, and related safety data to prevent abuse and enforce platform or legal requirements. Users may report abusive users or messages and block users where supported. K Scan AI may restrict, remove, preserve, or investigate content and account access where appropriate for safety, support, legal compliance, or enforcement.`,
        },
        { type: "subheading", text: `4.11 Smart Watchlist and Notifications` },
        {
          type: "paragraph",
          text: `Smart Watchlist allows eligible users to monitor supported products. Watchlist Data may include canonical product identity, product URL, retailer or marketplace, product title, observed price, target price, creation time, account ownership, monitoring state, refresh metadata, price or status history, and notification preferences.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may periodically re-check supported product information through retailer, marketplace, search, or enrichment providers. Prices, availability, inventory, product details, and retailer data can change between observations. K Scan AI does not guarantee continuous monitoring, notification delivery, price accuracy, availability, or that an alert represents a guaranteed offer or reservation.`,
        },
        {
          type: "paragraph",
          text: `If you opt into notifications, K Scan AI may process an Expo push token, device or install identifier where required for delivery, platform/operating system, account association, Watch association, notification preferences, delivery metadata, and a notification payload that may contain product information such as item title, price, price movement, or availability-related information.`,
        },
        {
          type: "paragraph",
          text: `Push delivery may involve Expo notification infrastructure, Apple Push Notification Service (APNs), and Firebase Cloud Messaging (FCM). Notification permission is optional and can be declined or changed through your device settings. Disabling notifications does not disable the rest of the Service.`,
        },
        { type: "subheading", text: `4.12 Shopping, Retailer, Marketplace, and Product Interaction Data` },
        {
          type: "paragraph",
          text: `K Scan AI may process fashion queries, scan-derived product signals, product identifiers, URLs, product images, retailer or marketplace identifiers, product clicks, saved items, commerce interactions, and other information needed to provide retailer-neutral product discovery.`,
        },
        {
          type: "paragraph",
          text: `Depending on the request and provider mix, K Scan AI may send product or fashion queries, product URLs, retailer identifiers, SKU/model information, or other product identifiers to search, commerce, resale, sneaker, enrichment, affiliate, or marketplace providers. These providers generally do not need the user's K Scan account identity to perform a product-search request.`,
        },
        {
          type: "paragraph",
          text: `When you open an external retailer or marketplace link, you leave K Scan AI. The third party independently controls the resulting transaction and its own privacy practices. K Scan AI does not currently collect payment-card information for external physical-goods purchases.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may receive affiliate, referral, attribution, or other commercial compensation from qualifying outbound activity. That compensation does not determine objective Scanner identification and does not convert an independent retailer into a formal K Scan partner unless K Scan expressly states otherwise.`,
        },
        { type: "subheading", text: `4.13 K+ Early Access and RevenueCat` },
        {
          type: "paragraph",
          text: `K+ Early Access is currently a complimentary $0.00 subscription/entitlement. It does not currently require a payment card or create an automatic recurring charge. K Scan AI's server is the authoritative source of K+ access.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI uses RevenueCat to mirror and synchronize K+ entitlement state and to support operational and commercial readiness. Depending on configuration, RevenueCat may receive a K Scan App User ID or user UUID, K+ entitlement identifier, entitlement expiration, entitlement synchronization status, platform or technical information, and other limited subscription/entitlement metadata needed to provide its service.`,
        },
        {
          type: "paragraph",
          text: `RevenueCat does not need raw Scanner images, raw Voice Scan audio, Closet images, Elise conversations, or Virtual Try-On images to perform the entitlement-mirroring role described here. If K Scan later introduces paid K+ purchases, this Policy and applicable Apple/Google disclosures will be updated as necessary to reflect purchase and billing data flows.`,
        },
        { type: "subheading", text: `4.14 Approximate Location, Weather, and Geocoding` },
        {
          type: "paragraph",
          text: `K Scan AI may request optional approximate foreground location to improve weather-aware styling. The app does not require continuous or background location for ordinary fashion functionality. If you deny location permission, core scanning, Closet, Dressing Rooms, Text Scan, Voice Scan transcript submission, and Elise text functionality remain available, although weather-aware experiences may be limited.`,
        },
        {
          type: "paragraph",
          text: `For weather-aware styling, K Scan AI is designed to reduce or round location before it is used for weather retrieval or styling context. Raw precise GPS coordinates are not intended to become a durable fashion profile.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI uses Open-Meteo for weather or geocoding data. Open-Meteo may receive rounded coordinates, a destination entered by the user, and dates needed for a forecast. K Scan AI does not need to provide the user's Closet, email address, account identity, or full personal profile merely to retrieve weather data.`,
        },
        {
          type: "paragraph",
          text: `Approximate location may also be inferred from an IP address for security, localization, fraud prevention, or service delivery.`,
        },
        { type: "subheading", text: `4.15 Device, App, Diagnostics, Security, and Operational Data` },
        {
          type: "paragraph",
          text: `We may process device type, operating system, app version, build information, language or locale settings, IP address, request metadata, authentication identifiers, app interactions, feature usage, rate-limit information, error and performance data, notification delivery information, and security or fraud-prevention signals.`,
        },
        {
          type: "paragraph",
          text: `We may process account and session identifiers, message identifiers, timestamps, usage counts, provider/model metadata, attachment references, synchronization state, and other limited operational information needed to operate, secure, debug, deduplicate, meter, or support the Service.`,
        },
        { type: "subheading", text: `4.16 Website, Cookies, and Similar Technologies` },
        {
          type: "paragraph",
          text: `When you use the K Scan AI website, we may process browser, device, referral, traffic, cookie, and interaction data to operate the site, maintain security, measure performance, and understand usage. Where required by law, non-essential cookies or similar technologies are used only after valid consent. The website may provide a privacy choices or Do Not Sell or Share mechanism where required.`,
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: `5. How We Use Information`,
      blocks: [
        {
          type: "bullets",
          items: [
            `Provide, operate, maintain, secure, and troubleshoot the Service.`,
            `Authenticate users and maintain account, session, entitlement, and actor isolation.`,
            `Process Scanner images, Text Scan queries, reviewed Voice Scan transcripts, and other requested fashion inputs.`,
            `Prepare images locally on supported flows, including resizing, re-encoding, metadata reduction, or privacy filtering where available.`,
            `Store and synchronize authorized Closet records and media, preserve ownership truth, and provide cross-device wardrobe functionality.`,
            `Create and use Signature Style and other non-sensitive fashion preferences for personalization.`,
            `Provide Elise, StyleChat, Wardrobe Concierge, Packing Intelligence, outfit intelligence, and other AI-assisted fashion functions.`,
            `Provide optional Voice Scan and Elise Spoken Responses using their distinct processing paths.`,
            `Generate Virtual Try-On results when requested.`,
            `Operate Dressing Rooms, sharing, messages, reactions, reports, blocks, and collaboration controls.`,
            `Operate Smart Watchlist, monitor supported product information, and deliver optional alerts.`,
            `Use approximate location, user-entered destinations, and weather information for weather-aware styling and Packing when enabled.`,
            `Return retailer-neutral shopping results and route users to independent third-party product pages.`,
            `Mirror and synchronize K+ entitlement state through RevenueCat.`,
            `Prevent abuse, fraud, unauthorized access, cross-account leakage, misuse of shared content, and security incidents.`,
            `Investigate user/content/AI-response reports and enforce safety, moderation, legal, and platform rules.`,
            `Measure service reliability, diagnose errors, manage quotas, and improve product quality where permitted.`,
            `Respond to support, privacy, deletion, restoration, and legal requests.`,
            `Comply with law, enforce agreements, and protect users, K Scan AI, and third parties.`,
            `Create aggregated, anonymized, or de-identified analytics and fashion, product, commerce, trend, or demand insights for permitted internal or commercial purposes.`,
          ],
        },
      ],
    },
    {
      id: "ai-processing",
      heading: `6. AI Processing, Automated Results, and Profiling`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI uses authorized AI and automated systems to understand fashion images and text, generate fashion attributes, provide Elise and Wardrobe Concierge responses, create packing recommendations, generate Virtual Try-On images, support product matching, and personalize style assistance. Material AI providers may include Google Gemini, ElevenLabs for speech generation, OpenRouter or other authorized model-routing services where enabled, Meta Llama-family models where routed, and AILabTools for Virtual Try-On.`,
        },
        {
          type: "paragraph",
          text: `Depending on the feature, an AI provider may receive only the information reasonably required for that operation, such as a user-provided fashion image, fashion query, Elise message, bounded recent conversation context, selected attachment, authorized Closet-derived fashion information, Signature Style information, trip context, weather summary, product context, garment image, or person image for Virtual Try-On.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI keeps provider credentials on K Scan-controlled servers rather than embedding production provider secrets in the mobile app. Provider model versions and routing may change over time under K Scan-controlled infrastructure.`,
        },
        {
          type: "paragraph",
          text: `AI-generated outputs are probabilistic and may be incomplete, inaccurate, unavailable, offensive, stale, or based on similar rather than exact products. K Scan AI does not guarantee brand, authenticity, exact product match, price, retailer inventory, availability, fit, size, weather outcome, style suitability, Closet classification, packing completeness, or Virtual Try-On accuracy.`,
        },
        {
          type: "paragraph",
          text: `Signature Style and other fashion personalization are forms of preference profiling for fashion recommendations. K Scan AI does not use this profiling to make decisions that produce legal or similarly significant effects concerning employment, housing, credit, health care, insurance, education, or comparable opportunities.`,
        },
        {
          type: "paragraph",
          text: `Users can report problematic AI-generated responses through in-app tools where available. K Scan AI may retain structured report information and limited allowlisted context needed for safety, investigation, support, and policy enforcement.`,
        },
      ],
    },
    {
      id: "voice-scan-spoken-responses",
      heading: `7. Voice Scan and Elise Spoken Responses`,
      blocks: [
        {
          type: "paragraph",
          text: `Voice Scan and Elise Spoken Responses are separate features.`,
        },
        {
          type: "paragraph",
          text: `Voice Scan is user-initiated microphone input. Under the supported Build 34 architecture, recognition occurs on-device and raw Voice Scan audio is not intentionally uploaded to K Scan AI cloud systems or third-party AI, speech, or storage providers. The resulting transcript becomes cloud-processed only if you choose to submit it through Text Scan.`,
        },
        {
          type: "paragraph",
          text: `Elise Spoken Responses are generated audio output. K Scan AI may send eligible Elise response text, selected stylist or voice settings, and bounded operational information to ElevenLabs to generate audio and timing/alignment data. ElevenLabs does not need the user's raw Voice Scan microphone recording for this purpose.`,
        },
      ],
    },
    {
      id: "virtual-try-on",
      heading: `8. Virtual Try-On and Recognizable Person Images`,
      blocks: [
        {
          type: "paragraph",
          text: `Virtual Try-On requires transmission of a recognizable person image and garment image to provide the requested AI-generated visualization. K Scan AI may transmit those images and limited technical parameters through K Scan-controlled backend infrastructure to AILabTools via RapidAPI or another disclosed authorized provider used for the VTO feature.`,
        },
        {
          type: "paragraph",
          text: `By choosing to use Virtual Try-On, you direct K Scan AI to process and transmit the selected images for that feature. K Scan AI will provide feature-level notice and obtain permission where required by applicable law or platform policy before sharing personal data with a third-party AI provider.`,
        },
        {
          type: "paragraph",
          text: `You should only submit an image that you have the legal right to use. If another recognizable person appears in the image, you are responsible for having any permission or other legal basis required to submit and process that person's image.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not use VTO images for facial identification or biometric authentication. VTO output is illustrative and is not automatically added to the user's permanent Closet unless the user chooses an available save or share action.`,
        },
      ],
    },
    {
      id: "how-we-disclose",
      heading: `9. How We Disclose Information`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may disclose personal information to service providers, processors, platform providers, and other recipients only as reasonably necessary for the purposes described in this Policy, based on the feature used, user choices, platform configuration, and legal requirements.`,
        },
        {
          type: "paragraph",
          text: `We may also disclose information when required by law, legal process, court order, governmental request, or when reasonably necessary to protect rights, safety, security, prevent fraud or abuse, investigate violations, or complete a corporate transaction such as a merger, financing, acquisition, or sale of assets, subject to applicable law.`,
        },
        {
          type: "paragraph",
          text: `Where a third party acts as an independent controller, such as an external retailer after you leave K Scan AI, that third party's privacy policy governs its independent processing.`,
        },
      ],
    },
    {
      id: "service-providers",
      heading: `10. Service Providers and Infrastructure`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI uses service providers and infrastructure providers to operate different features. Material providers may include:`,
        },
        {
          type: "bullets",
          items: [
            `Supabase - authentication, accounts, sessions, database, private cloud storage, Edge Functions, Closet, Dressing Rooms, Elise account records, K+ state, Watchlist, privacy and deletion workflows, and other account-backed data.`,
            `Google Gemini - visual fashion analysis, natural-language fashion processing, Elise, Scanner, Text Scan, wardrobe reasoning, Packing Intelligence, Wardrobe Concierge, structured recommendations, and other enabled AI workloads.`,
            `ElevenLabs - generation of Elise spoken responses from eligible Elise text and voice configuration.`,
            `OpenRouter and Meta Llama-family models - model routing, fallback, redundancy, or workload specialization where enabled; relevant AI input/context may be processed by the routing service and selected model provider.`,
            `AILabTools via RapidAPI - Virtual Try-On person images, garment images, garment category or slot, and technical generation parameters.`,
            `RapidAPI and other API gateways - provider infrastructure for certain commerce, enrichment, resale, sneaker, and Virtual Try-On requests, depending on the service.`,
            `RevenueCat - K+ entitlement synchronization and operational measurement using limited account or entitlement metadata.`,
            `Open-Meteo - weather/geocoding based on rounded location or user-entered destination and dates.`,
            `Expo, Apple Push Notification Service, and Firebase Cloud Messaging - push token registration, delivery information, and notification payloads where notifications are enabled.`,
            `Render - K Scan server infrastructure for certain backend or transactional workflows.`,
            `Resend - transactional email delivery, including account deletion/restoration and other account or security messages; may process email address, message content, and delivery metadata.`,
            `Apple and Google - platform distribution and sign-in services; may process information associated with Sign in with Apple, Google Sign-In, App Store, Google Play, on-device platform capabilities, and push delivery according to their own terms.`,
          ],
        },
        {
          type: "paragraph",
          text: `Provider-specific logging, security review, safety review, quality-improvement, retention, backup, and deletion terms may apply. K Scan AI does not make a blanket promise that every provider uses zero retention, no training, or no human review unless the applicable production configuration and provider arrangement have been specifically verified and disclosed.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI requires service providers that process personal information on K Scan AI's behalf to protect it under contractual, technical, organizational, and legal requirements designed to provide protection consistent with this Policy and applicable platform requirements. Where required for account deletion, K Scan AI will delete data from its own systems and request applicable service providers to delete account-associated data they process on K Scan AI's behalf, subject to disclosed legal or technical exceptions.`,
        },
      ],
    },
    {
      id: "retailer-providers",
      heading: `11. Product Search, Retailer, Marketplace, and Commerce Providers`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may use general shopping search, web search, retailer, marketplace, resale, sneaker, product-enrichment, affiliate, and commerce providers. The provider mix may change over time without changing K Scan AI's retailer-neutral product principle.`,
        },
        {
          type: "paragraph",
          text: `Depending on the request, providers may receive a fashion/product query, product URL, retailer identifier, product name, model, SKU, or other product information needed to return or enrich a result. Current provider infrastructure may include services such as Serper Shopping, Brave Search, Poshmark-related search, Farfetch-oriented enrichment, KicksCrew-oriented enrichment, Vinted/Apify secondhand search, and sneaker-data providers.`,
        },
        {
          type: "paragraph",
          text: `The appearance of a retailer, brand, marketplace, or product in K Scan AI does not imply endorsement, sponsorship, affiliation, or partnership unless K Scan AI expressly states otherwise.`,
        },
      ],
    },
    {
      id: "analytics-advertising",
      heading: `12. Analytics, Advertising, and Tracking Posture`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may use first-party operational logs, diagnostics, security information, and basic usage data to operate, secure, understand, and improve the Service.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not currently use third-party advertising SDKs, does not use Advertising ID for targeted advertising, and does not track users across unrelated third-party apps or websites for targeted advertising. K Scan AI's business model does not depend on selling private conversations or raw user images to advertisers.`,
        },
        {
          type: "paragraph",
          text: `If K Scan AI later introduces cross-context behavioral advertising, targeted advertising, advertising SDKs, or activities requiring consent or App Tracking Transparency, K Scan AI will update this Policy and platform disclosures and obtain required consent before enabling those activities.`,
        },
      ],
    },
    {
      id: "sale-sharing",
      heading: `13. Sale, Sharing, Affiliate Activity, and De-identified Information`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI does not sell raw Scanner images, Closet images, Virtual Try-On images, Elise or StyleChat conversations, private Dressing Room content, raw Voice Scan audio, biometric identifiers, voiceprints, payment-card data, or sensitive personal information to third-party data buyers for independent use.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may disclose limited personal information to service providers and commerce providers to operate requested features. Some disclosures may be defined as a 'sale,' 'sharing,' targeted advertising, or similar regulated activity under broad U.S. state privacy laws even where no money is exchanged. Where required, K Scan AI provides applicable notice, consent, opt-out, or privacy-choice mechanisms.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may receive affiliate, referral, attribution, or other commercial compensation from outbound commerce activity.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI may create, use, disclose, license, or commercialize aggregated, anonymized, or de-identified fashion, product, commerce, trend, or demand insights where the information does not reasonably identify an individual and is maintained subject to measures designed to prevent re-identification.`,
        },
      ],
    },
    {
      id: "data-retention",
      heading: `14. Data Retention`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI retains personal information only as long as reasonably necessary for the purposes described in this Policy, unless a longer period is required or permitted by law. Retention varies by data type, feature, user choice, account state, operational need, provider arrangement, and legal requirement.`,
        },
        {
          type: "bullets",
          items: [
            `Account and contact data: generally retained while the account is active and during the applicable deletion/restoration lifecycle, subject to security, support, dispute, legal, and fraud-prevention needs.`,
            `Device-local Recent Scans and local preferences: retained on the device until deleted in the app, cleared through app or operating-system controls, or removed by normal local lifecycle behavior.`,
            `Closet records and account-backed wardrobe media: retained while the account or item remains active, until the user deletes applicable content, or until account deletion is completed, subject to shared-content, security, backup, fraud-prevention, and legal exceptions.`,
            `Signature Style and account-backed personalization: retained while used for personalization or until deleted, reset, disabled, or removed through applicable account-deletion processes. Device-local preference data may follow device-local lifecycle behavior.`,
            `Submitted Visual Data used for Scanner or AI processing: retained only as long as reasonably necessary to process the request, maintain security, troubleshoot, prevent abuse, comply with law, or support content the user intentionally saves.`,
            `Virtual Try-On images and outputs: intended to be session-oriented unless the user chooses to save or share them through another feature. Provider-side processing and retention may be subject to the applicable provider arrangement and legal requirements.`,
            `Raw Voice Scan audio: not intentionally uploaded or stored by K Scan AI under the supported on-device recognition architecture. Reviewed transcripts submitted to Text Scan follow Text Scan retention practices.`,
            `Elise/StyleChat messages and Wardrobe Concierge interactions: retained as needed to operate requested conversation history, provide authorized continuity and personalization, support safety and troubleshooting, and honor privacy requests.`,
            `Packing trip inputs and generated plans: retained only if needed to provide, reopen, synchronize, or support the requested Packing experience, subject to user controls and account deletion.`,
            `Watchlist watches, price/status history, and monitoring preferences: retained while a Watch remains active or as reasonably necessary to operate Watchlist history, alerts, security, support, or account deletion.`,
            `Push tokens and notification preferences: retained while associated with an active installation/account and notifications are enabled or until no longer needed for delivery, security, or cleanup.`,
            `K+ entitlement and RevenueCat synchronization data: retained while needed to manage current or historical entitlement state, operational integrity, account support, or legal requirements.`,
            `Dressing Room, moderation, and safety records: retained as reasonably necessary to operate collaboration, enforce blocks/revocations, investigate reports, prevent abuse, resolve disputes, and comply with law. Shared content may have special retention treatment described below.`,
            `Operational logs and diagnostics: retained for a reasonable period for security, reliability, troubleshooting, abuse prevention, audit, and legal compliance. Provider or infrastructure logs may follow provider-specific retention schedules.`,
            `Deletion lifecycle records: K Scan AI may retain a limited de-identified or pseudonymous deletion transaction record for security, compliance, audit, and operational integrity.`,
            `Aggregated, anonymized, or de-identified information: may be retained for analytics, service improvement, planning, reporting, trend analysis, or permitted commercial insight uses when it no longer reasonably identifies an individual.`,
          ],
        },
        {
          type: "paragraph",
          text: `K Scan AI does not publish a universal fixed retention period for every provider log, backup, AI request, or temporary image flow unless that period has been verified for the applicable configuration. Residual copies may remain for a limited period in backups or security systems before normal expiration, or longer where required or permitted by law.`,
        },
      ],
    },
    {
      id: "account-deletion",
      heading: `15. Account Deletion, Restoration, and Shared-Data Handling`,
      blocks: [
        {
          type: "paragraph",
          text: `Users may request account deletion through the app and through K Scan AI's external deletion resource at https://kscan.app/legal/delete-account. K Scan AI may verify account ownership before acting on a request.`,
        },
        {
          type: "paragraph",
          text: `A valid deletion request begins a staged deletion lifecycle. K Scan AI may deactivate the account and restrict normal access during a limited restoration period before the account becomes eligible for final purge. Deactivation is not treated as completed account deletion.`,
        },
        {
          type: "paragraph",
          text: `If the account is not restored within the configured restoration period and no legal, security, fraud-prevention, ownership, or technical hold applies, the account becomes eligible for permanent deletion. The purge process is intended to remove the authentication account and applicable account-associated cloud data, including profile information, Closet records and user-owned media, K+ records, Elise account records, Watchlist data, account-specific preferences, and other registered account-backed data.`,
        },
        {
          type: "paragraph",
          text: `Shared Dressing Rooms and collaborative content require special handling. Deleting one account may not destroy content another authorized user continues to have a legitimate shared relationship with. A shared room may be transferred, detached, anonymized, or preserved for remaining participants where appropriate, and media still required by a surviving shared object may remain until the final authorized reference is removed.`,
        },
        {
          type: "paragraph",
          text: `Some limited security, fraud-prevention, moderation, dispute, legal, accounting, audit, or deletion-verification records may be retained where reasonably necessary or permitted by law. K Scan AI may keep a limited de-identified or pseudonymous record of the deletion transaction.`,
        },
        {
          type: "paragraph",
          text: `Cloud account deletion does not necessarily remove data stored solely on an offline or disconnected device or information independently retained by another user, retailer, app store, payment platform, or independent third party.`,
        },
        {
          type: "paragraph",
          text: `Where service providers process account-associated data on K Scan AI's behalf, K Scan AI will request deletion from applicable processors as required by Google Play policy, applicable contracts, and law, subject to disclosed legitimate retention exceptions.`,
        },
        {
          type: "paragraph",
          text: `After verified permanent purge is completed, the deleted K Scan AI account is not recoverable through the ordinary restoration process.`,
        },
      ],
    },
    {
      id: "privacy-choices-controls",
      heading: `16. Privacy Choices, Permissions, and Consent Revocation`,
      blocks: [
        {
          type: "bullets",
          items: [
            `Camera and selected-photo access: allow, limit, or revoke through device settings. K Scan AI requests access in connection with image-based features rather than for background surveillance.`,
            `Microphone and speech recognition: Voice Scan requests access when you choose to use it. You may deny or revoke microphone/speech permission; other non-voice features remain available.`,
            `Approximate location: optional for weather-aware styling. You may deny or revoke location access through device settings.`,
            `Notifications: optional for alert features such as Watchlist. You may deny permission or disable notifications in app/device settings.`,
            `AI and third-party AI processing: feature-level notices may be presented before personal information is transmitted to third-party AI providers where required by Apple policy, law, or the nature of the feature. You may decline an optional feature rather than submit the requested data.`,
            `Signature Style and personalization: use available controls to adjust, disable, reset, or delete supported personalization data where provided.`,
            `User content: delete eligible Recent Scans, Closet items, Saved Looks, Dressing Rooms, messages, Watchlist items, or other content using available controls.`,
            `Marketing: opt out through the unsubscribe method in the communication.`,
            `Sale/sharing/targeted advertising: use any legally required opt-out or Do Not Sell or Share mechanism where applicable.`,
            `Account deletion: request deletion in-app or through the external deletion resource.`,
          ],
        },
        {
          type: "paragraph",
          text: `When K Scan AI relies on consent as the legal basis for processing, you may withdraw consent at any time using the available app, device, website, or contact mechanism. Withdrawal does not affect processing that was lawful before withdrawal and may make an optional feature unavailable.`,
        },
      ],
    },
    {
      id: "california-rights",
      heading: `17. California and Other U.S. State Privacy Rights`,
      blocks: [
        {
          type: "paragraph",
          text: `Depending on where you live and whether an applicable state privacy law applies to K Scan AI, you may have rights to know or access personal information, correct inaccurate information, delete personal information, obtain a portable copy, opt out of sale or sharing, opt out of targeted advertising, limit certain uses of sensitive personal information, or opt out of certain profiling. You may also have a right to appeal a denied request where required by law.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI will not unlawfully discriminate against you for exercising applicable privacy rights. We may need to verify your identity or authority before completing a request. Where permitted by law, an authorized agent may submit certain requests on your behalf.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not currently sell personal information for monetary consideration or use cross-context behavioral advertising. K Scan AI does not use raw scans, private UGC, Elise messages, raw Voice Scan audio, biometric data, or sensitive personal information for independent third-party advertising.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI honors Global Privacy Control signals as legally valid opt-out requests where required. The public privacy-choice resource is available at https://kscan.app/do-not-sell-or-share.`,
        },
        {
          type: "paragraph",
          text: `For California residents, the categories of personal information K Scan AI may collect and the business or commercial purposes for using them are summarized in Appendix A. K Scan AI may provide additional notice at or before collection for specific features, permissions, or data categories as required by law.`,
        },
      ],
    },
    {
      id: "gdpr-rights",
      heading: `18. European Economic Area, EU GDPR, and Similar Rights`,
      blocks: [
        {
          type: "paragraph",
          text: `If you are in the European Economic Area or another jurisdiction where the GDPR or substantially similar law applies, K Scan AI acts as a controller for personal data it determines the purposes and means of processing, except where a third party acts independently for its own service.`,
        },
        {
          type: "paragraph",
          text: `Subject to applicable law, you may have rights to access your personal data, correct inaccurate data, request erasure, restrict processing, object to certain processing, receive certain data in a portable format, withdraw consent, and lodge a complaint with the competent data protection authority. You may also have rights relating to automated decision-making and profiling.`,
        },
        {
          type: "paragraph",
          text: `To exercise GDPR rights, contact kscanai.app@gmail.com. K Scan AI may verify your identity before completing a request. If K Scan AI appoints an EU representative or Data Protection Officer because applicable law requires one, the current contact information will be made available through the Privacy Policy or another legally required notice.`,
        },
        {
          type: "paragraph",
          text: `You may lodge a complaint with the supervisory authority in the EU/EEA country where you live, work, or believe an infringement occurred. Exercising this right does not prevent you from contacting K Scan AI first.`,
        },
      ],
    },
    {
      id: "gdpr-legal-bases",
      heading: `19. Legal Bases for EEA/EU Processing`,
      blocks: [
        {
          type: "paragraph",
          text: `Where GDPR applies, K Scan AI processes personal data under one or more legal bases depending on the activity:`,
        },
        {
          type: "bullets",
          items: [
            `Performance of a contract or steps requested before entering a contract: to create and operate an account, provide Scanner, Text Scan, Elise, Closet, Dressing Rooms, Watchlist, K+, Packing, Wardrobe Concierge, Virtual Try-On, requested commerce-routing features, and related support.`,
            `Consent: where required for optional device permissions, Voice Scan microphone access, optional location, non-essential cookies, marketing, specific third-party AI disclosures, or other processing for which consent is the appropriate legal basis.`,
            `Legitimate interests: where lawful and not overridden by your rights, for security, fraud prevention, abuse prevention, service reliability, diagnostics, customer support, product improvement, account integrity, retailer-neutral commerce routing, and limited internal analytics.`,
            `Legal obligations: to comply with applicable law, valid legal process, tax/accounting obligations, regulatory requirements, and legally required retention or disclosure.`,
            `Establishment, exercise, or defense of legal claims: where necessary to preserve relevant records, resolve disputes, or protect legal rights.`,
          ],
        },
        {
          type: "paragraph",
          text: `Where processing is based on legitimate interests, K Scan AI considers the nature of the information, the user's reasonable expectations, the purpose and necessity of the processing, and measures that reduce privacy impact. Where processing is based on consent, consent may be withdrawn as described above.`,
        },
      ],
    },
    {
      id: "automated-decision-making",
      heading: `20. Automated Decision-Making and Fashion Profiling`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI uses automated systems to identify fashion items, infer non-sensitive style preferences, rank or recommend products, generate outfit or packing suggestions, and create other fashion-related outputs.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI does not use these systems to make solely automated decisions that produce legal or similarly significant effects concerning you, such as decisions about employment, housing, credit, insurance, health care, education, or access to essential services. Signature Style is used for fashion personalization, not sensitive or legally significant profiling.`,
        },
      ],
    },
    {
      id: "international-transfers",
      heading: `21. International Data Transfers`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI is based in or operates from the United States and uses service providers that may process information in the United States and other countries. These countries may have data-protection laws different from those where you live.`,
        },
        {
          type: "paragraph",
          text: `Where GDPR or other applicable law requires a transfer mechanism for personal data sent outside the EEA or another protected jurisdiction, K Scan AI will rely on an applicable lawful mechanism, which may include an adequacy decision, Standard Contractual Clauses, another approved transfer instrument, or a legally recognized exception, together with supplementary safeguards where required.`,
        },
        {
          type: "paragraph",
          text: `You may contact K Scan AI for information about applicable transfer safeguards, subject to confidentiality and legal limitations.`,
        },
      ],
    },
    {
      id: "security",
      heading: `22. Security and Security-Incident Notification`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI implements reasonable administrative, technical, and organizational safeguards designed to protect personal information. Measures may include encryption in transit, private cloud storage where appropriate, account-scoped authorization, server-side secret handling, data minimization, bounded provider payloads, session controls, security logging, deletion controls, and operational access restrictions.`,
        },
        {
          type: "paragraph",
          text: `No system can be guaranteed completely secure. K Scan AI does not make absolute claims such as military-grade security, zero-knowledge storage for all features, or universal end-to-end encryption.`,
        },
        {
          type: "paragraph",
          text: `If K Scan AI discovers a personal-data breach or security incident requiring notice under applicable law, K Scan AI will provide legally required notifications to affected individuals, regulators, or other authorities within the required timeframe.`,
        },
      ],
    },
    {
      id: "children-minor-safety",
      heading: `23. Children and Minor Safety`,
      blocks: [
        {
          type: "paragraph",
          text: `The Service is intended for adults 18 and older and is not directed to children or minors. If you believe a person under 18 has provided personal information to K Scan AI, contact kscanai.app@gmail.com.`,
        },
      ],
    },
    {
      id: "third-party-links",
      heading: `24. Third-Party Links, Retailer Transactions, and Independent Services`,
      blocks: [
        {
          type: "paragraph",
          text: `The Service may link to third-party retailers, marketplaces, websites, or applications. K Scan AI is not responsible for the independent privacy, security, pricing, availability, authenticity, shipping, payment processing, returns, warranties, or customer-service practices of those third parties.`,
        },
        {
          type: "paragraph",
          text: `When you leave K Scan AI and interact with a retailer or marketplace, that third party's privacy policy and terms govern its independent processing. Purchases of physical goods are normally completed directly with the applicable retailer or marketplace.`,
        },
      ],
    },
    {
      id: "payments-future",
      heading: `25. K+ Early Access, Purchases, and Future Paid Features`,
      blocks: [
        {
          type: "paragraph",
          text: `K+ Early Access is currently offered as a complimentary $0.00 subscription/entitlement. It does not currently require a credit card, create an automatic charge, or create an automatically renewing paid subscription. K Scan AI uses its own systems as the authoritative source of K+ access and RevenueCat as an entitlement synchronization and operational/commercial-readiness layer.`,
        },
        {
          type: "paragraph",
          text: `If K Scan AI later introduces paid K+ subscriptions or other paid digital features, K Scan AI will use Apple In-App Purchase, Google Play Billing, or another required platform payment method where applicable and will update pricing, renewal, cancellation, purchase, privacy, and store disclosures as required.`,
        },
        {
          type: "paragraph",
          text: `External physical-goods purchases remain transactions with independent retailers or marketplaces and are not K Scan AI digital in-app purchases.`,
        },
      ],
    },
    {
      id: "platform-disclosures",
      heading: `26. Platform Privacy and Permission Disclosures`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI maintains Apple App Privacy disclosures, Google Play Data Safety declarations, permission purpose strings, and in-app notices intended to correspond to the actual app build and third-party integrations.`,
        },
        {
          type: "paragraph",
          text: `Apple App Privacy and Google Play Data Safety disclosures may include categories such as contact information, identifiers, photos or videos, other user content, search history or queries, app activity and product interactions, approximate location, diagnostics, push/device information, and other categories depending on the feature used and the platform's taxonomy.`,
        },
        {
          type: "paragraph",
          text: `Microphone permission does not mean K Scan AI collects raw Voice Scan audio when the supported implementation processes that audio on-device and does not transmit or retain it. The reviewed Voice Scan transcript is different: once submitted, it becomes Text Scan content and is processed accordingly.`,
        },
        {
          type: "paragraph",
          text: `K Scan AI is responsible for accurately accounting for personal data handled by third-party SDKs, APIs, AI providers, and service providers integrated into or used by the Service. Platform disclosures will be updated when material permissions, SDKs, providers, or data flows change.`,
        },
      ],
    },
    {
      id: "changes-to-policy",
      heading: `27. Changes to This Policy`,
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may update this Privacy Policy as the Service, data flows, providers, platform requirements, or applicable law changes. For material changes, K Scan AI will provide additional notice or obtain consent where required. The Last Updated date will be revised when changes are published.`,
        },
      ],
    },
    {
      id: "contact-us",
      heading: `28. Contact Us`,
      blocks: [
        {
          type: "contact",
          lines: [
            { text: `K Scan AI` },
            { label: `Email:`, text: `kscanai.app@gmail.com`, href: `mailto:kscanai.app@gmail.com` },
            { label: `Website:`, text: `https://kscan.app`, href: `https://kscan.app` },
            { label: `Full Privacy Policy:`, text: `https://kscan.app/legal/privacy`, href: `https://kscan.app/legal/privacy` },
            { label: `Privacy Summary:`, text: `https://kscan.app/privacy`, href: `https://kscan.app/privacy` },
            { label: `Account Deletion:`, text: `https://kscan.app/legal/delete-account`, href: `https://kscan.app/legal/delete-account` },
            { label: `Privacy Choices / Do Not Sell or Share:`, text: `https://kscan.app/do-not-sell-or-share`, href: `https://kscan.app/do-not-sell-or-share` },
          ],
        },
      ],
    },
    {
      id: "appendix-a",
      heading: `Appendix A - Build 34 Data Category Summary`,
      blocks: [
        {
          type: "table",
          head: ["Category", "Examples", "Primary purpose"],
          rows: [
            [`Contact information`, `Email address, name if provided, support communications`, `Authentication, support, notices, privacy requests`],
            [`Identifiers`, `User ID, account ID, authentication/session identifiers, K+ App User ID/UUID, message/session identifiers`, `Account security, entitlement, actor isolation, diagnostics, conversation operation`],
            [`Photos and visual content`, `Scanner, Closet, Mirror Selfie, Dressing Room, Elise attachment, and VTO images`, `Fashion analysis, wardrobe, sharing, AI styling, Virtual Try-On`],
            [`Text and user-generated content`, `Text Scan queries, reviewed Voice Scan transcripts, Elise messages, Dressing Room messages, Packing instructions, notes`, `Fashion analysis, AI assistance, collaboration, support`],
            [`Closet and wardrobe data`, `Owned items, private media, category, brand, color, material, ownership/sync state, derived wardrobe facts`, `Cross-device wardrobe, personalization, Packing, Concierge`],
            [`Signature Style / inferred preferences`, `Colors, categories, brands, materials, silhouettes, recurring wardrobe/style patterns`, `Fashion personalization and recommendations`],
            [`Search and commerce data`, `Product queries, URLs, retailer identifiers, product clicks, saved product data`, `Retailer-neutral product discovery and routing`],
            [`Watchlist data`, `Watched products, prices, targets, status/history, refresh metadata, alert preferences`, `Product monitoring and alerts`],
            [`Trip and packing data`, `Destination, dates, trip type, activities, preferences, requested packing context`, `Packing Intelligence and weather enrichment`],
            [`Approximate location`, `Optional foreground coarse/rounded location; IP-derived region`, `Weather-aware styling, localization, security`],
            [`Notifications`, `Expo/APNs/FCM push tokens, platform/device delivery data, Watch association, payload metadata`, `Optional Watchlist and other user-selected alerts`],
            [`K+ entitlement data`, `K+ status, activation/expiry, RevenueCat synchronization state`, `Access control, entitlement operations, product measurement`],
            [`App activity`, `Feature usage, saves, Closet actions, room actions, outbound retailer interactions`, `App functionality, reliability, fraud prevention, internal analytics`],
            [`Diagnostics and security`, `Error, performance, request, rate-limit, authentication, fraud/security logs`, `Troubleshooting, reliability, security, abuse prevention`],
            [`Safety and moderation`, `Blocks, reports, target identifiers, room/message IDs, AI-report metadata`, `User safety, abuse prevention, moderation, policy enforcement`],
            [`Audio`, `Raw Voice Scan audio processed locally under supported architecture; generated Elise speech audio`, `Local speech recognition; text-to-speech playback`],
            [`Payment/financial information`, `Payment-card data for external retailer purchases`, `Not collected by K Scan AI for third-party physical-goods checkout`],
            [`Sensitive information`, `Not intentionally requested for fashion personalization; may appear incidentally in user-submitted text/images`, `Users should avoid unnecessary sensitive information; not used for sensitive-trait profiling`],
            [`Aggregated/de-identified data`, `Fashion trends, product/commerce demand insights, aggregate usage patterns`, `Analytics, planning, service improvement, permitted commercial insights`],
          ],
        },
      ],
    },
    {
      id: "appendix-b",
      heading: `Appendix B - Material Service Provider Inventory`,
      blocks: [
        {
          type: "table",
          head: ["Provider / Category", "Build 34 role", "Information potentially processed"],
          rows: [
            [`Supabase`, `Authentication, database, private storage, Edge Functions, account-backed application data`, `Account identifiers, email, sessions, messages, images, Closet, Dressing Rooms, K+, Watchlist, privacy/deletion records`],
            [`Google Gemini`, `Fashion AI, vision/language analysis, Elise, Scanner, Text Scan, Packing, Concierge`, `Relevant images, prompts, bounded conversation, authorized wardrobe/style/trip/weather/product context`],
            [`ElevenLabs`, `Elise text-to-speech`, `Eligible Elise response text, voice/stylist settings, bounded operational metadata`],
            [`OpenRouter / Meta Llama-family models where enabled`, `AI routing, fallback, specialization`, `Relevant AI prompt/context required for the routed operation`],
            [`AILabTools via RapidAPI`, `Virtual Try-On`, `Person image, garment image, garment category/slot, generation parameters`],
            [`RapidAPI / API gateways`, `External provider gateway`, `Commerce queries, product URLs, enrichment requests, VTO data depending on provider`],
            [`RevenueCat`, `K+ entitlement mirror and synchronization`, `App User ID/UUID, entitlement identifier, expiration, synchronization/platform metadata`],
            [`Open-Meteo`, `Weather/geocoding`, `Rounded location or user-entered destination and dates`],
            [`Expo / APNs / FCM`, `Push notification delivery`, `Push/device tokens, delivery information, notification payload`],
            [`Render`, `K Scan backend infrastructure`, `Authorized server requests and operational information`],
            [`Resend`, `Transactional email`, `Email address, email content, delivery metadata`],
            [`Apple / Google`, `Authentication, distribution, platform services`, `Authorized sign-in information, app-store/platform data, on-device platform capability data`],
            [`Product-search / retailer / marketplace providers`, `Retailer-neutral shopping, resale, sneaker, product enrichment`, `Fashion/product queries, URLs, retailer/product identifiers; generally not K Scan account identity`],
          ],
        },
      ],
    },
  ],
};
