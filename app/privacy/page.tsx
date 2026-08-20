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
const h3Class = "font-semibold text-stone-700";
const bulletClass = "list-disc space-y-1 pl-5";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Privacy Summary
        </h1>

        <p className="mt-4 text-[13px] font-medium uppercase tracking-widest text-stone-400">
          Last updated: August 20, 2026
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI is intended for users 18 and older and is not directed to children or minors. Users under 18
            should not use the Service.
          </p>
          <p>
            K Scan AI is a fashion-focused visual discovery, AI styling, wardrobe, collaboration, and
            shopping-assistance service. Depending on the feature you use, K Scan AI may process selected images,
            fashion information, Elise and StyleChat messages, saved items, style preferences, Dressing Room
            content, shopping interactions, approximate weather location, diagnostics, and related account
            information.
          </p>
          <p>
            This Privacy Summary explains our current practices in plain language. The full Privacy Policy remains
            the controlling document.
          </p>

          <section aria-labelledby="data-protection" className="space-y-4">
            <h2 id="data-protection" className={h2Class}>
              1. Data Protection &amp; Visual Privacy
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className={h3Class}>No Facial Recognition</h3>
                <p>
                  K Scan AI is not designed for surveillance, facial recognition, biometric identification, or
                  identifying people. K Scan AI does not create biometric templates, faceprints, face geometry, or
                  identity profiles.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Local Image Preparation</h3>
                <p>
                  On supported photo-library or gallery upload flows, K Scan AI may prepare a new image copy on your
                  device before analysis. This may include resizing or re-encoding the image and removing source
                  metadata that is not needed for the requested fashion feature.
                </p>
                <p className="mt-3">
                  This local preparation helps avoid sending unnecessary source-photo metadata, but it does not mean
                  that faces, bystanders, license plates, or other identifying visual content have been removed.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Face, Bystander &amp; License-Plate Protection</h3>
                <p>
                  The current verified mobile release does not have active automatic local face detection, face
                  blurring, bystander masking, license-plate detection, or license-plate masking on the connected
                  upload path.
                </p>
                <p className="mt-3">
                  If a submitted image contains a face, bystander, license plate, private document, or other
                  identifying content, that content may be included in the image sent for remote analysis.
                </p>
                <p className="mt-3">
                  Users should submit clothing-focused images and avoid unnecessary sensitive or private content.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Cloud and AI Processing</h3>
                <p>
                  Images, Elise messages, fashion context, and related information may be transmitted through
                  encrypted connections and processed by K Scan AI cloud systems and authorized AI or infrastructure
                  providers to provide scanning, AI styling, product matching, shopping assistance, support,
                  security, safety, and service functionality.
                </p>
                <p className="mt-3">The current Service is not device-only or cloud-free.</p>
              </div>
              <div>
                <h3 className={h3Class}>Mirror Selfie</h3>
                <p>
                  Mirror Selfie may use an image and pose or body-positioning information when you choose to use
                  that feature.
                </p>
                <p className="mt-3">
                  K Scan AI does not use Mirror Selfie for facial recognition, identity verification, or biometric
                  identification.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="elise-personalization" className="space-y-4">
            <h2 id="elise-personalization" className={h2Class}>
              2. Elise AI Stylist &amp; Personalization
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className={h3Class}>StyleChat Messages</h3>
                <p>
                  When you use Elise or her StyleChat conversational capability, K Scan AI may process and retain
                  your messages, prompts, selected fashion context, and related session information so the
                  conversation can operate and, where supported, be reopened later.
                </p>
                <p className="mt-3">
                  When generating a new response, Elise may receive a limited recent portion of the conversation
                  rather than your entire lifetime StyleChat archive.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Fashion Context</h3>
                <p>
                  When you intentionally reference or attach authorized K Scan AI content, Elise may receive fashion
                  information such as:
                </p>
                <ul className={`mt-3 ${bulletClass}`}>
                  <li>garment type</li>
                  <li>brand</li>
                  <li>color</li>
                  <li>material</li>
                  <li>pattern</li>
                  <li>silhouette</li>
                  <li>fit</li>
                  <li>visible construction details</li>
                  <li>identification confidence</li>
                  <li>whether an item is owned, scanned, saved, or shared</li>
                </ul>
                <p className="mt-3">
                  Elise may use authorized information from your Closet, Style Library, Saved Looks, or Dressing
                  Rooms when you intentionally use those items as styling context.
                </p>
                <p className="mt-3">
                  K Scan AI does not describe Elise as automatically reading every Dressing Room message or every
                  piece of account content.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Signature Style &amp; Fashion Preferences</h3>
                <p>K Scan AI may personalize Elise using non-sensitive fashion preferences.</p>
                <p className="mt-3">These may include:</p>
                <ul className={`mt-3 ${bulletClass}`}>
                  <li>Helpful or Not My Style feedback</li>
                  <li>commonly selected brands</li>
                  <li>clothing categories</li>
                  <li>colors</li>
                  <li>general price-range preferences</li>
                  <li>saved or owned fashion items</li>
                  <li>other authorized fashion interactions</li>
                </ul>
                <p className="mt-3">
                  Some detailed feedback or preference controls may remain on your device, while compact summaries
                  or account-backed fashion preference signals may be used to personalize Elise.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Optional Styling Context</h3>
                <p>Where available, you may voluntarily choose styling context such as:</p>
                <ul className={`mt-3 ${bulletClass}`}>
                  <li>man</li>
                  <li>woman</li>
                  <li>prefer not to say</li>
                </ul>
                <p className="mt-3">K Scan AI uses this only as a styling preference.</p>
                <p className="mt-3">
                  K Scan AI does not infer this preference from your photographs, name, voice, Closet, scans, or
                  Dressing Rooms.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Sensitive Information</h3>
                <p>
                  Elise is designed not to identify people or infer sensitive personal characteristics such as race,
                  religion, health conditions, disability, sexual orientation, age, body measurements, or biometric
                  identity from your images, wardrobe information, account activity, name, or voice.
                </p>
                <p className="mt-3">
                  Because StyleChat allows free-text messages, you can voluntarily type sensitive information.
                  Please avoid providing sensitive information that is not necessary for styling.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="location" className="space-y-4">
            <h2 id="location" className={h2Class}>
              3. Approximate Location &amp; Weather-Aware Styling
            </h2>
            <p>K Scan AI may request approximate foreground location for optional weather-aware styling.</p>
            <p>The current Android release does not request precise or background location for this feature.</p>
            <p>
              Before location context is supplied to the styling service, the current implementation rounds the
              coordinates so Elise receives an approximate area rather than raw precise GPS coordinates.
            </p>
            <p>
              K Scan AI does not store raw precise GPS coordinates for the current weather-aware styling feature.
            </p>
            <p>
              If you deny location permission, core scanning, saving, Dressing Rooms, and Elise text functionality
              remain available, although weather-aware styling may be limited.
            </p>
            <p>
              Approximate location may also be inferred from an IP address for localization, security, fraud
              prevention, or service delivery.
            </p>
            <p>
              K Scan AI does not use location for continuous tracking or to track users across third-party apps and
              websites for targeted advertising.
            </p>
          </section>

          <section aria-labelledby="voice" className="space-y-4">
            <h2 id="voice" className={h2Class}>
              4. Voice &amp; Spoken Responses
            </h2>
            <p>Elise may provide spoken responses using text-to-speech.</p>
            <p>
              When spoken responses are enabled, eligible Elise response text and limited session information may be
              sent to an authorized text-to-speech provider to generate audio.
            </p>
            <p>K Scan AI does not currently use microphone recording for Elise.</p>
            <p>
              The current Android app does not request microphone permission, does not collect raw microphone audio,
              and does not create voiceprints or biometric voice identifiers.
            </p>
          </section>

          <section aria-labelledby="saved-content" className="space-y-4">
            <h2 id="saved-content" className={h2Class}>
              5. Recent Scans, Closet &amp; Saved Content
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className={h3Class}>Recent Scans</h3>
                <p>Recent Scans and their saved shopping snapshots are stored on your device by default.</p>
                <p className="mt-3">
                  Cloud Saved Scan synchronization is disabled by default in the current release.
                </p>
                <p className="mt-3">
                  Device-local records may be removed if you delete them, clear app data, or uninstall the app.
                </p>
                <p className="mt-3">
                  Deleting your cloud account does not necessarily erase local data that remains on an offline or
                  disconnected device.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Account-Backed Content</h3>
                <p>
                  Closet, Style Library, inspiration uploads, Saved Looks, Dressing Rooms, Shared with Me
                  memberships, and related account-backed content may be stored in private cloud systems when the
                  applicable feature uses cloud storage.
                </p>
                <p className="mt-3">Protected images may be displayed using signed or time-limited access URLs.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="dressing-rooms-safety" className="space-y-4">
            <h2 id="dressing-rooms-safety" className={h2Class}>
              6. Dressing Rooms, Sharing &amp; Safety
            </h2>
            <p>
              Dressing Rooms may contain account-backed items, images, participants, messages, reactions,
              invitations, and related information.
            </p>
            <p>Content you intentionally share may be visible to authorized room participants.</p>
            <p>
              If a room owner enables a share link or public preview, selected room content may be visible to
              people who possess that active link.
            </p>
            <p>K Scan AI provides safety controls that may include:</p>
            <ul className={bulletClass}>
              <li>Report Message</li>
              <li>Report User</li>
              <li>Block</li>
              <li>Unblock</li>
              <li>share revocation</li>
            </ul>
            <p>Blocking is enforced across relevant backend authorization surfaces in the current release.</p>
            <p>Users may also report problematic AI-generated responses within the app.</p>
            <p>
              AI-response reports are designed to store structured moderation information and limited identifiers or
              context rather than the raw AI response, uploaded photo, scan media, or raw image content.
            </p>
          </section>

          <section aria-labelledby="commercial-data" className="space-y-4">
            <h2 id="commercial-data" className={h2Class}>
              7. Commercial Data &amp; Partnership Transparency
            </h2>
            <p>
              K Scan AI may process product signals, search terms, fashion attributes, retailer or marketplace
              information, product URLs, saved items, and outbound shopping interactions to provide retailer-neutral
              commerce results.
            </p>
            <p>
              K Scan AI does not sell raw scans, uploaded images, Elise or StyleChat messages, private
              user-generated content, biometric identifiers, face templates, voiceprints, raw precise GPS
              coordinates, payment-card data, government identification, or sensitive personal information to
              third-party data buyers for independent use.
            </p>
            <p>
              Limited non-sensitive commerce, attribution, analytics, preference, product-interaction, or
              operational information may be used or disclosed where permitted by law.
            </p>
            <p>
              Some disclosures may be considered a &ldquo;sale,&rdquo; &ldquo;sharing,&rdquo; targeted advertising,
              or similar regulated processing under broad privacy laws. Where required, K Scan AI provides
              applicable notice, consent, or opt-out rights.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className={h3Class}>Aggregated &amp; De-identified Insights</h3>
                <p>
                  K Scan AI may create, use, disclose, license, or commercialize aggregated, anonymized, or
                  de-identified fashion, product, commerce, trend, and demand insights where the information does
                  not reasonably identify an individual.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Advertising &amp; Tracking</h3>
                <p>
                  K Scan AI does not currently use third-party advertising SDKs or collect Advertising ID for
                  targeted advertising.
                </p>
                <p className="mt-3">
                  K Scan AI does not currently track users across third-party apps or websites for targeted
                  advertising.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="service-providers" className="space-y-4">
            <h2 id="service-providers" className={h2Class}>
              8. Service Providers
            </h2>
            <p>K Scan AI may use providers that help operate the Service, including providers for:</p>
            <ul className={bulletClass}>
              <li>cloud hosting</li>
              <li>storage</li>
              <li>authentication</li>
              <li>AI processing</li>
              <li>text-to-speech</li>
              <li>weather or localization support</li>
              <li>product search</li>
              <li>diagnostics</li>
              <li>security</li>
              <li>fraud prevention</li>
              <li>email</li>
              <li>customer support</li>
              <li>account deletion</li>
              <li>app operations</li>
            </ul>
            <p>
              Provider-specific logging, retention, safety review, quality-improvement, backup, or deletion terms
              may apply.
            </p>
            <p>
              K Scan AI does not make a blanket promise that every provider uses zero retention, no training, or no
              human review unless that production configuration and provider policy have been specifically verified
              and disclosed.
            </p>
          </section>

          <section aria-labelledby="data-retention" className="space-y-4">
            <h2 id="data-retention" className={h2Class}>
              9. Data Retention
            </h2>
            <p>
              K Scan AI keeps information only as long as reasonably necessary for the purposes described in the
              full Privacy Policy, unless a longer period is required or permitted by law.
            </p>
            <p>Different information has different lifecycles.</p>
            <p>For example:</p>
            <ul className={bulletClass}>
              <li>Recent Scans may remain locally on your device.</li>
              <li>Elise and StyleChat history may be retained to operate and reopen conversations.</li>
              <li>
                account-backed Closet, Style Library, Saved Look, and Dressing Room information may remain while
                your account or the relevant content is active.
              </li>
              <li>
                operational and moderation records may be retained for security, safety, troubleshooting, fraud
                prevention, disputes, or legal requirements.
              </li>
              <li>aggregated or de-identified information may be retained where it no longer reasonably identifies you.</li>
            </ul>
            <p>
              K Scan AI does not currently publish a fixed lifetime retention period for every StyleChat message,
              provider log, backup, or temporary image flow.
            </p>
          </section>

          <section aria-labelledby="account-deletion" className="space-y-4">
            <h2 id="account-deletion" className={h2Class}>
              10. Account Deletion &amp; Recovery
            </h2>
            <p>Account deletion is a staged process, not an instant erase button.</p>
            <p>When K Scan AI accepts a deletion request:</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>the account is deactivated;</li>
              <li>normal authenticated access is restricted;</li>
              <li>existing sessions may be revoked;</li>
              <li>the account enters a limited restoration period of approximately 30 days.</li>
            </ol>
            <p>
              During the restoration period, account information is intentionally retained so the account can be
              restored if the request was accidental, unauthorized, or you change your mind.
            </p>
            <p>
              If the account is not restored before the applicable deadline and no legal, security, ownership, or
              technical hold applies, it becomes eligible for permanent deletion.
            </p>
            <p>
              Permanent deletion is designed to remove the K Scan AI authentication account and applicable
              account-linked personal information, including profile information, account-backed saved fashion
              content, Elise or StyleChat conversations, styling preferences, wardrobe information, and user-owned
              stored images.
            </p>
            <p>
              K Scan AI does not treat deletion as complete merely because deletion processing has started. The
              deletion process is intended to record the account as permanently purged only after applicable
              verification checks are completed.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className={h3Class}>Shared Dressing Rooms</h3>
                <p>
                  Deleting your account does not necessarily destroy a Dressing Room that other authorized users are
                  actively using.
                </p>
                <p className="mt-3">
                  A shared Dressing Room may be transferred to another eligible participant, and content required to
                  preserve that continuing shared experience may remain.
                </p>
                <p className="mt-3">
                  Your personal account relationship may be removed, detached, anonymized, or replaced with a
                  neutral deleted-user reference where appropriate.
                </p>
              </div>
              <div>
                <h3 className={h3Class}>Records That May Remain</h3>
                <p>Limited records may remain where reasonably necessary for:</p>
                <ul className={`mt-3 ${bulletClass}`}>
                  <li>security</li>
                  <li>fraud prevention</li>
                  <li>moderation</li>
                  <li>legal compliance</li>
                  <li>disputes</li>
                  <li>accounting</li>
                  <li>auditing</li>
                  <li>deletion verification</li>
                  <li>protecting other users</li>
                </ul>
                <p className="mt-3">
                  K Scan AI may retain a limited de-identified or pseudonymous deletion record to document that the
                  deletion lifecycle occurred.
                </p>
                <p className="mt-3">
                  Account deletion also does not automatically erase information stored solely on a disconnected
                  device or information independently controlled by retailers, app stores, payment providers, email
                  providers, or other third parties.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="rights-controls" className="space-y-4">
            <h2 id="rights-controls" className={h2Class}>
              11. Your Rights &amp; Controls
            </h2>
            <p>Depending on where you live, you may have rights to:</p>
            <ul className={bulletClass}>
              <li>access your personal information</li>
              <li>request correction</li>
              <li>request deletion</li>
              <li>request export or portability</li>
              <li>restrict or object to certain processing</li>
              <li>withdraw consent where applicable</li>
              <li>opt out of regulated sale or sharing where required by law</li>
            </ul>
            <p>
              You may also control supported permissions and features through the app or device settings, including
              camera, selected-photo access, approximate location, spoken responses, sharing, and available styling
              preferences.
            </p>
            <p>Where required by law, K Scan AI honors Global Privacy Control signals.</p>
          </section>

          <section aria-labelledby="contact" className="space-y-4">
            <h2 id="contact" className={h2Class}>
              12. Contact
            </h2>
            <p>
              The full{" "}
              <Link href="/legal/privacy" className={legalLinkClassName}>
                Privacy Policy
              </Link>{" "}
              is available at{" "}
              <Link href="/legal/privacy" className={linkClassName}>
                kscan.app/legal/privacy
              </Link>
              .
            </p>
            <p>
              Account deletion information is available at{" "}
              <Link href="/legal/delete-account" className={linkClassName}>
                kscan.app/legal/delete-account
              </Link>
              .
            </p>
            <p>For privacy questions or requests:</p>
            <p>
              K Scan AI
              <br />
              Email:{" "}
              <a href="mailto:kscanai.app@gmail.com" className={linkClassName}>
                kscanai.app@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href="https://kscan.app" className={linkClassName}>
                https://kscan.app
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
