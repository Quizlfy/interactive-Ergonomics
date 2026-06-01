## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-05-18 - Hiding Redundant Visual Elements from Screen Readers
**Learning:** Components that display information both visually (e.g., as initials in an avatar) and textually (e.g., as a full name immediately adjacent to it) cause unnecessary redundancy for screen reader users. The screen reader will read the initials followed by the name, confusing the user and providing no extra value.
**Action:** When implementing or auditing purely decorative visual elements (such as avatar initials derived from names or decorative emojis), always apply `aria-hidden="true"` to prevent screen readers from announcing them redundantly.
