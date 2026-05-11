## 2026-05-11 - Decorative Elements Announcement Issue
**Learning:** This application heavily relies on purely decorative emojis in cards and initials in avatars, which without `aria-hidden` are redundantly announced by screen readers, creating a noisy experience.
**Action:** When adding or reviewing visual decorators (like emojis or avatar initials derived from text that is also displayed), proactively apply `aria-hidden="true"` to prevent redundant screen reader announcements.
