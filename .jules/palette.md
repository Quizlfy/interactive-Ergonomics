## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-06-26 - Decorative Avatars Need aria-hidden
**Learning:** Purely decorative visual elements like avatar initials placed next to full names create redundant and noisy screen reader announcements if left exposed to the accessibility tree.
**Action:** When implementing avatars or decorative UI emojis alongside their descriptive text, always apply `aria-hidden="true"` to prevent screen reader redundancy and ensure a cleaner auditory experience.
