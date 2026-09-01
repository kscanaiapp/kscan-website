import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Summary | K Scan AI",
  },
  description:
    "Review K Scan AI privacy information, including uploads, account data, AI-assisted results, and privacy request options.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Summary | K Scan AI",
    description:
      "Review K Scan AI privacy information, including uploads, account data, AI-assisted results, and privacy request options.",
    url: "https://kscan.app/privacy",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Summary | K Scan AI",
    description:
      "Review K Scan AI privacy information, including uploads, account data, AI-assisted results, and privacy request options.",
  },
};

const linkClassName =
  "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

const legalLinkClassName =
  "rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2";

const h2Class = "text-[15px] font-semibold text-stone-700 md:text-[16px]";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Privacy Summary
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>K Scan AI is intended for users 18 and older and is not directed to children or minors.</p>
          <p>
            K Scan AI is a fashion-focused visual discovery, AI styling, wardrobe, collaboration, and
            shopping-assistance service. Depending on the features you use, K Scan may process images, fashion
            information, account data, Closet content, Elise and StyleChat messages, Voice Scan transcripts,
            Dressing Room content, trip information, Watchlist activity, subscription/entitlement information,
            approximate location, and related device or service data.
          </p>
          <p>This is a plain-language summary. The full Privacy Policy is the controlling document.</p>

          <section aria-labelledby="images-ai-privacy" className="space-y-4">
            <h2 id="images-ai-privacy" className={h2Class}>
              1. Images, AI &amp; Visual Privacy
            </h2>
            <p>
              K Scan is not designed for surveillance, facial recognition, biometric identification, or identifying
              people. We do not create faceprints, biometric identity profiles, or voiceprints.
            </p>
            <p>
              Images you choose to scan, save, share, use with Elise, add to Closet, or submit to Virtual Try-On may
              be processed locally and/or securely transmitted to K Scan and authorized service providers, depending
              on the feature.
            </p>
            <p>
              K Scan uses local processing and data minimization where practical, including local image preparation
              and privacy safeguards on supported flows. We do not promise that every face, bystander, license
              plate, or identifying element is automatically removed from every image before processing.
            </p>
            <p>
              Virtual Try-On is different from ordinary fashion scanning: when you use it, a recognizable person
              image and garment image may be sent to an authorized external AI image-processing provider to
              generate the requested visualization.
            </p>
          </section>

          <section aria-labelledby="elise-voice-personalization" className="space-y-4">
            <h2 id="elise-voice-personalization" className={h2Class}>
              2. Elise, Voice Scan &amp; Personalization
            </h2>
            <p>
              Elise is K Scan&rsquo;s AI stylist. When you use Elise, K Scan may process your messages, recent
              conversation context, selected fashion items, Closet information, Signature Style, Dressing Room
              context, weather information, Packing information, and other task-relevant fashion context needed to
              answer your request.
            </p>
            <p>
              Signature Style is an inferred fashion-preference profile based on authorized fashion information such
              as your Closet and relevant styling activity. It may reflect preferences such as colors, brands,
              categories, materials, silhouettes, and other wardrobe patterns. It is used for fashion
              personalization, not biometric identification or sensitive-personality profiling.
            </p>
            <p>
              Voice Scan uses your microphone only when you choose to speak a fashion request. Under the supported
              Build 34 architecture, speech recognition occurs on-device and raw Voice Scan audio is not
              intentionally uploaded to K Scan, Gemini, ElevenLabs, or a separate speech-to-text provider. After you
              review or edit the transcript, the text is processed like a Text Scan request.
            </p>
            <p>
              Elise Spoken Responses are separate from Voice Scan. Eligible Elise response text may be sent to
              ElevenLabs to generate spoken audio.
            </p>
          </section>

          <section aria-labelledby="closet-packing-watchlist" className="space-y-4">
            <h2 id="closet-packing-watchlist" className={h2Class}>
              3. Closet, Packing, Watchlist &amp; K+
            </h2>
            <p>
              Closet can store account-backed wardrobe items, images, fashion attributes, ownership information,
              synchronization state, and derived wardrobe information so your wardrobe can be restored across
              devices and used for personalized features.
            </p>
            <p>
              Packing Intelligence and Wardrobe Concierge may use a bounded set of relevant Closet, Signature Style,
              weather, trip, and fashion information to generate recommendations. If you enter a travel destination,
              K Scan may send that destination and relevant dates or rounded coordinates to a weather provider to
              obtain forecast information.
            </p>
            <p>
              Smart Watchlist may store products you choose to monitor, retailer or marketplace information, product
              URLs, observed prices, price targets, monitoring history, and alert preferences.
            </p>
            <p>
              K+ Early Access is currently a complimentary $0.00 subscription/entitlement. K Scan uses its own
              systems and RevenueCat to manage and measure K+ entitlement status. K+ Early Access does not currently
              require payment or a credit card and does not create an automatic recurring charge.
            </p>
          </section>

          <section aria-labelledby="location-notifications-commerce" className="space-y-4">
            <h2 id="location-notifications-commerce" className={h2Class}>
              4. Location, Notifications &amp; Commerce
            </h2>
            <p>
              K Scan may request optional approximate foreground location for weather-aware styling. Core K Scan
              functionality remains available if you deny location access.
            </p>
            <p>
              K Scan may also process device push tokens and notification preferences when you choose to receive
              alerts such as Watchlist notifications. Notification permission is optional and can be changed through
              your device settings.
            </p>
            <p>
              K Scan helps users discover products from independent retailers and marketplaces. Retailer links lead
              to third-party services with their own privacy policies and terms.
            </p>
            <p>
              K Scan may receive affiliate, referral, attribution, or similar commercial compensation from some
              outbound commerce activity. That compensation does not determine objective fashion identification.
            </p>
          </section>

          <section aria-labelledby="service-providers-sharing" className="space-y-4">
            <h2 id="service-providers-sharing" className={h2Class}>
              5. Service Providers &amp; Data Sharing
            </h2>
            <p>
              K Scan may use authorized providers for cloud hosting, authentication, AI processing, speech
              generation, virtual try-on, product search, weather, notifications, subscription/entitlement
              management, email delivery, diagnostics, security, and app operations.
            </p>
            <p>
              Material providers may include services such as Supabase, Google Gemini, ElevenLabs, RevenueCat,
              Open-Meteo, Expo/APNs/FCM, OpenRouter or other authorized AI-routing providers where enabled, and
              AILabTools/RapidAPI for Virtual Try-On.
            </p>
            <p>K Scan limits provider requests to information reasonably needed for the feature being used.</p>
            <p>
              K Scan does not sell raw scans, uploaded images, Elise or StyleChat conversations, private
              user-generated content, biometric identifiers, voiceprints, payment-card information, or sensitive
              personal information to third-party data buyers for independent use.
            </p>
            <p>
              Aggregated, anonymized, or de-identified fashion, product, commerce, trend, and demand information may
              be used or commercialized where it does not reasonably identify you.
            </p>
          </section>

          <section aria-labelledby="rights-retention-deletion" className="space-y-4">
            <h2 id="rights-retention-deletion" className={h2Class}>
              6. Your Rights, Retention &amp; Deletion
            </h2>
            <p>
              K Scan retains information only as long as reasonably necessary for the purposes described in the full
              Privacy Policy, subject to legal, security, fraud-prevention, backup, shared-content, and operational
              requirements.
            </p>
            <p>
              Account deletion is a staged process. When a deletion request is accepted, the account may be
              deactivated and placed into a limited restoration period before becoming eligible for permanent
              deletion.
            </p>
            <p>
              Permanent deletion is designed to remove applicable account-linked cloud data, including Closet
              records, K+ records, Elise account data, Watchlist information, user-owned stored media, and other
              account-backed information, subject to lawful retention and shared-content exceptions.
            </p>
            <p>
              Some device-local records may remain on a disconnected device until you delete them, clear app data,
              or uninstall the app.
            </p>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, export, restrict, object
              to, or opt out of certain processing.
            </p>
            <p>Where required by law, K Scan honors Global Privacy Control signals.</p>
          </section>

          <section aria-labelledby="contact" className="space-y-4">
            <h2 id="contact" className={h2Class}>
              7. Contact
            </h2>
            <p>
              Full Privacy Policy:{" "}
              <Link href="/legal/privacy" className={legalLinkClassName}>
                kscan.app/legal/privacy
              </Link>
            </p>
            <p>
              Account Deletion:{" "}
              <Link href="/legal/delete-account" className={linkClassName}>
                kscan.app/legal/delete-account
              </Link>
            </p>
            <p>
              Privacy Requests:{" "}
              <a href="mailto:kscanai.app@gmail.com" className={linkClassName}>
                kscanai.app@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
