# Test Cases — Build character counter page

Risk level: low. Static single-page UI, no data persistence, no roles, no backend/database behavior beyond absence.

## Case 1 — Initial page render shows required UI
**Scenario**: Character Counter page renders centered card with heading, subline, textarea, live count, Clear button, and privacy hint
**Given**: Browser loads Character Counter page at initial state
**When**: Page response is fetched and rendered
**Then**: Page shows one centered card on light grey background, with heading, subline, empty textarea, character count showing `0 characters`, Clear button, and privacy hint text; no backend data is displayed
**Check**: render_url

## Case 2 — Typing updates count on every keystroke, including spaces
**Scenario**: Live count updates as user types characters and spaces
**Given**: Character Counter page is open with empty textarea and count at `0 characters`
**When**: User types `a`, then space, then `b` into textarea one keystroke at a time
**Then**: Count updates after each keystroke to `1 character`, `2 characters`, then `3 characters`, and textarea value reads `a b`
**Check**: interact_page

## Case 3 — Clear empties input and resets count
**Scenario**: Clear button removes current text and resets live count
**Given**: Character Counter page is open with textarea containing `hello world` and live count showing `11 characters`
**When**: User clicks Clear button
**Then**: Textarea becomes empty and live count shows `0 characters`
**Check**: interact_page

## Case 4 — Static page has no backend or database
**Scenario**: Page is browser-only static content with no backend/database dependency
**Given**: Character Counter page URL is available
**When**: Page is fetched directly
**Then**: Response is plain static page content for the Character Counter screen; no API response, database-backed data, or server-generated data is required to render the page
**Check**: fetch_url
