## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-10-25 - Hide Decorative Elements from Screen Readers
**Learning:** Screen readers announce every text node and element they encounter, including decorative elements like avatar initials or emojis, creating a noisy and confusing experience for users relying on assistive technologies.
**Action:** Always add `aria-hidden="true"` to purely visual/decorative elements (like .avatar initials next to full names or .icon emojis) so screen readers skip them and focus on the meaningful content.
