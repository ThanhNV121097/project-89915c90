# SRS — Character Counter

Module: `general`
Design: [View the approved design](http://localhost:8080/design/89915c90-d078-4c0d-9263-9f4b1224423a)
Design system: `design/design-system.md`

> One file per module, at `docs/general/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

Character Counter is a single static browser page that lets a visitor type text and see the character count update live. It gives immediate feedback on input length without storing content anywhere. Without it, the product has no visible page and no character-counting behavior.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anonymous user opening the page | Type text, see live character count, clear the input |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Build character counter page

**Out of scope** — name what a reader would reasonably expect here and say where it lives instead.

- Authentication, user accounts, saved drafts, analytics, or sharing — not built in this static page.
- Any backend API, database, or server-side storage — deliberately not built; project is browser-only.

## 4. Functional requirements

### 4.1 Build character counter page

**Requirement GENERAL-001 — Show character counter page**

*As a* Visitor, *I want to* open a single centered character-counter page, *so that* I can count what I type.

Behaviour:

1. When the page loads, the visitor sees one centered white card on a very light grey background.
2. The card uses near-black text, a muted subline, a system sans-serif font stack, a bordered rounded shadowed card, and the Clear button uses accent color `#2F6F4E`.
3. The card shows heading `Character counter`, subline text, one textarea, a live count line, a `Clear` button, and a privacy hint.
4. The textarea is empty on initial load and the count line shows `0 characters`.
5. The count updates on every keystroke, including spaces.
6. The count uses singular form for exactly one character and plural form for all other counts.
7. The `Clear` button empties the textarea, resets the count to `0 characters`, and returns focus to the textarea.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/general/test-cases/build-character-counter-page.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | Visitor views the page | One centered white card appears on a very light grey background with heading, subline, textarea, count line, Clear button, and privacy hint |
| AC-2 | Textarea is empty on load | Visitor views the count line | Count line shows `0 characters` |
| AC-3 | Textarea contains text with spaces | Visitor types additional characters | Count updates after each keystroke and includes spaces in total |
| AC-4 | Textarea contains any text | Visitor clicks `Clear` | Textarea becomes empty, count returns to `0 characters`, and focus returns to textarea |
| AC-5 | Count is `1` | Visitor views count line | Count text uses singular form `1 character` |
| AC-6 | Count is not `1` | Visitor views count line | Count text uses plural form `N characters` |

**Failure, boundary and permission behaviour** — no error, empty-state, permission, or conflict state is part of the approved design. The page is single-reader, single-state, browser-only, and has no backend or database failure surface in scope.

**Out of scope styling** — none. The approved design styling above is required, not optional.

**Data touched** — the fields this function reads and writes, in product terms.

| Field | Type | Required | Rule |
|---|---|---|---|
| Text input value | text | yes | Accepts any visible text and spaces; character count uses current string length |
| Character count | number | yes | Derived from current textarea value; must match displayed singular/plural label |

## 5. Screens

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Character Counter | Single centered card | GENERAL-001 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Count updates on each input event with no visible delay on the approved single-page screen |
| Accessibility | Textarea, Clear button, and count line are keyboard reachable; focus is visible; textarea has an accessible label |
| Responsive | Page fits at 320px width and up with no horizontal page scroll |
| Privacy | Typed text stays in the browser page only; nothing is sent to a backend because none exists |

## 7. Dependencies and assumptions

- **Depends on:** None. No backend, database, or external service is required.
- **Assumption:** Visitor uses a modern browser with standard textarea and button support; if not, live count and Clear behavior may degrade.

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Not applicable | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Build character counter page | GENERAL-001 | `test-cases/build-character-counter-page.md` |
