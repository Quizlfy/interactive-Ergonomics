## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## $(date +%Y-%m-%d) - Adding aria-hidden to redundant/decorative visual elements
**Learning:** Decorative emojis or abbreviated initials presented alongside full names can clutter screen reader output, creating a noisy user experience.
**Action:** Always apply `aria-hidden="true"` to purely decorative visual elements (like emojis in `.icon` wrappers or `.avatar` initials) when their semantic meaning is already conveyed by adjacent text, to ensure a cleaner and more efficient screen reader experience.
