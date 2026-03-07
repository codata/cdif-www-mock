# CODATA CDIF Website Project

This project aims to create a modern, high-performance website for the **CODATA Cross-Domain Interoperability Framework (CDIF)**. The site serves as the primary information hub for researchers and organizations adopting the framework.

## 🎯 Objectives
- **Maintainability:** Easy for non-technical users to update via Markdown content separation.
- **Responsiveness:** Flawless experience across mobile, tablet, and desktop, including cohesive mobile navigation.
- **Performance:** Optimized for speed and low-latency delivery using a modern static stack.
- **Accessibility:** Adherence to web accessibility standards and high-contrast adaptability.
- **Design Excellence:** Showcase the framework through premium, professional aesthetics featuring rich interactions, smooth transitions, and dynamic theming.

## 🎨 Branding & Design
The design architecture is deeply interactive, utilizing a unified theming system and modern CSS properties like `color-mix()` for organic "Glassmorphism" effects across layouts. 

### Core Asssets
- **Location:** `src/assets/images/` directory.
- **Key Assets:** `cdif+300-transparent.png`, `cdif+480-transparent.png`, `cdif+640-transparent.png` (Official responsive logos).

### Design Guidelines & Implementations
- **Clean Separation:** Content is strictly separated into the `content/` folder, processed dynamically via Eleventy Collections based on frontmatter `order`.
- **Theme Variations:** The site implements a scalable Tailwind CSS v4 `@theme` architecture. Users can immediately toggle between:
    - **Minimalist (Light/Dark):** Focus on clarity, typography, and pure contrast.
    - **Professional (Light/Dark):** Corporate, structured grid design with stark edges.
    - **Tech-Forward (Dark):** Deep blacks, slate accents, and a modern interface.
    - **Academic (Light):** Muted scholarly tones (sepia/ivory) and classic typography.
    - **Global Network (Dark):** Vibrant, high-contrast cyan/teal theme evoking data nodes.
- **Dynamic Hero Backgrounds:** The Hero section features 5 distinct, animated SVG/CSS backgrounds (Orbs, Particles, Cyber Grid, Abstract, Minimal) toggleable by the user.
- **State Persistence:** User aesthetic preferences (Theme and Background) are gracefully remembered across sessions via the Alpine.js `$persist` plugin via LocalStorage.
- **CODATA Alignment:** The parent organization (CODATA) is prominently linked and attributed in the Hero, Footer, and explicitly within component descriptors.

## 📝 Content Strategy
The site is driven by a single-page scrolling landing site logic, populated by atomic markdown files.

### Rendered Sections
1. **Header:** Responsive Glassmorphism bar with logo, smooth-scroll navigation, mobile hamburger menu, and discrete Theme/Hero Background switchers.
2. **Hero (`01-hero.md`):** High-impact introduction to CDIF with a dedicated "CDIF Book" visual card, dynamic badges, and clear call-to-action buttons.
3. **Information Modules (`02` through `06`):**
    - Introduction & Mission
    - Core CDIF Profiles
    - Tools & Implementations
    - Future Directions
    - Community Resources
4. **Standalone Pages:** Fully styled external Markdown files wrapping legal documentation (Privacy Policy, Terms of Use) via the `page.njk` layout.
5. **Footer:** Secondary navigation, direct links to Zenodo Reports, Book, GitHub Org, and CODATA roots.
6. **Reviewer Features:** A fixed floating UI action button is present across the mock to drive UX/UI feedback straight to the GitHub Issues portal.

## 🛠 Technical Stack
- **Static Site Generator:** [11ty (Eleventy) v3.0](https://www.11ty.dev/) utilizing the `HtmlBasePlugin` for sub-directory hosting support.
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) with the Typography plugin.
- **Interactivity:** [Alpine.js](https://alpinejs.dev/) & [Alpine Persist Plugin](https://alpinejs.dev/plugins/persist).
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) explicitly targeting **GitHub Pages** continuous deployment environments upon changes to the `main` branch.
