import type { LegalDocumentData } from "@/components/legal/LegalDocument";

// Full public Deletion Policy, transcribed verbatim from the authoritative
// source content for the in-app deletion and recovery notice.
// Date: July 23, 2026

export const deletePolicy: LegalDocumentData = {
  eyebrow: "K SCAN AI",
  title: "Delete Account",
  subtitle: "In-app deletion and recovery notice | July 23, 2026",
  effectiveDate: "July 23, 2026",
  lastUpdated: "July 23, 2026",
  contactEmail: "kscanai.app@gmail.com",
  governingLinks: [
    { label: "Governing full HTML version:", href: "https://kscan.app/legal/delete-policy", boldLabel: true },
  ],
  sections: [
    {
      id: "before-you-continue",
      heading: "Before you continue",
      blocks: [
        {
          type: "paragraph",
          text: `Confirming deletion immediately deactivates your account and signs you out. Your data is not erased immediately.`,
        },
      ],
    },
    {
      id: "what-happens-next",
      heading: "What happens next",
      blocks: [
        {
          type: "bullets",
          items: [
            `Your account and protected features are disabled, and existing sessions may be revoked.`,
            `You receive an approximately 30-day recovery period and may receive a secure restoration link.`,
            `If you restore the account, you must sign in again with a fresh session.`,
          ],
        },
      ],
    },
    {
      id: "during-the-recovery-period",
      heading: "During the recovery period",
      blocks: [
        {
          type: "bullets",
          items: [
            `Your account remains deactivated and data is generally retained so you can recover an accidental deletion.`,
            `Use the restoration link before the stated deadline. Recovery after the deadline is not guaranteed.`,
          ],
        },
      ],
    },
    {
      id: "after-the-deadline",
      heading: "After the deadline",
      blocks: [
        {
          type: "bullets",
          items: [
            `The account becomes eligible for permanent deletion during a secure deletion cycle.`,
            `Once final purge is complete, K Scan cannot restore the account or reconstruct covered account data.`,
          ],
        },
      ],
    },
    {
      id: "data-included",
      heading: "Data included",
      blocks: [
        {
          type: "bullets",
          items: [
            `Account and authentication information; scans and saved items; Style Library uploads; Dressing Room content; Looks, collections, and attachments.`,
            `StyleChat or Elise messages, prompts, image context, and style preferences.`,
            `Approximate or precise location context linked to the account or included in account, StyleChat, diagnostic, or security records.`,
          ],
        },
      ],
    },
    {
      id: "what-may-remain",
      heading: "What may remain",
      blocks: [
        {
          type: "bullets",
          items: [
            `Encrypted or access-controlled backup copies for up to 90 days, or longer where permitted by law.`,
            `Limited deletion, security, fraud-prevention, legal, tax, accounting, or dispute records.`,
            `Aggregated or de-identified information; third-party records; and some device-local data until local app data is removed.`,
          ],
        },
      ],
    },
    {
      id: "subscriptions-and-refunds",
      heading: "Subscriptions and refunds",
      blocks: [
        {
          type: "bullets",
          items: [
            `Deleting the account does not automatically cancel an App Store or Google Play subscription, reverse a payment, create a refund, or resolve a chargeback.`,
          ],
        },
      ],
    },
    {
      id: "confirmation",
      heading: "Confirmation",
      blocks: [
        {
          type: "paragraph",
          text: `By confirming, you request immediate deactivation and the start of the approximately 30-day recovery period. Permanent deletion becomes irreversible after the recovery deadline and final purge.`,
        },
      ],
    },
    {
      id: "need-help",
      heading: "Need help?",
      blocks: [
        {
          type: "paragraph",
          text: `Contact kscanai.app@gmail.com from the account email address. Never send passwords, access tokens, restoration tokens, authentication cookies, or full payment-card information.`,
        },
      ],
    },
  ],
};
