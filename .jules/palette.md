## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-06-01 - Redundant Avatar Initials
**Learning:** Avatar initials placed next to full names are read by screen readers as redundant, confusing noise (e.g. "A A, Abdulrahman Ali").
**Action:** Apply `aria-hidden="true"` to purely decorative visual elements like avatar initials to prevent redundant or noisy screen reader announcements.
