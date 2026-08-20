import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Terms Summary",
  description:
    "Review a plain-language summary of key K Scan AI terms, beta limitations, user responsibilities, and third-party shopping disclosures.",
  alternates: {
    canonical: "https://kscan.app/legal/terms-summary",
  },
  openGraph: {
    title: "Terms Summary | K Scan AI",
    description:
      "Review a plain-language summary of key K Scan AI terms, beta limitations, user responsibilities, and third-party shopping disclosures.",
    url: "https://kscan.app/legal/terms-summary",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms Summary | K Scan AI",
    description:
      "Review a plain-language summary of key K Scan AI terms, beta limitations, user responsibilities, and third-party shopping disclosures.",
  },
};

const h2Class = "mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-600";
const h3Class = "mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]";
const bodyClass = "mt-6 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]";

export default function TermsSummaryPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Terms Summary
        </h1>

        <p className="mt-4 text-[13px] font-medium uppercase tracking-widest text-stone-400">
          Last updated: August 20, 2026
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI is a fashion-focused visual discovery, AI styling, wardrobe, collaboration, and
            shopping-assistance platform. Elise is the K Scan AI stylist. StyleChat is her conversational capability.
          </p>
          <p>
            This Terms Summary is a plain-language explanation of key terms only. It does not replace the full Terms
            and Conditions or Privacy Policy. If this Summary conflicts with either governing document, the full
            Terms and Conditions or Privacy Policy controls.
          </p>
        </div>

        <h2 className={h2Class}>1. What You Can Expect</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>AI-Powered Fashion Discovery</h3>
            <p>
              K Scan AI may help users scan and understand fashion items, identify garment characteristics, view
              product matches, preserve discoveries in Recent Scans, organize owned items in Closet, create Saved
              Looks, use Mirror Selfie, collaborate through Dressing Rooms, and receive retailer or marketplace
              links.
            </p>
            <p className="mt-4">
              K Scan AI may generate fashion analysis, product suggestions, visual matches, styling recommendations,
              StyleChat responses, spoken Elise responses, and related AI outputs.
            </p>
            <p className="mt-4">
              AI outputs may be incomplete, approximate, inaccurate, unavailable, outdated, or based on visually
              similar rather than identical products. K Scan AI does not guarantee brand identification, product
              identity, authenticity, fit, price, availability, retailer inventory, styling suitability, or other
              AI-generated information.
            </p>
            <p className="mt-4">
              AI outputs are not professional, legal, financial, medical, authentication, sizing, resale, or
              purchasing advice.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Elise and StyleChat</h3>
            <p>
              Elise may use fashion information that you choose or authorize, including selected scans, Closet
              items, Saved Looks, Dressing Room items, recent conversation context, saved preferences, and
              non-sensitive style signals.
            </p>
            <p className="mt-4">
              K Scan AI may derive non-sensitive fashion preferences from your activity, such as commonly selected
              brands, clothing categories, colors, general price ranges, or whether you indicated that previous
              styling advice was helpful or not your style.
            </p>
            <p className="mt-4">
              If K Scan AI offers optional self-disclosed styling context, that information is used as a styling
              preference. K Scan AI does not use photographs, your name, your voice, Closet contents, or scan
              history to infer that preference.
            </p>
            <p className="mt-4">
              Elise is designed for fashion assistance and is not designed to identify people or infer sensitive
              personal characteristics such as race, religion, health conditions, disability, sexual orientation,
              biometric identity, body measurements, or age from images or account activity.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Elise Spoken Responses</h3>
            <p>Elise may read eligible responses aloud using authorized text-to-speech services.</p>
            <p className="mt-4">
              The current voice experience is an output feature. K Scan AI does not currently use microphone
              recordings or user voice input to generate Elise Spoken Responses.
            </p>
            <p className="mt-4">
              Voice availability, provider availability, audio quality, stylist voices, and supported speech moments
              may change.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Your Content Stays Yours</h3>
            <p>
              You retain ownership of the photos, screenshots, prompts, messages, Saved Looks, Dressing Room
              content, and other content you submit.
            </p>
            <p className="mt-4">
              K Scan AI receives only the limited rights needed to host, process, analyze, display, transmit,
              moderate, secure, maintain, support, and improve the Service as described in the full Terms and
              Conditions and Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Image Privacy</h3>
            <p>
              On supported image-selection flows, K Scan AI may create a new image copy on your device before
              analysis by re-encoding the selected image and removing source metadata that is not needed for the
              requested feature.
            </p>
            <p className="mt-4">
              This preparation does not mean that every face, bystander, or license plate is automatically detected
              or obscured.
            </p>
            <p className="mt-4">
              The current release does not guarantee automatic face blurring or license-plate masking before every
              image is transmitted for analysis.
            </p>
            <p className="mt-4">
              K Scan AI is not designed for facial recognition, biometric identification, identity profiling, or
              surveillance.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>18+ Use Only</h3>
            <p>K Scan AI is intended only for users who are 18 years of age or older.</p>
            <p className="mt-4">
              Users under 18 may not use the Service. Users must not misrepresent their age or attempt to bypass age
              or eligibility controls.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>2. Privacy, Location, and Commercial Activity</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>Location</h3>
            <p>
              The current Android app may request optional approximate location while the app is in use to support
              weather-aware styling, local fashion context, or related functionality.
            </p>
            <p className="mt-4">
              The current Android release does not request precise or background location for this feature.
              Location context used for weather-aware styling may be rounded before being supplied to the styling
              service.
            </p>
            <p className="mt-4">
              Users may deny or revoke optional location access through their device settings. Doing so may reduce
              weather-aware or local styling context but does not prevent use of core scanning, Closet, Dressing
              Room, or Elise text features.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Commercial Data and Partner Activity</h3>
            <p>
              To support discovery and commerce features, K Scan AI may use or disclose limited non-sensitive
              information to authorized service providers, AI providers, retailer or marketplace providers,
              affiliate partners, analytics providers, attribution providers, and other service partners where
              permitted by law.
            </p>
            <p className="mt-4">
              K Scan AI may create, use, or commercialize certain non-sensitive commercial, analytics, preference,
              attribution, usage, aggregated, anonymized, or de-identified information where permitted by law and
              described in the Privacy Policy.
            </p>
            <p className="mt-4">
              K Scan AI does not sell raw uploaded scans, raw images, biometric templates, faceprints, voiceprints,
              government identification, payment-card information, or sensitive personal information for
              independent third-party use.
            </p>
            <p className="mt-4">
              The current mobile release does not use third-party advertising SDKs or Advertising ID for targeted
              advertising.
            </p>
            <p className="mt-4">
              K Scan AI may earn referral or affiliate compensation from qualifying retailer links where permitted.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>3. Shopping and Important Limits</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>Retailer-Neutral Shopping</h3>
            <p>
              K Scan AI is a fashion discovery and shopping-assistance service. It is not the retailer, marketplace,
              product authenticator, warehouse, seller, or merchant of record for third-party physical goods.
            </p>
            <p className="mt-4">
              Retailer purchases are completed directly with third-party retailers, marketplaces, or sellers.
            </p>
            <p className="mt-4">
              K Scan AI does not guarantee product authenticity, identity, pricing, availability, currency, sizing,
              quality, legality, shipping, taxes, fulfillment, returns, refunds, warranties, seller legitimacy, or
              customer support.
            </p>
            <p className="mt-4">
              Displaying a retailer, brand, product, or marketplace does not mean that K Scan AI has an official
              partnership, endorsement, sponsorship, or guaranteed relationship with that company unless K Scan AI
              expressly says so.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Digital Purchases</h3>
            <p>
              The current K Scan AI commerce experience primarily routes users to third-party sellers for physical
              goods.
            </p>
            <p className="mt-4">
              If K Scan AI later sells subscriptions, premium AI capabilities, account upgrades, or other digital
              features inside an app, Apple In-App Purchase, Google Play Billing, or another required platform
              payment method will be used where applicable.
            </p>
            <p className="mt-4">
              Additional purchase, renewal, cancellation, and refund terms may apply to those future digital
              features.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Third-Party Services</h3>
            <p>
              K Scan AI relies on outside providers for services such as authentication, cloud infrastructure,
              databases, AI processing, text-to-speech, weather context, product search, and retailer links.
            </p>
            <p className="mt-4">
              Those services may become unavailable, change, experience interruptions, or operate under their own
              terms and policies.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>4. Closet, Saved Looks, Dressing Rooms, and Sharing</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>Recent Scans and Closet</h3>
            <p>Recent Scans are intended to preserve items you discovered.</p>
            <p className="mt-4">Closet is intended to represent fashion items you identify as owned.</p>
            <p className="mt-4">
              Some Recent Scan information is stored locally on the device in the current release. Device-local
              information can be lost if you delete it, clear app data, uninstall the app, replace your device, or
              experience device failure.
            </p>
            <p className="mt-4">
              Closet and Saved Looks may preserve account-backed fashion information such as garment category,
              brand, color, material, pattern, silhouette, fit, style tags, occasion, dress code, and related
              styling context.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Dressing Rooms</h3>
            <p>
              Dressing Rooms allow users to organize, discuss, save, and share fashion-related items with authorized
              participants.
            </p>
            <p className="mt-4">
              A valid invitation or share link may allow another user to join a room. After successful redemption,
              membership may continue without requiring the original invitation URL.
            </p>
            <p className="mt-4">
              Room owners may manage membership, revoke access, remove content, or disable sharing where those
              controls are available.
            </p>
            <p className="mt-4">
              Content intentionally shared through a Dressing Room or active share link may be seen by authorized
              participants or by anyone who possesses the applicable public share link.
            </p>
            <p className="mt-4">
              Revoking future access cannot retrieve screenshots, downloads, or copies that another authorized
              recipient already made.
            </p>
            <p className="mt-4">
              Dressing Rooms are not represented as end-to-end encrypted or zero-knowledge storage.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>5. User Responsibilities and Safety</h2>

        <div className={bodyClass}>
          <p>Users are responsible for content they create, upload, save, share, or send through K Scan AI.</p>
          <p>
            Do not upload or share content that is unlawful, infringing, abusive, hateful, exploitative,
            threatening, fraudulent, deceptive, harassing, privacy-invasive, sexually exploitative, or otherwise
            harmful.
          </p>
          <p>
            Do not upload government IDs, financial records, medical information, confidential documents, or
            sensitive information about yourself or other people unless a feature expressly requires it, you have
            the legal right to provide it, and you intend it to be processed.
          </p>
          <p>
            Do not use K Scan AI for surveillance, stalking, harassment, fraud, exploitation, privacy invasion,
            model extraction, prompt attacks, unauthorized scraping, or attempts to bypass authentication,
            moderation, security, rate limits, or age controls.
          </p>

          <div>
            <h3 className={h3Class}>Reporting and Blocking</h3>
            <p>
              Users may report problematic Dressing Room messages or users through available in-app controls.
            </p>
            <p className="mt-4">
              Users may also block and unblock other users where supported. Current blocking protections are
              enforced across relevant collaboration access, messaging, share redemption, and item-contribution
              systems.
            </p>
            <p className="mt-4">
              AI-generated responses may also be reported through the in-app Report Response flow.
            </p>
            <p className="mt-4">
              K Scan AI may review, restrict, preserve, remove, moderate, or disable access to content, rooms,
              messages, AI outputs, or accounts when reasonably necessary to address Terms violations, safety
              concerns, platform requirements, legal obligations, or the rights of other users.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>6. Account Deletion</h2>

        <div className={bodyClass}>
          <p>
            Users may request account deletion through the Privacy controls in the app or through the K Scan AI
            account-deletion page.
          </p>
          <p>
            When K Scan AI accepts a deletion request, the account enters a deactivated or pending-deletion state
            and normal account access is restricted. An accepted request does not mean that permanent deletion has
            already finished.
          </p>
          <p>
            K Scan AI currently provides a limited restoration period that is generally 30 days after the deletion
            request is accepted, unless a different period is disclosed in the deletion process or required by law.
          </p>
          <p>
            If the account is not restored and no legal, security, fraud-prevention, dispute, or other applicable
            hold prevents processing, it becomes eligible for permanent deletion.
          </p>
          <p>
            The permanent-deletion process is designed to remove the authentication account and applicable
            account-linked information, including profile information, saved fashion data, scans, Closet
            information, Elise and StyleChat conversations, personalization information, user-owned stored images,
            and other user-bound application records where technically feasible and legally permitted.
          </p>

          <div>
            <h3 className={h3Class}>Shared Content After Deletion</h3>
            <p>
              Deleting an account does not necessarily require K Scan AI to destroy collaborative content that
              other users continue to rely on.
            </p>
            <p className="mt-4">
              For example, a shared Dressing Room may be transferred to another eligible participant, and content
              needed to maintain that surviving shared room may remain.
            </p>
            <p className="mt-4">
              K Scan AI also cannot retrieve content another authorized user already copied, downloaded, or
              screenshotted.
            </p>
            <p className="mt-4">
              Limited deidentified or pseudonymous records may remain where reasonably necessary for security,
              moderation, fraud prevention, dispute resolution, legal compliance, auditing, or operational
              integrity.
            </p>
            <p className="mt-4">
              Information stored only on your device, such as certain device-local Recent Scans or caches, may not
              be automatically removed by server-side account deletion.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>7. Your Rights and Legal Protections</h2>

        <div className={bodyClass}>
          <p>
            Depending on where you live, you may have rights related to access, correction, deletion, portability,
            consent withdrawal, or opt-out choices for certain uses of personal information.
          </p>
          <p>Your use of K Scan AI is also governed by the Privacy Policy.</p>
          <p>
            The full Terms and Conditions contain additional provisions covering warranties, limitations of
            liability, indemnification, intellectual property, acceptable use, suspension and termination,
            third-party services, app-store requirements, accessibility, dispute resolution, and governing law.
          </p>
          <p>
            K Scan AI&apos;s Terms are governed by Ohio law, subject to mandatory consumer protections that may
            apply in your jurisdiction.
          </p>
        </div>

        <div className="mt-14 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            For questions or to review the controlling legal terms, see our full{" "}
            <Link
              href="/legal/terms"
              className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/privacy"
              className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
              Privacy Policy
            </Link>
            , or contact us at{" "}
            <a
              href="mailto:kscanai.app@gmail.com"
              className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
              kscanai.app@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
