## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-05-30 - Decorative Elements Should Be Hidden from Screen Readers
**Learning:** Decorative emojis in `<div class="icon">` and name initials in team `<div class="avatar">` were being unnecessarily read by screen readers, creating repetitive and distracting noise when navigating because the actual content (section title or full name) immediately follows.
**Action:** When adding purely decorative elements like repeating icons or generated initials, always use `aria-hidden="true"` on their container to improve the screen reader experience by hiding redundant visual flair.
