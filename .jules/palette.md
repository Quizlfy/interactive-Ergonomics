## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-06-07 - Decorative Elements Need aria-hidden
**Learning:** Purely decorative visual elements, such as emojis used as icons or avatar initials displayed alongside a full name, are read aloud by screen readers by default. This creates redundant, noisy, and confusing experiences for users who rely on screen readers.
**Action:** When making UX and accessibility improvements, always apply `aria-hidden="true"` to purely decorative visual elements (like `.icon` emojis or `.avatar` initials next to full names) to prevent screen readers from announcing them.
