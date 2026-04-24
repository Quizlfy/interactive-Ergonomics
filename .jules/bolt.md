## 2024-04-24 - Batching DOM Updates
**Learning:** Found a loop continuously appending to `innerHTML`, forcing the browser to serialize and re-parse the DOM on each iteration.
**Action:** Use `.map().join('')` or string concatenation to build the HTML string entirely before performing a single `innerHTML` assignment.
