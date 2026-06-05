## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-06-05 - Avoid Redundant Screen Reader Announcements
**Learning:** Screen readers will announce purely decorative elements or visual indicators like avatar initials even when the full name is provided immediately afterwards. This creates a noisy, repetitive, and confusing experience for users relying on assistive technologies.
**Action:** Always apply `aria-hidden="true"` to visual elements that are purely decorative or redundant, such as avatar initials next to a full name or decorative emojis, to prevent screen readers from announcing them.
