## 2024-04-25 - Interactive Divs Need Explicit A11y Attributes
**Learning:** In simple static HTML presentations, clickable interactive `div` elements (like `.card` or `.burger`) often rely solely on `onclick` handlers. This causes major accessibility regressions: they are unreachable by keyboard (no `tabindex`), have no focus state for keyboard users, and are invisible as interactive components to screen readers (missing `role="button"` and `aria-expanded`).
**Action:** When auditing or implementing interactive `div` or `span` components, always add `role="button"`, `tabindex="0"`, a keyboard event listener (`onkeydown` checking for Enter/Space), and `:focus-visible` styles to ensure full parity with native `<button>` elements.

## 2026-05-02 - Stateful Accordion Helper Text
**Learning:** Users often don't know how to collapse an accordion if the helper text remains 'tap to learn more' when expanded.
**Action:** Use conditional logic to update helper text based on the 'open' state (e.g. changing to 'tap to close') to improve intuitive interaction.

## 2026-05-02 - Mobile Navigation ARIA State
**Learning:** When mobile navigation menus are closed via an internal link click rather than the toggle button, the toggle button's `aria-expanded` state can become desynced from the actual visual state, confusing screen reader users.
**Action:** Always ensure that any action that closes a mobile menu also explicitly sets the toggle button's `aria-expanded` attribute to 'false'.
