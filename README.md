# 🌐 CDIF Website (Cross-Domain Interoperability Framework)

**🌍 Live Staging Preview:** [https://codata.github.io/cdif-www-mock/](https://codata.github.io/cdif-www-mock/)

This repository houses the modern, high-performance information hub for the **Cross-Domain Interoperability Framework (CDIF)**, a CODATA-supported initiative designed to create a "lingua franca" for FAIR implementation across scientific domain boundaries.

---

## 🛠️ Technology Stack

Designed for speed, accessibility, and modern aesthetics:
- **SSG:** [Eleventy (11ty) v3.0](https://www.11ty.dev/)
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) (using the `@theme` engine)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/) + [Persist Plugin](https://alpinejs.dev/plugins/persist)
- **Deployment:** GitHub Actions + GitHub Pages

---

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js (v20+)
- `npm` or `pnpm` (pnpm is recommended for faster installs)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codata/cdif-www-mock.git
   cd cdif-www
   ```

2. **Install dependencies:**
   ```bash
   npm install   # or pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm start     # or pnpm start
   ```
   The local site will be served at `http://localhost:8080/cdif-www-mock/` with full HMR (Hot Module Replacement) for both styles and templates.

4. **Build for production:**
   ```bash
   npm run build # or pnpm run build
   ```

---

## 📂 Project Structure

```bash
├── content/              # Sequential Markdown files for Homepage sections
├── src/
│   ├── _data/            # Structured JSON data (News, Members, Projects, etc.)
│   ├── _includes/        # Layouts (Nunjucks) and Component partials
│   ├── assets/
│   │   ├── images/       # Responsive logos and optimized assets
│   │   └── css/          # Compiled Tailwind CSS (output)
│   └── styles/           # Tailwind source CSS with theme definitions
├── _site/                # Generated static files (git-ignored)
├── eleventy.config.js    # 11ty and Markdown configuration
└── tailwind.config.js    # (Note: v4 uses CSS handles, but some plugins may use JS)
```

---

## 📝 Content Management

For non-technical maintainers, please refer to the **[Maintenance Guide (GUIDE.md)](GUIDE.md)**. 

The site is designed so that non-developers can manage almost all content (News, Working Groups, Projects) via simple JSON and Markdown files, ideally using **AI Agents (GitHub Copilot)** for hands-off updates.

---

## 🎨 Themes & Design System

The site implements a scalable **Tailwind CSS v4** architecture with 5 vibrant theme presets (Minimalist, Professional, Academic, Tech-Forward, Global Network) and 5 animated Hero backgrounds.

To modify themes or backgrounds:
- **Themes:** Edit `@theme` variables in `src/styles/tailwind.css`.
- **Backgrounds:** Logic is managed via Alpine.js in `index.njk` and `base.njk`.

---

## 🌐 Deployment

Deployment is fully automated. Pushing to the `main` branch triggers the GitHub Actions workflow, which builds and deploys to the staging/production URL within minutes.
