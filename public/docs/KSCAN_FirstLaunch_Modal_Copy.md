# K SCAN AI — FIRST LAUNCH MODAL COPY

**For Mobile App (iOS/Android)**
Last Updated: May 7, 2026

---

## DESIGN NOTES

- **Placement**: Full-screen modal or bottom sheet on first app launch (after splash screen)
- **Flow**: User must accept to proceed; no dismiss button without action
- **Font sizes**: Body 14-16px, headings 18-20px
- **CTAs**: Dual buttons (Accept / Review Terms)
- **Accessibility**: Ensure sufficient color contrast, keyboard navigation, screen reader support
- **Localization**: English primary; prepare translations as needed

---

## VERSION 1: STREAMLINED (RECOMMENDED FOR APP)

### Header
```
Welcome to K SCAN AI
AI-Powered Visual Fashion Discovery
```

### Body Copy
```
By using K SCAN, you agree to our Terms and Conditions and Privacy Policy.

Key things you should know:

• AI suggestions may not be 100% accurate
  Visual matches are not guaranteed to be identical products

• We don't verify retailers or products
  You're responsible for checking authenticity and seller legitimacy before buying

• Your images are processed by AI
  We use your photos to generate styling suggestions, then delete them (typically within 30 days)

• You own your photos
  We have permission to use them to improve the app, but you retain ownership

• Limited liability
  We can't be held responsible for counterfeit goods or third-party transactions

Read the full Terms and Conditions for complete details.
```

### CTA Section
```
[Accept & Continue]  [Review Full Terms]
```

### Post-Acceptance Message (Optional)
```
✓ Thanks! You're all set. Let's find your next favorite fit.
```

---

## VERSION 2: CONDENSED (LEGAL-FIRST)

### Header
```
Terms and Conditions
Please read before continuing
```

### Body Copy
```
By tapping "I Agree," you accept our Terms and Conditions, including:

✓ AI-Generated Results: AI outputs may be inaccurate or incomplete
✓ Third-Party Links: We're not responsible for retailers or products
✓ Image Processing: Your photos are analyzed by AI and deleted within 30 days
✓ Your Data: You own your content; we have limited rights to process it
✓ No Guarantees: We don't guarantee authenticity, pricing, or product quality
✓ Liability Cap: Our liability is limited to amounts you've paid (or $100 max)

We recommend reviewing our full Terms and Privacy Policy.
```

### CTA Section
```
[I Agree]  [Read Full Terms]  [Privacy Policy]
```

---

## VERSION 3: VISUAL + TEXT (DESIGN-FORWARD)

### Section 1: AI Disclaimer
```
🤖 How Our AI Works

K SCAN uses visual AI to identify fashion and suggest similar items across retailers.
⚠️ Results may not be exact matches. Always verify authenticity before purchasing.
```

### Section 2: Your Data
```
📸 Your Photos

We process your images to generate recommendations, then delete them.
You retain ownership; we use anonymized data to improve the app.
```

### Section 3: Your Responsibility
```
✋ Before You Buy

We don't verify retailers or authenticate products.
Check seller legitimacy and authenticate items yourself.
```

### Section 4: Legal
```
⚖️ Our Limits

We can't be held liable for counterfeit goods, pricing changes, or third-party disputes.
See full Terms and Conditions for complete liability limits.
```

### CTA Section
```
I Understand & Accept
See Full Terms
Privacy Policy
```

---

## VERSION 4: MINIMAL (MICRO-INTERACTION)

### Header (Animated fade-in)
```
Welcome to K SCAN
```

### Body Copy
```
A few quick things:

1. Our AI isn't perfect—always check before buying
2. Your photos get deleted after processing
3. We can't verify retailers or guarantee authenticity
4. We have limited liability for third-party transactions

By continuing, you agree to our Terms and Conditions.
```

### CTA Section
```
Let's Go
Review Terms First
```

---

## CONTEXTUAL VARIATIONS

### For Beta/Early Access Users
```
🚀 You're in Early Access

This version contains experimental features that may change or have bugs.
Features marked [BETA] are not covered by our normal support guarantees.

By continuing, you accept that Beta Features are "as is" without warranties.
```

### For Parental Consent (Ages 13–17)
```
Parent or Guardian Review Required

K SCAN requires parental consent for users under 18.

A parent or guardian must review and accept these Terms before your account can be activated.

Please share this with your parent/guardian and have them approve.

[Send Approval Link to Parent]  [I Have Parental Approval]
```

### After Update (New T&C Version)
```
Terms Updated

We've updated our Terms and Conditions to add:
• Clearer AI transparency guidelines
• Enhanced data retention policies
• Improved accessibility standards

Please review and re-accept to continue using K SCAN.

[Accept Updated Terms]  [What Changed?]
```

---

## FOLLOW-UP SCREENS

### Screen 1: Confirmation (Post-Accept)
```
✓ All Set!

You're ready to discover your next favorite fit.

[Start Scanning]
```

### Screen 2: Settings Shortcut (Optional)
```
Want to Manage Your Privacy?

You can update your data preferences anytime in Settings.

[Open Settings]  [Skip for Now]
```

### Screen 3: Review Terms Prompt (If Clicked "Review Full Terms")
```
📄 Full Terms and Conditions

Opening full Terms document in browser...

You can close this and return to K SCAN at any time.

[Continue to App]
```

---

## ACCESSIBILITY REQUIREMENTS

### Screen Reader / Keyboard Navigation
```
Modal announced as: "Dialog: Terms and Conditions"
Tab order: Heading → Body text → [Accept] button → [Review] button
Escape key: Disabled (user must accept or navigate to terms)
Focus trap: Enabled within modal
```

### Color Contrast
```
Text: #000000 (black) on #FFFFFF (white) = 21:1 contrast (AAA)
Links: #6D28D9 (K SCAN violet) on white = 7.5:1 (AAA)
Buttons: Min 44x44px touch targets (iOS/Android standards)
```

### Font Accessibility
```
Default: SF Pro Display (iOS) / Roboto (Android), 16px minimum
Line height: 1.5 (22px minimum)
Letter spacing: Normal or loose (not condensed)
No full-text justification (left-align only)
```

---

## IMPLEMENTATION CHECKLIST

### Mobile Dev
- [ ] Modal renders full-screen on first launch
- [ ] No dismiss button without action (dismiss only via Accept/Decline)
- [ ] Accept button saves user preference (localStorage/secure storage)
- [ ] Review Terms opens Safari/Chrome to full T&C URL
- [ ] Parental consent flow triggers for users 13-17
- [ ] Modal persists if T&C version updates
- [ ] Keyboard navigation works (tab/enter)
- [ ] Screen reader announces all content
- [ ] Touch targets min 44x44px
- [ ] Tested on iOS 14+ and Android 8+

### Content
- [ ] Legal review (attorney) before launch
- [ ] Plain-language copy (no excess legalese)
- [ ] Compliance verified: COPPA, GDPR, CCPA
- [ ] Links to Privacy Policy working
- [ ] Contact email (kscanai.app@gmail.com) monitored
- [ ] Versioning system in place for T&C updates

### Design
- [ ] Modal matches K SCAN branding (Obsidian/Cyan)
- [ ] Typography hierarchy clear
- [ ] Color contrast tested (WebAIM, WAVE)
- [ ] Responsive layout (320px-480px widths)
- [ ] Light/dark mode support (if applicable)

### Testing
- [ ] Manual testing: iOS (14, 15, 16, 17) + Android (8, 10, 12, 13)
- [ ] Accessibility audit: WCAG 2.1 Level AA
- [ ] Screen reader test: VoiceOver (iOS) + TalkBack (Android)
- [ ] Keyboard-only navigation test
- [ ] Hot reload w/ T&C version bump
- [ ] A/B test: Version 1 (Streamlined) vs. Version 3 (Visual) for acceptance rate

---

## LEGAL FOOTER (FOR INTERNAL USE)

**Attorney Review**: Required before deployment
**Compliance Scope**: COPPA (children's privacy), GDPR (EU users), CCPA (CA users)
**Update Cadence**: Review annually or when T&C material changes
**Localization**: Prepare Spanish, French, German translations Q3 2026
**Record Retention**: Keep signed consent logs for 3+ years

---

## SAMPLE REACT COMPONENT SKELETON

```jsx
// FirstLaunchModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FirstLaunchModal = () => {
  const [version] = useState('v1-streamlined');
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem('kscan_tc_accepted', 'true');
    localStorage.setItem('kscan_tc_version', version);
    navigate('/app');
  };

  const handleReview = () => {
    window.open('https://kscan.app/legal/terms', '_blank');
  };

  return (
    <div className="modal modal-fullscreen" role="dialog" aria-labelledby="modal-title">
      <div className="modal-content">
        <h1 id="modal-title" className="text-2xl font-bold">
          Welcome to K SCAN AI
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          AI-Powered Visual Fashion Discovery
        </p>

        <div className="mt-6 space-y-4 text-sm">
          {/* Key Points */}
          <p className="font-semibold">By using K SCAN, you agree to our Terms and Conditions:</p>
          <ul className="space-y-3">
            <li>🤖 AI suggestions may not be 100% accurate</li>
            <li>📸 We process your photos, then delete them within 30 days</li>
            <li>🛍️ We don't verify retailers or guarantee authenticity</li>
            <li>⚖️ Our liability is limited (see Terms for details)</li>
          </ul>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={handleReview}
            className="flex-1 px-4 py-3 border border-kscan-violet text-kscan-violet rounded-lg"
            aria-label="Review full terms and conditions"
          >
            Review Full Terms
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-3 bg-kscan-violet text-white rounded-lg font-semibold"
            aria-label="Accept terms and continue to app"
          >
            Accept & Continue
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          You can review our{' '}
          <a href="https://kscan.app/legal/privacy" className="text-kscan-violet">
            Privacy Policy
          </a>{' '}
          anytime.
        </p>
      </div>
    </div>
  );
};

export default FirstLaunchModal;
```

---

## RELATED ASSETS TO PREPARE

1. **Full T&C Landing Page** (`/legal/terms`)
   - Scrollable full text + downloadable PDF
   - Versioning (current + 2 prior versions)
   - Link from modal

2. **Privacy Policy** (`/legal/privacy`)
   - Data processing, retention, user rights
   - GDPR/CCPA specific sections
   - DPA template for enterprise users

3. **Consent Log System**
   - Store: User ID, T&C version, acceptance timestamp, IP
   - Retention: 3+ years
   - Use: Legal audit trail if disputes arise

4. **Parental Consent Flow**
   - Email verification for parent/guardian
   - One-click approval link (time-limited)
   - Re-verification if T&C updates

5. **A/B Test Metrics**
   - Acceptance rate (target: 95%+)
   - Time-to-accept (target: <1 min)
   - "Review Terms" click-through rate
   - Drop-off at modal (users who abandon app)

---

## DEPLOYMENT TIMELINE

**Pre-Launch (1-2 weeks)**
- [ ] Attorney review & sign-off on T&C
- [ ] Finalize modal copy (Version 1 recommended)
- [ ] Dev: Implement modal + consent logging
- [ ] QA: Full accessibility audit
- [ ] Staging: Test on real devices

**Launch Day**
- [ ] T&C URL live + downloadable PDF
- [ ] Modal triggered on first app open
- [ ] Consent logs recording
- [ ] Support team prepped for T&C questions

**Post-Launch (Ongoing)**
- [ ] Monitor acceptance rate daily
- [ ] Collect user feedback on clarity
- [ ] Update Privacy Policy by Q3 2026
- [ ] Annual T&C review cycle

---

## QUESTIONS FOR LEGAL TEAM

1. Should we offer a "print" or "export to PDF" option in the modal?
2. Do we need explicit GDPR/CCPA consent toggles beyond T&C acceptance?
3. Should we store signed consent (electronic signature) or just timestamp + IP?
4. For EU users: Do we need age gating + parental consent for 13-16 year-olds (GDPR)?
5. Should arbitration clause be highlighted in mobile modal, or only in full T&C?
6. Timeline for DPA for enterprise/retailer partners?

---

**End of Modal Copy Document**
