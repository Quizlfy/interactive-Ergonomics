## 2024-04-30 - Skip link styling vs no-custom-css
**Learning:** Adding a basic accessibility feature like a 'skip-to-content' link introduces a visual bug if there is no pre-existing CSS to hide it (since custom CSS shouldn't be added to fix it).
**Action:** When working under strict "no custom CSS" constraints, carefully check if the required utility classes exist before implementing a feature that fundamentally relies on CSS for correct visual presentation (like off-screen hiding).
