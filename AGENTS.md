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
The site is driven by a hybrid architecture of dynamic Markdown files and structured JSON data to ensure non-technical maintainability.

### Data-Driven Architecture
- **Global Content (`src/_data/site.json`):** Centralized repository for all global UI strings, page lead-ins, header/footer configuration, and branding text.
- **Structured Data:** specialized collections are managed via JSON files in `src/_data/`:
    - **Timeline:** `timeline.json` (Development milestones).
    - **Projects:** `projects.json` (Profiles and external links).
    - **Partners:** `partners.json` (Strategic organizational partners).
    - **Membership:** `membership.json` (Working groups, members, and roles).
    - **News & Events:** `news.json` (Latest updates and ticker items).
- **Rich Content Preference:** For multiline text, articles, or any content requiring rich formatting (bolding, lists, links), **Markdown (.md) MUST be preferred** over JSON to ensure ease of editing and proper rendering.

### Rendered Sections
1. **Header:** Responsive Glassmorphism bar with logo, smooth-scroll navigation, mobile hamburger menu, and discrete Theme/Hero Background switchers. Navigation is built from `site.json` and Markdown `order`.
2. **Hero (`01-hero.md`):** High-impact introduction to CDIF with a dedicated "CDIF Book" visual card, dynamic badges, and clear call-to-action buttons. UI strings are managed in `site.json`.
3. **Information Modules (`02` through `11`):** Atomic Markdown files in the `content/` folder providing the main vertical scroll content (Mission, Profiles, Governance, Tools, etc.).
4. **Sub-Pages:** Dedicated templates (`background.njk`, `projects.njk`, `membership.njk`, `news-events.njk`) that combine Markdown intro blurbs with structured JSON data.
5. **Legal & Privacy:** Fully styled external Markdown files (`privacy.md`, `terms.md`) wrapping legal documentation.
6. **Footer:** Comprehensive site footer driven by `site.json` with external resource links and CODATA attribution.

## 🛠 Technical Stack
- **Static Site Generator:** [11ty (Eleventy) v3.0](https://www.11ty.dev/) utilizing the `HtmlBasePlugin` for sub-directory hosting support.
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) with the Typography plugin. 
- **Interactivity:** [Alpine.js](https://alpinejs.dev/) & [Alpine Persist Plugin](https://alpinejs.dev/plugins/persist).
- **Data Engine:** JSON-driven global and specialized data objects in `src/_data/`.
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) explicitly targeting **GitHub Pages** continuous deployment environments upon changes to the `main` branch.
