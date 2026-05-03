## 2024-03-24 - Screen Reader Redundancy in Avatars
**Learning:** Decorative elements that visually accompany text (like avatar circles containing user initials right next to their full name) create redundant and annoying noise for screen reader users when left visible to accessibility trees.
**Action:** Always apply `aria-hidden="true"` to visual embellishments that duplicate information already present as sibling text.
