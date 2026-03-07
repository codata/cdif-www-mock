# CODATA CDIF Website Project

This project aims to create a modern, high-performance website for the **CODATA Cross-Domain Information Framework (CDIF)**. The site serves as the primary information hub for researchers and organizations adopting the framework.

## 🎯 Objectives
- **Maintainability:** Easy for non-technical users to update via Markdown.
- **Responsiveness:** Flawless experience across mobile, tablet, and desktop.
- **Performance:** Optimized for speed and low-latency delivery.
- **Accessibility:** Adherence to web accessibility standards.
- **Design Excellence:** Showcase the framework through premium, professional aesthetics.

## 🎨 Branding & Design
The design is informed by concepts generated in **Stitch Project [7705784665390816008](https://stitch.google.com/projects/7705784665390816008)**.

### Reference Mockups
- **Location:** `mockups/` directory.
- **Key Assets:**
    - `stitch_01_light.png`: Architecture for the light theme.
    - `stitch_01_dark.png`: Architecture for the dark theme.
    - `cdif+300-transparent.png`, `cdif+480-transparent.png`, `cdif+640-transparent.png`: Official CDIF logos (transparent background).

### Design Guidelines
- **Clean Separation:** Content must be strictly separated from branding and styling.
- **Theme Variations:** Generate **3-5 theme variations** (light/dark pairs) based on:
    - **Minimalist:** Focus on clarity and typography.
    - **Professional:** Corporate and structured grid design.
    - **Tech-Forward:** Modern interface with subtle gradients and interactions.
- **Interactivity:** Themes should be selectable by the user in real-time.

## 📝 Content Strategy
The site is initially a single-page landing site but built to be scalable.

### Required Sections
1. **Header:** Logo, navigation menu, and social media/community icons.
2. **Hero:** High-impact introduction to CDIF with a clear call-to-action.
3. **Introduction:** Deep dive into the mission and goals of CDIF.
4. **Tools & Implementations:** Showcase of existing CDIF tools.
5. **Core CDIF Profiles:** Overview of the framework's architectural components.
6. **Future Directions:** Roadmap and upcoming framework evolutions.
7. **To Learn More:** Resource links, documentation, and community portals.
8. **Footer:** Secondary navigation, social links, Privacy Policy, and Terms of Use.

### Content Reference
- **Primary Source:** `references/cdif_book_introduction.md`
- **Mapping:**
    - "Introducing CDIF" section -> **Introduction** section of the landing page.
    - "Five core profiles" list -> **Core CDIF Profiles** section.
    - "Who can use the CDIF?" -> **Target Audience** (within About or Introduction).
    - "How to contribute" -> **Contact/Community** section.

## 🛠 Technical Stack
- **Static Site Generator:** [11ty (Eleventy)](https://www.11ty.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/)
- **Deployment:** GitHub Actions targeting automated continuous deployment.
