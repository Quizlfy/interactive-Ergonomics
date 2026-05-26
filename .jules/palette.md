## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2026-05-26 - Decorative Elements Need ARIA Hidden
**Learning:** Decorative elements like avatar initials (that just duplicate the full name visually) or emojis in icons can cause screen readers to redundantly announce useless or confusing information to users.
**Action:** When adding or auditing purely visual or decorative text/elements, always add `aria-hidden="true"` so screen readers ignore them and focus on the substantive content.
