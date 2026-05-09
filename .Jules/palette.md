## 2026-05-09 - Decorative Elements and Screen Readers
**Learning:** In purely decorative elements, like generated avatars and emojis, failing to use `aria-hidden='true'` leads to noisy, redundant screen reader announcements that degrade the user experience.
**Action:** Always add `aria-hidden='true'` to visual elements that don't add contextual meaning when the information is already conveyed through text.
