import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Refund and Cancellation Policy, transcribed verbatim from the
// authoritative source document.
// Effective Date: September 12, 2026 | Last Updated: September 12, 2026

export const refundPolicy: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "K Scan AI Refund and Cancellation Policy",
  subtitle: "A price-independent policy for subscription refunds and cancellations",
  effectiveDate: "September 12, 2026",
  lastUpdated: "September 12, 2026",
  contactEmail: "kscanai.app@gmail.com",
  governingLinks: [
    { label: "Governing full HTML version:", href: "https://kscan.app/legal/refund-policy", boldLabel: true },
    { label: "Public summary:", href: "https://kscan.app/billing", boldLabel: false },
  ],
  sections: [
    {
      id: "introduction",
      blocks: [
        {
          type: "paragraph",
          text: `This Policy applies to eligible K Scan AI subscription charges. It is written so the refund rule works even if subscription prices change.`,
        },
      ],
    },
    {
      id: "prorated-refund-window",
      heading: "1. 30-Day Prorated Refund Window",
      blocks: [
        {
          type: "paragraph",
          text: `For an eligible monthly subscription charge, you may request a prorated refund during the 30-calendar-day period that starts on the charge date. The refund is based on the amount you actually paid and the number of service days already received.`,
        },
        {
          type: "paragraph",
          text: `Prorated refund = amount actually paid × unused service days ÷ 30.`,
        },
        {
          type: "paragraph",
          text: `Unused service days = 30 minus service days used. A partial calendar day may be counted as a service day used. Refunds may be rounded to the nearest cent.`,
        },
      ],
    },
    {
      id: "access-not-paid-for",
      heading: "2. Access That Was Not Paid For",
      blocks: [
        {
          type: "paragraph",
          text: `K+ may be offered without charge, as a trial, or as a promotion. If you paid nothing for an access period, there is no monetary amount to refund for that period. No-charge or promotional access has no separate cash value.`,
        },
      ],
    },
    {
      id: "charges-reviewed-separately",
      heading: "3. Each Charge Is Reviewed Separately",
      blocks: [
        {
          type: "paragraph",
          text: `Each monthly charge has its own 30-day refund window. A refund for one billing period does not automatically create a refund right for an earlier period. K Scan AI will not refund more than the amount actually paid for the charge at issue.`,
        },
      ],
    },
    {
      id: "requests-after-30-days",
      heading: "4. Requests After 30 Days",
      blocks: [
        {
          type: "paragraph",
          text: `After the 30-day window, the standard prorated refund period has ended. K Scan AI may still issue or support a refund when required by law, when a duplicate or incorrect charge occurred, when a paid service was materially not delivered, when an unauthorized transaction is established, when the payment platform requires it, or when K Scan AI decides a refund is appropriate.`,
        },
      ],
    },
    {
      id: "cancellation-vs-refunds",
      heading: "5. Cancellation and Refunds Are Different",
      blocks: [
        {
          type: "paragraph",
          text: `Cancellation stops future renewal of an automatically renewing subscription. A refund returns some or all of money already paid. Cancelling does not automatically refund a prior charge. Uninstalling the app does not cancel a store subscription.`,
        },
      ],
    },
    {
      id: "apple-app-store",
      heading: "6. Apple App Store Purchases",
      blocks: [
        {
          type: "paragraph",
          text: `Apple processes App Store transactions and controls the App Store refund mechanism. K Scan AI’s standard policy supports the prorated refund framework described above, but Apple may approve, deny, calculate, or process a refund under Apple’s systems, policies, and applicable law. You may need to request an Apple-billed refund directly from Apple.`,
        },
      ],
    },
    {
      id: "google-play",
      heading: "7. Google Play Purchases",
      blocks: [
        {
          type: "paragraph",
          text: `Google Play processes native Android subscription transactions. K Scan AI applies the prorated policy where Google Play tools and applicable law allow it. Google may also handle some refund requests directly. A refund can change or end the related K+ entitlement.`,
        },
      ],
    },
    {
      id: "other-billing-methods",
      heading: "8. Other Billing Methods",
      blocks: [
        {
          type: "paragraph",
          text: `If K Scan AI later offers an authorized billing method outside Apple or Google, the same 30-day prorated framework applies to eligible monthly subscription charges unless different terms are clearly shown before purchase or applicable law requires a different result.`,
        },
      ],
    },
    {
      id: "incorrect-unauthorized-charges",
      heading: "9. Incorrect or Unauthorized Charges",
      blocks: [
        {
          type: "paragraph",
          text: `Contact K Scan AI promptly if you believe you were charged twice, charged the wrong amount, charged after cancellation should have taken effect, charged for a service you did not receive, or charged without authorization. The app store, bank, or payment provider may also require you to use its own process.`,
        },
      ],
    },
    {
      id: "chargebacks-duplicate-recovery",
      heading: "10. Chargebacks and Duplicate Recovery",
      blocks: [
        {
          type: "paragraph",
          text: `K Scan AI may provide transaction, entitlement, access, cancellation, refund, and support records to an authorized app store, payment processor, bank, or dispute service when needed to respond to a payment dispute. K Scan AI may contest duplicate recovery, such as a chargeback for an amount already refunded.`,
        },
      ],
    },
    {
      id: "mandatory-consumer-rights",
      heading: "11. Mandatory Consumer Rights",
      blocks: [
        {
          type: "paragraph",
          text: `Nothing in this Policy limits refund, withdrawal, cancellation, warranty, or other rights that cannot legally be waived. If applicable law gives you greater rights, that law controls.`,
        },
      ],
    },
    {
      id: "contact",
      heading: "12. Contact",
      blocks: [
        {
          type: "contact",
          lines: [
            {
              label: "Refund or billing questions:",
              text: "kscanai.app@gmail.com",
              href: "mailto:kscanai.app@gmail.com",
            },
            {
              label: "Refund Policy:",
              text: "https://kscan.app/legal/refund-policy",
              href: "https://kscan.app/legal/refund-policy",
            },
            { label: "Terms:", text: "https://kscan.app/legal/terms", href: "https://kscan.app/legal/terms" },
          ],
        },
      ],
    },
  ],
};
