## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2026-05-29 - Hide decorative avatars and emojis to reduce screen reader noise
**Learning:** When displaying visual elements like user avatars with initials or illustrative emojis alongside descriptive text, screen readers will announce the initials/emojis as well as the accompanying text, creating redundant noise for the user.
**Action:** Add `aria-hidden="true"` to visual elements that are purely decorative, especially when the information they convey (like a user's initials) is immediately stated in the accompanying accessible text (like the user's full name).
