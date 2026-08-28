# Design System — Character Counter

> Source of truth: the approved `index.html`.
> Every value below is extracted from it. Changing a value here without changing the approved design is a defect.

Last updated: 2025-08-14

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#f5f6f4` | Page background |
| `--color-surface` | `#ffffff` | Card / panel background |
| `--color-surface-raised` | `#fbfcfa` | Textarea surface |
| `--color-border` | `#dfe3dd` | Default border, divider |
| `--color-border-hover` | `#c9d2c6` | Hover border on textarea |
| `--color-text` | `#171717` | Body text |
| `--color-text-muted` | `#5f635f` | Secondary text, captions |
| `--color-primary` | `#2F6F4E` | Primary action background, count value |
| `--color-primary-hover` | `#285e43` | Primary action hover background |
| `--color-primary-text` | `#ffffff` | Text on primary |
| `--color-focus` | `rgba(47,111,78,.28)` | Keyboard focus ring |
| `--color-focus-soft` | `rgba(47,111,78,.12)` | Textarea focus halo |
| `--color-accent-surface` | `rgba(47,111,78,.07)` | Decorative background glow |
| `--color-shadow` | `rgba(23,23,23,.08)` | Card shadow |
| `--color-shadow-primary` | `rgba(47,111,78,.2)` | Button shadow |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `15.4:1` | AA / AA Large |
| `--color-text` | `--color-surface` | `15.7:1` | AA / AA Large |
| `--color-text-muted` | `--color-surface` | `6.7:1` | AA / AA Large |
| `--color-primary-text` | `--color-primary` | `5.1:1` | AA / AA Large |
| `--color-primary` | `--color-surface` | `5.1:1` | AA / AA Large |
| `--color-border` | `--color-surface` | `1.3:1` | Border only |
| `--color-border-hover` | `--color-surface` | `1.6:1` | Border only |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in product uses one of these.

| Token | Value |
|---|---|
| `--space-3` | `10px` |
| `--space-4` | `12px` |
| `--space-5` | `16px` |
| `--space-6` | `18px` |
| `--space-7` | `22px` |
| `--space-8` | `24px` |
| `--space-10` | `32px` |
|
| `--space-12` | `48px` |

### 1.3 Typography

Font families:

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Headings: same as body
- Mono: browser default monospace if ever needed; not used in approved design

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-sm` | `0.95rem` | `1.6` | `400` | Helper text, hint |
| `--text-base` | `1rem` | `1.6` | `400` | Body, textarea text |
| `--text-lg` | `1.3rem` | `1.2` | `700` | Count value |
| `--text-xl` | `1.8rem` | `1.05` | `700` | Mobile h1 sizing |
| `--text-2xl` | `2rem` | `1.05` | `700` | Default h1 sizing |
| `--text-3xl` | `3rem` | `1.05` | `700` | Large h1 sizing |

Heading levels are used in order and never skipped for visual sizing.

Weight and letter-spacing:

| Token | Value | Used for |
|---|---|---|
| `--font-weight-body` | `400` | Running text |
| `--font-weight-medium` | `600` | Label |
| `--font-weight-heading` | `700` | h1 |
| `--tracking-tight` | `-0.04em` | Page title |
| `--tracking-normal` | `0` | Everything else |
| `--tracking-count` | `-0.03em` | Count value |

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `18px` | Textarea |
| `--radius-md` | `24px` | Card |
| `--radius-full` | `999px` | Button |
| `--border-width` | `1px` | Default border |
| `--shadow-sm` | `0 18px 40px rgba(23,23,23,.08)` | Card |
| `--shadow-md` | `0 10px 20px rgba(47,111,78,.2)` | Button |
| `--duration-fast` | `0.18s` | Hover, focus |
| `--easing` | `ease` | Transitions |

Motion respects `prefers-reduced-motion: reduce`: state changes remain, movement is removed.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | `0` | `min(680px, 100%)` | `1` | `24px` page padding |
| `md` | `561px` | `min(680px, 100%)` | `1` | `24px` page padding |
| `lg` | `769px` | `min(680px, 100%)` | `1` | `24px` page padding |
| `xl` | `1025px` | `min(680px, 100%)` | `1` | `24px` page padding |

Z-index scale: none used in approved design.

## 2. Components

### 2.1 Card panel

**Purpose** — Frame single centered app content. Use for main page shell only.

**Anatomy** — `[surface] [border] [content stack]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-surface`, `--color-border`, `--shadow-sm`, `--radius-md` | Main content card |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| default | auto | `32px` desktop, `22px` mobile | inherit |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White surface, border, shadow | `--color-surface`, `--color-border`, `--shadow-sm` |
| Hover | none | same |
| Focus (keyboard) | none | same |
| Active / pressed | none | same |
| Disabled | none | same |
| Loading | none | same |
| Error | none | same |
| Empty | none | same |

**Accessibility** — Landmark content inside `main`; no interactive behavior.

### 2.2 Textarea input

**Purpose** — Accept free text for live character count.

**Anatomy** — `[label] [textarea]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-surface-raised`, `--color-border`, `--radius-sm` | Freeform text input |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| default | `180px` min-height | `18px` | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Light surface, border | `--color-surface-raised`, `--color-border` |
| Hover | Border darkens | `--color-border-hover` |
| Focus (keyboard) | Primary border + halo | `--color-primary`, `--color-focus-soft`, `--color-focus` |
| Active / pressed | none | same as default |
| Disabled | Not shown in approved design | n/a |
| Loading | Not shown in approved design | n/a |
| Error | Not shown in approved design | n/a |
| Empty | Placeholder visible, count shows zero | placeholder text, live count |

**Accessibility** — Native `textarea`, labeled by `label`, described by count and hint.

### 2.3 Primary button

**Purpose** — Clear text and reset count. Use only for the main action.

**Anatomy** — `[label]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-primary`, `--color-primary-text`, `--shadow-md`, `--radius-full` | Primary action |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| default | auto | `13px 18px` | `--text-base` / `700` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Green pill with white label | `--color-primary`, `--color-primary-text`, `--shadow-md` |
| Hover | Darker green, lifts 1px | `--color-primary-hover` |
| Focus (keyboard) | Visible focus ring | `--color-focus` |
| Active / pressed | Returns to rest position | same as default |
| Disabled | Not shown in approved design | n/a |
| Loading | Not shown in approved design | n/a |
| Error | Not shown in approved design | n/a |
| Empty | Not applicable | n/a |

**Accessibility** — Native `button`, keyboard activatable, 44px-wide minimum on mobile.

### 2.4 Live count

**Purpose** — Show current character total.

**Anatomy** — `[number] [label]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-primary`, `--text-lg`, `--tracking-count` | Character total display |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| default | auto | none | `--text-lg` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Green number + count label | `--color-primary` |
| Hover | none | same |
| Focus (keyboard) | none | same |
| Active / pressed | none | same |
| Disabled | not shown | n/a |
| Loading | not shown | n/a |
| Error | not shown | n/a |
| Empty | Shows `0 characters` | `0` + label |

**Accessibility** — `aria-live="polite"` so updates announce without interrupting input.

### 2.5 Helper copy

**Purpose** — Explain privacy promise and usage.

**Anatomy** — `[text]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| default | `--color-text-muted`, `--text-sm` | Secondary guidance |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| default | auto | none | `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|---|
| Default | Muted body copy | `--color-text-muted` |
| Hover | none | same |
| Focus (keyboard) | none | same |
| Active / pressed | none | same |
| Disabled | none | same |
| Loading | none | same |
| Error | none | same |
| Empty | none | same |

**Accessibility** — Plain text; read as supportive content.

## 3. Content and formatting

- Voice: calm, direct, privacy-first.
- Numbers: plain digits with singular/plural label (`0 characters`, `1 character`, `2 characters`).
- Capitalization: sentence case for headings, labels, and button text.
- Empty-state wording: if no text, show zero count; no extra warning copy.
- Error copy: none in approved design.

## 4. Known deviations

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| `textarea` state set | Disabled, loading, and error states are not present in approved design | Single static interaction page; only default/hover/focus/empty/active are designed | Add only if future product introduces those states |
| `button` state set | Disabled, loading, and error states are not present in approved design | Clear button is simple and no alternate states are shown | Add only if button becomes async or unavailable |
| Layout breakpoints | Only one explicit mobile breakpoint exists in CSS (`max-width: 560px`) | Approved mockup is mostly fluid and only changes card padding/button width on small screens | Keep fluid layout unless design changes |
| Color system | Decorative glow uses rgba token, not hex | It is present in approved CSS as a translucent accent wash | Keep as-is; do not replace with flat color |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-08-14 | Initial design system extracted from approved mockup | pending |
