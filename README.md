# CDIF Website (Cross-Domain Interoperability Framework)

**🌍 Live Staging Preview:** [https://codata.github.io/cdif-www-mock/](https://codata.github.io/cdif-www-mock/)

This repository contains the source code for the official website of the **Cross-Domain Interoperability Framework (CDIF)**, a project supported by CODATA.

The website serves as the primary landing page, marketing site, and introduction to the CDIF standard and its various components, acting as a gateway to the official Book and GitHub repositories.

## 🛠️ Technology Stack

This site is built focusing on extreme performance, simplicity, and flexibility:

- **Static Site Generator:** [Eleventy (11ty) v3.0](https://www.11ty.dev/)
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) (using the new `@theme` engine) + Typography Plugin
- **Interactivity:** [Alpine.js](https://alpinejs.dev/)
- **Hosting:** GitHub Pages (via GitHub Actions)

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codata/cdif-www-mock.git
   cd cdif-www
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run start
   ```
   This command starts both the Tailwind CLI (watching for CSS changes) and the Eleventy development server.
   Due to the GitHub Pages configuration, the local site will be available at: `http://localhost:8080/cdif-www-mock/`

4. **Build for production:**
   ```bash
   npm run build
   ```
   This compiles minified CSS and builds all HTML pages into the `_site/` directory.

---

## 📝 Instructions for Content Managers

The website content is strictly separated from the code templates to make it easy for non-developers to update text, add new sections, and manage links.

### Updating the Homepage Sections

The homepage is composed of sequential sections. You will find all the content for the homepage in the `content/` folder. Each file corresponds to a section on the homepage and is written in **Markdown** (`.md`).

1. Navigate to the `content/` directory.
2. Open the Markdown file you want to edit (e.g., `content/02-introduction.md`).
3. The top of each file contains "Frontmatter" between the `---` blocks. This controls metadata:
   ```yaml
   ---
   title: "A Comprehensive Overview"
   order: 2
   ---
   ```
   * **`title`**: The heading displayed for that section.
   * **`order`**: The numerical order in which the section appears on the homepage top-to-bottom. The Hero section is always `order: 1`.

4. The text below the second `---` is the actual body content. You can write standard Markdown here (bolding, lists, links, etc.), and the site will automatically render it beautifully.

### The Hero Section (`content/01-hero.md`)
The Hero section has a slightly different frontmatter configuration since it powers the main buttons:
* **`subtitle`**: The sub-text below the main title.
* **`cta_primary_link`** & **`cta_primary_text`**: Controls the main Call-to-Action button (e.g., pointing to `#section-2`).
* **`cta_secondary_link`** & **`cta_secondary_text`**: Controls the secondary button.

### Adding New Standalone Pages
If you need to add a standalone page (like the Privacy Policy or Terms of Service):
1. Create a new `.md` file in the root of the repository (e.g., `my-new-page.md`).
2. Add the following frontmatter at the top:
   ```yaml
   ---
   layout: page.njk
   permalink: /my-new-page/
   title: My New Page Title
   ---
   ```
3. Write your Markdown content below the frontmatter. The `page.njk` layout will automatically wrap your content in the site's styling and navigation.

---

## 🎨 Themes & Design System

The site features a robust theming engine controlled via Alpine.js and Tailwind CSS v4 variables. 

Users can select different visual themes (Minimalist, Professional, Academic, Global Network) and Hero Background architectures (Orbs, Particles, Cyber Grid, Abstract, Minimal) directly from the top navigation bar. 

To modify the color palette of any theme or to add a new one, developers can edit the `@theme` blocks inside `src/styles/tailwind.css`.

## 🌐 Deployment

Deployment is fully automated via GitHub Actions.
Any code pushed to the `main` branch will trigger the `deploy.yml` workflow, which builds the static files and publishes them to GitHub Pages.

Make sure the repository settings are configured to use **GitHub Actions** as the source for GitHub Pages.
