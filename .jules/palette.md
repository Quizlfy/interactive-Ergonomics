## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2026-06-25 - Redundant Screen Reader Announcements for Decorative Avatars
**Learning:** Screen readers announce avatar initials redundantly when they are placed adjacent to the full name, causing unnecessary noise for users relying on assistive technologies.
**Action:** Apply `aria-hidden="true"` to avatar initials and similar purely decorative visual elements to prevent redundant announcements and improve the screen reader experience.
