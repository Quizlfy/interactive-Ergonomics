## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-05-20 - Redundant Screen Reader Announcements for Avatar Initials
**Learning:** Generating avatar initials from full names and displaying them next to the text name causes screen readers to read the initials and then the name redundantly, creating a noisy and confusing experience.
**Action:** Always apply `aria-hidden="true"` to purely decorative visual elements like avatar initials when the same information is immediately available in text format.
