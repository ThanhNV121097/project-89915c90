# Build character counter page

## User story
As a Visitor, I want a single centered character-counter page, so that I can count what I type.

## In scope
- One static browser page for Character Counter.
- Centered white card on very light grey background.
- Heading `Character counter`, subline, textarea, live count, `Clear` button, and privacy hint.
- Live count updates on every keystroke, including spaces.
- Count uses singular `1 character` and plural `N characters`.
- `Clear` empties textarea, resets count to `0 characters`, and returns focus to textarea.
- Text stays in browser only.

## Out of scope
- Authentication, accounts, saved drafts, analytics, sharing.
- Any backend API, database, or server-side storage.
- Any extra screens, error states, or hidden interactions not shown in approved design.

## UI scope
- Single screen: `Character Counter`.
- Default state only.
- Uses approved design: centered card, near-black text, muted subline, system sans-serif stack, green `Clear` button, and privacy hint.
- Responsive from 320px wide with no horizontal scroll.

## Acceptance criteria
1. Given page loads, when Visitor views it, then one centered white card appears on very light grey background with heading, subline, textarea, count line, `Clear` button, and privacy hint.
2. Given textarea is empty on load, when Visitor views count line, then it shows `0 characters`.
3. Given textarea contains text with spaces, when Visitor types additional characters, then count updates after each keystroke and includes spaces.
4. Given textarea contains any text, when Visitor clicks `Clear`, then textarea becomes empty, count returns to `0 characters`, and focus returns to textarea.
5. Given count is `1`, when Visitor views count line, then text shows `1 character`.
6. Given count is not `1`, when Visitor views count line, then text shows `N characters`.

## Dependencies
- Approved design and design system.
- No external accounts, secrets, or provider setup.
- No story dependencies.
