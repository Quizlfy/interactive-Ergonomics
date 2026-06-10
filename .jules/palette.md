## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-05-15 - Hide decorative avatar initials
**Learning:** Screen readers announce visual decorative elements redundantly (e.g. initials next to full names) causing noise.
**Action:** Apply `aria-hidden="true"` to purely decorative visual elements (like avatar initials next to full names) to prevent redundant or noisy screen reader announcements.
