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
| **Change page titles/intro text** | `src/_data/site.json` | JSON |
| **Update News & Events** | `src/_data/news.json` | JSON |
| **Add/Edit Projects** | `src/_data/projects.json` | JSON |
| **Add/Edit Strategic Partners** | `src/_data/partners.json` | JSON |
| **Update the History Timeline** | `src/_data/timeline.json` | JSON |
| **Manage Working Groups/Members** | `src/_data/groups.json` | JSON |
| **Home Page Narrative Content** | `content/` folder | Markdown |

---

## 🤖 Option 1: Using AI Agents (GitHub Copilot) - Recommended

If you have access to **GitHub Copilot** (either on the GitHub website or in VS Code), you can perform updates by simply asking the AI to do the work for you. This is the **most efficient, hands-off way** to handle repetitive updates or complex data files.

> [!NOTE]
> GitHub Copilot requires a [subscription](https://github.com/features/copilot/plans) ($10/month), and is **free for individuals** who contribute to popular open-source projects. 

### How to use it:
1.  **Open the Chat**: Look for the Copilot icon (a small robot head or sparkle) in your side panel or at the bottom of the screen.
2.  **Give an Instruction**: Type what you want to achieve in plain English. For example:
    *   *"Add a new event to news.json for the 'FAIR Data Symposium' happening on May 10th, 2026."*
    *   *"Update groups.json to move Pascal Heus to the Steering Working Group."*
    *   *"Rephrase the second paragraph of 03-profiles.md to be more concise."*
3.  **Review and Apply**: Copilot will show you the exact code changes. You can then click **"Insert"** or **"Apply"** to update the file automatically.

**Why use this?** AI agents are excellent at maintaining perfect JSON formatting (commas and braces), so you are much less likely to trigger a "Red X" error.

---

## 🛠 Option 2: Editing Directly on GitHub

This is the easiest way to make small changes without installing anything on your computer if you prefer to edit text manually.

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

## 💻 Option 3: Editing Locally (For Power Users)

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

*   **AI Assistance**: Leverage **GitHub Copilot** (see Option 1) to automate updates. It can write paragraphs, format complex lists, and fix syntax errors instantly.
*   **Images**: Put new images in `src/assets/images/`. Then refer to them as `/assets/images/filename.png` in your files.
*   **Commits and Branches**: Think of a **Commit** as a "Save Point." Think of a **Branch** as a "Draft." Always work on a draft branch so you don't break the live site!

---

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
*   **File**: `src/_data/groups.json`
*   **Adding a Person**: Add them to the `"people"` object first with their details.
*   **Assigning Roles**: Find the group in `"workingGroups"` and add the person's ID (e.g., `"jane-doe"`) to the correct role array: `"chair"`, `"cochair"`, `"secretary"`, `"member"`, or `"observer"`.
    ```json
    "chair": ["arofan"],
    "member": ["pascal", "jane-doe"]
    ```

### 5. Quick Text Edits on the Home Page
*   **Location**: `content/` folder.
*   **Action**: Each section of the home page is its own file (e.g., `03-profiles.md`, `05-governance.md`).
*   **Editing**: Open the file, find the text you want to change, and edit it just like a Word document. Save the file, and the update will appear in that specific section of the homepage.

### 6. Updating the Project History Timeline
*   **File**: `src/_data/timeline.json`
*   **Action**: This file is a list of milestones. Add a new block at the top for the most recent events.
    ```json
    {
      "period": "2026",
      "title": "Global Adoption Phase",
      "description": "CDIF modules see widespread adoption across five major scientific continents.",
      "side": "right"
    },
    ```
*   **Tip**: Use `"side": "left"` or `"side": "right"` to alternate the bubbles on the timeline for better visual balance.

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

## ⏪ Rolling Back Changes

If a change was merged and it broke something on the live site, don't panic! GitHub makes it very easy to "undo" a mistake.

### How to Revert a Pull Request:
1.  Go to the **"Pull requests"** tab on GitHub.
2.  Click on the **"Closed"** list to find the update that caused the problem.
3.  Scroll down to the bottom of that specific Pull Request.
4.  You will see a button that says **"Revert"**. Click it.
5.  This will create a *new* Pull Request that exactly reverses your changes.
6.  **Merge** this new Revert PR. The site will automatically rebuild and return to its previous working state within minutes.

---

## 🆘 Need Help?
If the site stops working after an edit, check for:
1.  Missing quotation marks in JSON.
2.  Missing commas between items in a list.
3.  Misspelled filenames.

If you are stuck, open an **Issue** on the GitHub repository and a technical maintainer will assist you.
