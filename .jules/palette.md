## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2026-05-05 - Decorative Initials
**Learning:** When using avatar initials alongside full names, screen readers redundantly announce the generated initials right before the name (e.g., "AA Abdulrahman Ali"). This adds unnecessary noise to the accessibility tree.
**Action:** Always apply `aria-hidden="true"` to visual-only avatar initials when the full text context is already present adjacent to it.