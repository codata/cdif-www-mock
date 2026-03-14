# 📘 CDIF Website Maintenance Guide

Welcome! This guide is designed for non-technical maintainers of the **CODATA Cross-Domain Interoperability Framework (CDIF)** website. You don't need to know HTML, CSS, or complex programming to keep the site up to date.

## 🚀 Quick Start: The "Editing Rule"

The website is built so that almost every piece of text is stored in simple **Markdown** (.md) or **JSON** (.json) files. 

*   **Markdown (`.md`)**: Best for long text, paragraphs, and articles. It looks almost like plain text.
*   **JSON (`.json`)**: Best for structured lists (like news, partners, or people). It uses "labels" and "values."

---

## 📂 Where is the Content?

| Goal | Where to look | File Type |
| :--- | :--- | :--- |
| **Change page intro text** | `src/_data/site.json` | JSON |
| **Update the News/Events** | `src/_data/news.json` | JSON |
| **Add a new Project** | `src/_data/projects.json` | JSON |
| **Update Members/Groups** | `src/_data/membership.json` | JSON |
| **Change Home Page text** | `content/` folder | Markdown |

---

## 🛠 Option 1: Editing Directly on GitHub (Recommended)

This is the easiest way to make small changes without installing anything on your computer.

1.  **Navigate** to the file you want to change on GitHub.
2.  Click the **Pencil icon** (Edit this file) in the top right.
3.  **Make your changes**. If you are editing a JSON file, be careful to keep the quotes `"` and commas `,` in place!
4.  **Preview** your changes using the "Preview" tab if available (works for Markdown).
5.  **Commit Changes**:
    *   Scroll to the bottom.
    *   Write a short summary (e.g., "Updated news for April").
    *   Choose **"Create a new branch for this commit and start a pull request."** (This is safer than editing the main site directly).
6.  **Pull Request (PR)**: Click "Propose changes." A technical lead will review your change and "Merge" it, which makes it live on the website.

---

## 💻 Option 2: Editing Locally (For Power Users)

If you want to see your changes exactly as they will look before publishing, follow these steps:

### 1. Setup
*   **Install Node.js**: Download and install it from [nodejs.org](https://nodejs.org/).
*   **Git**: Ensure you have Git installed.

### 2. Clone the Repository
Open your terminal (Command Prompt or Terminal app) and run:
```bash
git clone https://github.com/Cross-Domain-Interoperability-Framework/cdif-www.git
cd cdif-www
```

### 3. Install and Run
Run these commands to install the website tools and start a local preview:
```bash
npm install
npm start
```
The terminal will give you a link (usually `http://localhost:8080`). Open this in your browser. Every time you save a file, the site will refresh automatically!

---

## 📝 How to Edit Files

### Editing Markdown (.md)
Markdown is easy. Use `#` for titles and `*` for bullets.
```markdown
# My New Title
This is a paragraph.

*   This is a bullet point.
*   [This is a link](https://example.com)
```

### Editing JSON (.json)
Keep the structure intact. If you miss a comma `,` at the end of a line, the site might break.
```json
{
  "name": "New Tool",
  "description": "Short description here",
  "link": "https://link.com"
}
```

---

## 💡 Pro Tips

*   **GitHub Copilot**: If you see "sparkle" icons or suggested text appearing while you type, that's Copilot! You can hit `Tab` to accept its suggestions. It's great for writing descriptions or formatting JSON lists.
*   **Images**: Put new images in `src/assets/images/`. Then refer to them as `/assets/images/filename.png` in your files.
*   **Commits and Branches**: Think of a **Commit** as a "Save Point." Think of a **Branch** as a "Draft." Always work on a draft branch so you don't break the live site!

---

## 🎨 Concrete Examples

## 🎨 Concrete Examples

### 1. Announcing News & Events
*   **File**: `src/_data/news.json`
*   **Action**: To add a news item, find the first `{` at the top and paste a new block above it:
    ```json
    {
      "id": "workshop-2024",
      "date": "2024-06-12",
      "type": "event",
      "title": "Registration Open for Global Workshop",
      "summary": "Join us for a 3-day deep dive into...",
      "link": "https://example.com/register",
      "tags": ["Workshop", "Data Sharing"]
    },
    ```
*   **Tip**: Ensure every item except the very last one in the file ends with a comma `,`.

### 2. Adding a Project or Strategic Partner
*   **Files**: `src/_data/projects.json` (for the grid) or `src/_data/partners.json` (for logos at the bottom).
*   **Action**: Copy an existing block and change the details.
*   **Logos**: If you have a logo image, upload it to `src/assets/images/` and use that path (e.g., `/assets/images/logo.png`). If you leave it blank `""`, the site will automatically show a professional placeholder icon.

### 3. Updating the Technical Tools Registry
*   **File**: `src/_data/tools.json`
*   **Action**: Add or edit tools here. Include the `license` (e.g., "MIT" or "CC-BY-4.0") to help users understand how they can use the tool.
    ```json
    {
      "name": "Metadata Validator",
      "description": "A new tool for checking CDIF compliance.",
      "link": "https://github.com/...",
      "license": "Apache-2.0",
      "logo": ""
    }
    ```

### 4. Managing Working Groups & Members
*   **File**: `src/_data/membership.json`
*   **Adding a Person**: Add them to the `"people"` list first with a unique ID (like `"jane-doe"`).
*   **Assigning to Group**: Find the `"workingGroups"` list and add that ID (e.g., `"jane-doe"`) to the `"members"` array of the correct group.
    ```json
    "members": ["arofan", "simcox", "jane-doe"]
    ```

### 5. Quick Text Edits on the Home Page
*   **Location**: `content/` folder.
*   **Action**: Each section of the home page is its own file (e.g., `03-profiles.md`, `05-governance.md`).
*   **Editing**: Open the file, find the text you want to change, and edit it just like a Word document. Save the file, and the update will appear in that specific section of the homepage.

---

---

## 🛡️ Automated Safety Checks (The "Red X")

To prevent accidental errors (like a missing comma in a JSON file) from breaking the live website, we have an automated **Validation Guard** in place.

### What happens when you propose a change?
1. After you click **"Propose changes,"** a computer will automatically try to build the website in the background.
2. **If everything is correct**: You will see a green checkmark next to your change. This means it is safe to merge.
3. **If there is an error**: You will see a **Red X**. Don't worry! This is a safety feature, not a failure. 

### How to fix a "Red X":
*   Click on **"Details"** next to the Red X.
*   Look for the **"Verify Build"** step. It will usually tell you exactly which file has the error.
*   Common culprits are:
    *   `Unexpected token } in JSON`: You likely missed a comma `,` between items.
    *   `Unexpected end of JSON input`: You might have deleted a bracket `]` or `}`.
*   Simply edit your file again to fix the error, and the "Red X" will automatically try to turn green!

---

## 🆘 Need Help?
If the site stops working after an edit, check for:
1.  Missing quotation marks in JSON.
2.  Missing commas between items in a list.
3.  Misspelled filenames.

If you are stuck, open an **Issue** on the GitHub repository and a technical maintainer will assist you.
