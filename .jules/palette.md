## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2024-05-17 - Hiding Decorative UI Elements from Screen Readers
**Learning:** Purely decorative visual elements that derive their content from text that is already present in the UI (like avatar initials extracted from a full name that is displayed immediately next to it) cause redundant and noisy announcements for screen reader users.
**Action:** Always apply `aria-hidden="true"` to purely decorative visual elements (like avatar initials) to prevent screen readers from reading duplicate information and to provide a cleaner audio experience.
