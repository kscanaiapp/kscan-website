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

const legalLinkClassName =
  "rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2";

export default function TermsSummaryPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Terms Summary
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI is a fashion-focused visual discovery, AI styling, wardrobe, collaboration, and
            shopping-assistance platform. Elise is K Scan AI&apos;s AI stylist, and StyleChat is her conversational
            capability.
          </p>
          <p>
            This Terms Summary explains key parts of our Terms in plain language. It is only a summary. The full
            Terms and Conditions and Privacy Policy remain the controlling documents.
          </p>
        </div>

        <h2 className={h2Class}>1. What You Can Expect</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>AI-Powered Fashion Intelligence</h3>
            <p>
              K Scan AI may provide fashion identification, product discovery, styling recommendations, Closet
              intelligence, Signature Style personalization, Packing Intelligence, Wardrobe Concierge, Watchlist
              monitoring, Virtual Try-On, Elise responses, and other AI-assisted features.
            </p>
            <p className="mt-4">
              AI-generated results and recommendations may be incomplete, approximate, inaccurate, unavailable,
              outdated, or based on similar rather than exact products.
            </p>
            <p className="mt-4">
              K Scan AI does not provide authentication, appraisal, sizing, legal, medical, financial, travel,
              resale, or purchasing advice. You remain responsible for evaluating recommendations and making your
              own decisions.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Your Content Stays Yours</h3>
            <p>
              You retain ownership of the original photos, images, messages, prompts, wardrobe content, Dressing
              Room content, and other materials you submit, subject to any rights you already have in that
              material.
            </p>
            <p className="mt-4">
              You give K Scan AI the limited rights needed to host, store, process, transform, transmit to
              authorized service providers, display to authorized users, secure, moderate, and otherwise operate
              the features you request.
            </p>
            <p className="mt-4">
              You must have the legal right to upload the content you submit, including images containing another
              recognizable person.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Fashion, Not Identity</h3>
            <p>K Scan AI is designed to understand fashion, not identify people.</p>
            <p className="mt-4">
              K Scan AI is not intended for facial recognition, biometric identification, faceprints, voiceprints,
              or identifying or authenticating a person based on biometric characteristics.
            </p>
            <p className="mt-4">
              Some features, including Mirror Selfie and Virtual Try-On, may process images containing recognizable
              people. Virtual Try-On may transmit a person image and garment image to an authorized external AI
              image-processing provider to generate the requested visualization.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>18+ Use Only</h3>
            <p>
              Users must be 18 years of age or older. K Scan AI is not directed to children or minors, and users
              under 18 should not use the Service.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>2. K+, Personalization &amp; AI Features</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>Closet and Signature Style</h3>
            <p>
              Closet is K Scan AI&apos;s authoritative record of clothing you identify as owned. Saved products,
              scans, inspiration, and retailer results do not automatically mean you own those items.
            </p>
            <p className="mt-4">
              K Scan AI may use authorized Closet information and other fashion activity to develop Signature
              Style, an inferred fashion-preference profile that can help personalize recommendations.
            </p>
            <p className="mt-4">
              Signature Style is intended to describe fashion preferences and wardrobe patterns. It is not intended
              to create biometric identities, medical profiles, protected-trait profiles, or psychological
              diagnoses.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Voice Scan and Elise</h3>
            <p>
              Voice Scan lets you speak a fashion request. Under the supported architecture, speech recognition
              occurs on your device and the resulting transcript can be reviewed or edited before being processed
              as a Text Scan request.
            </p>
            <p className="mt-4">
              Elise Spoken Responses are separate from Voice Scan. Elise response text may be sent to an authorized
              text-to-speech provider to generate spoken audio.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Packing and Wardrobe Concierge</h3>
            <p>
              Packing Intelligence and Wardrobe Concierge may use authorized information from your Closet,
              Signature Style, weather context, trip information, and other relevant fashion context to provide
              recommendations.
            </p>
            <p className="mt-4">
              Packing recommendations are suggestions only. K Scan does not guarantee weather conditions, travel
              circumstances, completeness of a packing list, suitability of an item, or that any recommendation
              will satisfy every need or condition of your trip.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>K+ Early Access</h3>
            <p>K+ Early Access is currently offered as a complimentary $0.00 subscription/entitlement.</p>
            <p className="mt-4">
              No payment or credit card is currently required, and K+ Early Access does not create an automatic
              recurring charge.
            </p>
            <p className="mt-4">
              K Scan AI may use RevenueCat and K Scan&apos;s own systems to manage and measure entitlement status,
              expiration, access, and related subscription-lifecycle information.
            </p>
            <p className="mt-4">
              K Scan may change K+ features, eligibility, availability, or Early Access terms. Any future paid K+
              offering will be separately disclosed and will use Apple In-App Purchase, Google Play Billing, or
              other required platform billing methods where applicable.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>3. Shopping, Watchlist &amp; Virtual Try-On</h2>

        <div className={bodyClass}>
          <div>
            <h3 className={h3Class}>Third-Party Retailers</h3>
            <p>K Scan AI helps users discover products from independent retailers and marketplaces.</p>
            <p className="mt-4">
              Purchases are completed with the retailer or marketplace, not K Scan AI. The third party controls
              final pricing, availability, payment, taxes, shipping, returns, refunds, warranties, authenticity
              guarantees, fulfillment, and customer service.
            </p>
            <p className="mt-4">
              The appearance of a brand, retailer, marketplace, or product in K Scan does not imply endorsement,
              sponsorship, affiliation, or partnership unless K Scan expressly states otherwise.
            </p>
            <p className="mt-4">
              K Scan may receive affiliate, referral, attribution, or similar commercial compensation from some
              outbound links or transactions.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Prices and Availability</h3>
            <p>Product information can change at any time.</p>
            <p className="mt-4">
              K Scan AI does not guarantee product identity, authenticity, price, availability, inventory, sizing,
              quality, seller legitimacy, or continued availability of a retailer or marketplace listing.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Smart Watchlist</h3>
            <p>
              Watchlist can monitor supported product information such as observed price, retailer listing, price
              targets, and availability-related signals.
            </p>
            <p className="mt-4">
              K Scan AI does not guarantee continuous monitoring, retailer inventory, price accuracy, price
              history, notification delivery, or that a product will remain available when an alert is received.
            </p>
            <p className="mt-4">
              A Watchlist notification is informational only. It is not a guaranteed offer, reservation, promise of
              availability, or commitment by a retailer to sell an item at a particular price.
            </p>
          </div>

          <div>
            <h3 className={h3Class}>Virtual Try-On</h3>
            <p>
              Virtual Try-On produces an AI-generated approximation of how an eligible garment might appear on a
              person.
            </p>
            <p className="mt-4">
              Virtual Try-On does not guarantee actual fit, sizing, body measurements, garment dimensions, drape,
              fabric behavior, color accuracy, authenticity, or real-world appearance.
            </p>
            <p className="mt-4">
              Use Virtual Try-On as a visualization tool, not as a substitute for retailer sizing information or
              personal judgment.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>4. Your Responsibilities &amp; Shared Content</h2>

        <div className={bodyClass}>
          <p>You are responsible for the content you upload, submit, save, share, or send through K Scan AI.</p>
          <p>
            Do not use K Scan AI to upload, distribute, or share content that is unlawful, abusive, threatening,
            harassing, hateful, exploitative, privacy-invasive, fraudulent, deceptive, infringing, sexually abusive,
            non-consensual, child-safety-violating, or otherwise prohibited by law, platform policy, or the full
            Terms.
          </p>

          <div>
            <h3 className={h3Class}>Dressing Rooms</h3>
            <p>
              Dressing Rooms are collaborative spaces. Content you deliberately share with authorized participants
              may be seen, copied, or retained by those participants.
            </p>
            <p className="mt-4">
              K Scan may provide tools to report users or content, block users, revoke sharing, restrict access,
              and enforce room membership.
            </p>
            <p className="mt-4">
              K Scan may review, restrict, preserve, remove, or disable access to content, rooms, messages, shares,
              or accounts where reasonably necessary for safety, abuse prevention, platform compliance, legal
              compliance, support, or enforcement.
            </p>
            <p className="mt-4">
              K Scan may suspend or terminate accounts that violate the Terms, applicable law, platform policies,
              or safety requirements.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>5. Privacy, Accounts &amp; Legal Protections</h2>

        <div className={bodyClass}>
          <p>Your use of K Scan AI is also governed by the Privacy Policy.</p>
          <p>
            Depending on the features you choose, K Scan and authorized service providers may process images,
            prompts, Closet information, Signature Style information, Voice Scan transcripts, Elise conversations,
            Dressing Room content, trip information, Watchlist data, entitlement information, notification
            information, approximate location, and other data needed to provide the Service.
          </p>
          <p>
            Account deletion is a staged process and may include a limited restoration period before permanent
            deletion. Certain shared content, security records, legal records, deletion records, or information
            independently retained by another authorized user or third party may remain where described in the
            Privacy Policy and permitted by law.
          </p>
          <p>
            K Scan may modify, suspend, replace, limit, or discontinue features, AI providers, commerce providers,
            K+ functionality, Watchlist monitoring, Virtual Try-On, or other parts of the Service.
          </p>
          <p>
            The full Terms and Conditions govern warranty disclaimers, limitations of liability, indemnification,
            account enforcement, dispute resolution, governing law, intellectual property, service changes, and
            other legal rights and responsibilities.
          </p>
        </div>

        <div className="mt-14 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            For questions or to obtain the full{" "}
            <Link href="/legal/terms" className={legalLinkClassName}>
              Terms and Conditions
            </Link>
            , contact:
          </p>
          <p>
            <a href="mailto:kscanai.app@gmail.com" className={legalLinkClassName}>
              kscanai.app@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
