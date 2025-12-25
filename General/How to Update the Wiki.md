# How to Update the Wiki

This guide explains how to create and edit wiki pages. Every team member can contribute to keeping our wiki up-to-date!

## Quick Start

There are two ways to update the wiki:
1. **Web-based editing** (easiest for small changes)
2. **VSCode editing** (best for larger changes or creating multiple pages)

---

## Method 1: Web-Based Editing (GitHub.com)

This is the fastest way to make small edits or fix typos.

### Editing an Existing Page

1. Navigate to the wiki page you want to edit on [supernurds.com/wiki](https://www.supernurds.com/wiki)
2. Click the pencil icon (✏️) in the top right corner of the page
   - This will take you directly to the file on GitHub
3. Click the pencil icon (Edit this file) on GitHub to enter edit mode
4. Make your changes in the editor using [Markdown syntax](#markdown-basics)
5. Scroll down to the "Commit changes" section
6. Write a brief description of what you changed (e.g., "Fix typo in setup instructions")
7. Choose one of the following:
   - **If you have write access:** Select "Commit directly to the main branch" (for small fixes)
   - **If you don't have write access:** Select "Create a new branch for this commit and start a pull request"
8. Click "Commit changes" or "Propose changes"
9. If you created a pull request, click "Create pull request" on the next page

Your changes will be reviewed and merged by a team lead!

### Creating a New Page (Web)

1. Go to the [Wiki repository](https://github.com/FRCTeam3255/Wiki)
2. Navigate to the folder where you want to create the page (e.g., Software, Competition, etc.)
3. Click "Add file" → "Create new file"
4. Name your file with `.md` extension (e.g., `New Guide.md`)
5. Add your content using [Markdown syntax](#markdown-basics)
6. Follow steps 5-9 from "Editing an Existing Page" above

---

## Method 2: VSCode Editing (Recommended for Multiple Changes)

This method is better when you're creating multiple pages or making larger changes.

### First-Time Setup

1. **Install Required Software:**
   - [Visual Studio Code](https://code.visualstudio.com/)
   - [GitHub Desktop](https://desktop.github.com/)

2. **Clone the Wiki Repository:**
   - Follow the guide in [Downloading GitHub Projects](../GitHub/Downloading%20Projects.md)
   - Clone the `Wiki` repository from [FRCTeam3255/Wiki](https://github.com/FRCTeam3255/Wiki)

3. **Open in VSCode:**
   - Right-click the Wiki folder in GitHub Desktop
   - Select "Open in Visual Studio Code"

### Making Changes in VSCode

1. **Open or Create a File:**
   - Navigate to the appropriate folder in the Explorer panel
   - Open an existing `.md` file to edit
   - Or create a new file: Right-click folder → "New File" → name it with `.md` extension

2. **Edit Your Content:**
   - Write your content using [Markdown syntax](#markdown-basics)
   - VSCode will show a preview (press `Ctrl+Shift+V` on Windows or `Cmd+Shift+V` on Mac)

3. **Add Images (Optional):**
   - Take a screenshot and copy it to your clipboard
   - In VSCode, paste the image (`Ctrl+V` or `Cmd+V`) where you want it
   - The image will automatically be saved to the `.images` folder
   - The correct markdown image link will be inserted

4. **Save Your Changes:**
   - Press `Ctrl+S` (Windows) or `Cmd+S` (Mac) to save

### Committing and Pushing Your Changes

Once you're happy with your changes, you need to upload them to GitHub:

1. **Open GitHub Desktop:**
   - You should see your changed files listed
   
2. **Review Your Changes:**
   - Click on each file to see what changed
   - Make sure everything looks correct

3. **Commit Your Changes:**
   - Write a brief summary in the "Summary" field (e.g., "Updated software setup guide")
   - Optionally add more details in the "Description" field
   - Click "Commit to main" (or your branch name)

4. **Push to GitHub:**
   - Click "Push origin" to upload your changes

5. **Create a Pull Request (if needed):**
   - If you're on a branch (not main), click "Create Pull Request"
   - Fill out the description explaining your changes
   - Click "Create pull request"

**Note:** Once your changes are merged into the `main` branch, the wiki website will automatically update within a few minutes!

---

## Markdown Basics

Markdown is a simple way to format text. Here are the most common elements:

### Headings
```markdown
# Main Heading (H1)
## Subheading (H2)
### Sub-subheading (H3)
```

### Text Formatting
```markdown
**bold text**
*italic text*
~~strikethrough~~
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2
  - Sub-bullet

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Link text](https://example.com)
[Link to another wiki page](../Software/Conventions.md)
```

### Images
```markdown
![Image description](../.images/folder/image.png)
```

### Code Blocks
````markdown
```python
def hello():
    print("Hello, World!")
```
````

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Admonitions (Special Boxes)
```markdown
!!! note "Title"
    This creates a highlighted note box.

!!! warning
    This creates a warning box.

!!! tip
    This creates a tip box.
```

---

## File Organization

- Place files in the appropriate folder based on topic:
  - `Software/` - Programming guides and code documentation
  - `Mechanical/` - Mechanical design and build guides
  - `Electrical/` - Wiring, electrical components, and diagrams
  - `Competition/` - Competition procedures and checklists
  - `Build Season/` - Build season specific documentation
  - `General/` - General team information and cross-functional guides
  - `GitHub/` - GitHub and version control guides
  - etc.

- Use clear, descriptive file names (e.g., `Setting Up Driverstation.md`)
- Store images in `.images/` folder (this happens automatically with VSCode paste)

---

## Tips for Good Wiki Pages

1. **Be Clear and Concise:** Write as if you're explaining to someone new
2. **Use Headings:** Break content into sections with clear headings
3. **Add Screenshots:** Images help clarify steps (especially for software guides)
4. **Include Context:** Explain *why* something is done, not just *how*
5. **Keep it Updated:** If you notice outdated information, fix it!
6. **Test Your Instructions:** Try to follow your own guide to make sure it works

---

## Getting Help

- **Markdown Help:** [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- **GitHub Help:** See [Downloading GitHub Projects](../GitHub/Downloading%20Projects.md)
- **Ask a Team Lead:** Don't hesitate to ask questions!

---

## Review Process

All changes go through a review process:

1. You create changes and submit a Pull Request
2. Team leads review your changes
3. If approved, changes are merged
4. The wiki website automatically updates

This ensures all information is accurate and high-quality!
