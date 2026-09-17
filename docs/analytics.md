# Google Analytics 4 — status and verification record

**Record date:** 16 September 2026 · **Notice version:** `2026-09-16.2`

## 1. Release status

**GA4 is enabled in the production configuration and collects data only after
explicit consent.**

The measurement ID `G-BVG3YZR5C5` was recovered from commit `6e11d9c` and
confirmed by the data controller. On 16 September 2026 the data controller
confirmed the following account settings: two-month retention with no reset on
new activity, Enhanced Measurement disabled, and no advertising links.
Acceptance of the processing terms was reported as of 22 November 2025. These
are attestations by the data controller; they were not verified directly in the
Google Analytics account by the assistant.

`.env.production` sets `VITE_ANALYTICS_ENABLED=true` for the standard build,
including GitHub Actions. No deployment was carried out as part of this work.
The tag remains blocked before consent and outside the production domains.
Setting the variable to `false` and rebuilding disables the banner and all
collection; the published privacy notice follows the build configuration
automatically.

Interactive verification of the Google tag against live Google infrastructure
(DebugView) remains outstanding. Confirmation of the administrative settings is
not treated as a substitute for it.

## 2. Implemented controls

- Accept and reject are presented with equal prominence; the close control is
  accessible and rejects statistics.
- Preferences can be reopened from the footer and from the privacy notice, and
  the current choice is displayed.
- Consent expires after six **calendar** months and is not renewed by an
  ordinary visit. Separately, GA cookies are set with a 180-day lifetime and no
  automatic refresh.
- The choice is versioned (`2026-09-16.2`) and stored with its date and expiry;
  records from earlier versions do not authorise new collection. No additional
  identifier is created for the consent record.
- The choice is re-evaluated on storage events, window focus, `pageshow`, tab
  visibility changes, and on a timer.
- Withdrawal sets the tag disable flag, removes the accessible GA cookies
  (including those on nested paths), and reloads the document to detach
  listeners already registered by Google.
- If the choice cannot be persisted, acceptance is refused; a withdrawal remains
  effective for the current document without reloading, so that a previously
  stored grant is not restored. A message explains the limitation and how to
  clear local data.
- Collection starts only with a valid choice, the build gate enabled, and a
  production build served from simonecolli.com or www.simonecolli.com.
- Basic Consent Mode: no Google script is loaded before acceptance.
- `ad_storage`, `ad_user_data` and `ad_personalization` are denied in both the
  `default` and the `update` command; Google Signals and ad personalisation are
  additionally disabled in the tag configuration.
- Page and contact events distinguish the development and photography areas.
  Mailto message bodies are never transmitted. Query strings, fragments and
  paths outside the public catalogue are excluded from the manual events, and
  an external referrer is reduced to its origin.
- The Italian and English notices distinguish the active and inactive states.
  The active version identifies Google Ireland Limited and describes retention
  and transfers.

## 3. Google account settings (controller attestations)

No credentials were obtained and no Google Analytics session was opened. The
application code can neither verify nor alter these administrative settings.

| Item | Expected configuration | Status |
| --- | --- | --- |
| Property and data stream | G-BVG3YZR5C5 | ID confirmed by the controller |
| User and event retention | 2 months; reset on new activity OFF | Confirmed by the controller |
| Enhanced Measurement | OFF: page and contact events are handled by the site | Confirmed by the controller |
| Google Ads and other advertising links | None | Confirmed by the controller |
| Google Signals, user-provided data | OFF | To be verified |
| Data sharing settings and account access | To be reviewed and minimised | To be verified |
| Article 28 processing terms | Accepted on 22 November 2025 | Account text reported by the controller |
| Transfers | Recipients, DPF coverage or other applicable safeguards | To be verified |

The two-month retention is a minimisation choice made by the controller, **not**
a statutory limit. The deletion cycle runs monthly; aggregated reports are not
subject to this expiry. The account text states that such reports remain in the
property for as long as the controller maintains it; this should be confirmed as
the policy actually applied, including any exports. No contractual terms were
accepted and no change was made to the Google property by the assistant.

Since 15 June 2026 the Google Signals switch alone no longer governs the
collection of advertising identifiers: the Consent Mode signals and all account
links should be reviewed accordingly.

## 4. Verification performed

### 4.1 Automated checks

- `node --test tests/analytics.test.mjs`: 11 tests passed.
- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed, including the static pages and the privacy notice.
- `http://localhost:5174/privacy`: HTTP 200 in the preview started by the user.

The build reports one chunk above the indicative 500 kB threshold and a Node
deprecation warning during prerendering, with no compilation errors.

### 4.2 Browser verification (16 September 2026)

The production build was served locally and driven through a real browser. The
production-host check was patched in the served copy to accept `localhost`,
since the domain allowlist would otherwise prevent the tag from starting; no
other code was altered, and the patched copy was discarded afterwards.

| Scenario | Result |
| --- | --- |
| Before any choice | No request to Google, no `gtag`, no GA cookie; the tag disable flag is already set |
| Prerendered HTML | The consent banner is absent from the static output |
| On acceptance | `consent default` (all denied) → `consent update` (only `analytics_storage` granted) → `js` → `config`, in that order; `gtag/js` requested exactly once |
| Client-side navigation | One `page_view` per route; a repeated route is deduplicated; an unknown path is reduced to `/404`; area and referrer chain correct |
| Contact clicks | Area, placement and service correct; the service allowlist is enforced; no message body or query string is transmitted |
| Withdrawal | Document reloaded, choice stored as rejected, script removed, disable flag set again |
| Cookie removal | `_ga`, `_ga_BVG3YZR5C5` and a `_ga_`-prefixed cookie on a nested path were removed; unrelated cookies were left intact |
| Build gate | With the gate disabled the notice shows the inactive text; with it enabled, the active text |

Google infrastructure was unreachable from the test environment
(`ERR_CONNECTION_REFUSED`), so `gtag.js` never executed. The commands recorded
above were read from the `dataLayer` queue, which is the payload that would be
sent; they are not evidence of what Google actually received.

## 5. Outstanding verification

With collection disabled: confirm that the preferences panel and the notice are
consistent, and that no Google request is made even when an older consent record
is present in storage.

To exercise the full banner in a preview, the gate may be enabled in a local
build only; the domain and production checks continue to prevent real
transmission. Test on desktop and mobile, by keyboard, in both themes and in
both languages.

After the account settings have been verified, and within an authorised testing
context:

1. Clean profile: no request to Google and no GA cookie before a choice is made.
2. Rejection and close control: no request; the choice survives reload and
   navigation.
3. Acceptance: script loaded once; one `page_view` per page with correct area
   labels; no message body or private query string; advertising consent always
   denied.
4. Withdrawal: further requests blocked and cookies removed; verify behaviour in
   other tabs, on restore from the back/forward cache, and on resume from
   suspension.
5. Expiry, unavailable storage and a superseded notice version: no collection
   without a valid choice, and no renewed consent request before six months,
   subject to the applicable exceptions.
6. DebugView: confirmation of the events actually received and absence of
   duplicates.

Coverage from the browser verification in section 4.2: item 1 is covered; item 2
only in part, since rejection was exercised through the preferences panel and
persisted across the reload, while the close control and a first-visit rejection
were not exercised separately; item 3 is covered; item 4 is covered for the
current tab only. Item 5 is covered by the automated tests but not in a browser,
and item 6 is not covered at all.

`.env.production` now enables the production build on the basis of the
controller's administrative attestations. The testing above should be completed
before the live behaviour of the Google tag is considered verified.

## 6. Evidence and limitations

The local record is a technical preference, not a consent database. The copies
of the notice texts in `docs/privacy/2026-09-16.2.*.json` preserve the presented
content alongside its version; the version and the copies should be updated
whenever the processing changes materially. The administrative attestations and
the testing results should be retained with them. This document is not a legal
certification of compliance.

## 7. Reference sources

- Garante (Italian DPA), cookie FAQ (dismissal, proof of consent, six months):
  https://www.garanteprivacy.it/faq/cookie
- Google, changes to the controls from 15 June 2026:
  https://support.google.com/analytics/answer/17016975?hl=en
- Google, Basic Consent Mode:
  https://developers.google.com/tag-platform/security/guides/consent
- Google, page views and duplication:
  https://developers.google.com/analytics/devguides/collection/ga4/views
- Google, retention and limits of aggregated reports:
  https://support.google.com/analytics/answer/7667196
- Standard terms of service for Italy (Google Ireland Limited):
  https://marketingplatform.google.com/about/analytics/terms/it/
- Processing terms:
  https://business.safety.google/adsprocessorterms/
- Transfers:
  https://policies.google.com/privacy/frameworks
