## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-04-26 - Hide Purely Decorative Emojis and Elements from Screen Readers
**Learning:** In simple static HTML presentations, decorative elements like emojis in `<div class="icon">`, or dynamically generated initials in a team card, are often read out loud by screen readers. This creates unnecessary noise and degrades the overall accessibility experience for users relying on assistive technology.
**Action:** When auditing or implementing visual UI elements (like decorative emojis or avatar initials next to full names), apply `aria-hidden="true"` to prevent redundant or noisy screen reader announcements.
