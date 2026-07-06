## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-05-20 - Redundant Screen Reader Announcements for Initials
**Learning:** When displaying user initials visually next to their full name (like an avatar), screen readers will announce the initials (e.g. "A A") right before the full name ("Abdulrahman Ali"), creating a redundant and confusing auditory experience.
**Action:** Always apply `aria-hidden="true"` to purely decorative visual elements, such as avatar initials displayed alongside full names, to prevent noisy screen reader announcements.
