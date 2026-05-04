
## 2024-05-04 - Screen Reader Noise from Decorative Elements
**Learning:** Purely decorative emojis (like those used as icons in cards) and duplicate visual information (like avatar initials next to a full name) create a very noisy and confusing experience for screen reader users when left visible to ARIA.
**Action:** Always apply `aria-hidden="true"` to purely decorative visual elements (like `class="icon"` emojis and avatar initials) to hide them from the accessibility tree, especially when the information they convey is immediately available in adjacent text.
