# Yanai Elazar's Academic Website Repository

This repository contains the source code for Yanai Elazar's academic website, hosted at [yanaiela.github.io](https://yanaiela.github.io). The website showcases research publications, presentations, blog posts, and other academic activities.

## Repository Structure

```
yanaiela.github.io/
├── index.html              # Main homepage
├── publications.html       # Publications page
├── talks.html             # Invited talks page
├── group.html             # Research group page
├── bibtex/               # BibTeX citation files
├── papers/               # PDF files of papers
├── presentations/        # Presentation slides and posters
├── posts/               # Blog posts and articles
├── figs/                # Images and figures
├── css/                 # Stylesheets
├── js/                  # JavaScript files
├── vendor/              # Third-party libraries (Bootstrap, jQuery)
└── useful/              # Utility files
```

## Website Features

- **Responsive Design**: Built with Bootstrap for mobile-friendly viewing
- **Publications Management**: Organized by year with links to papers, code, and resources
- **BibTeX Integration**: Each publication has an associated BibTeX file for citations
- **Blog Posts**: Academic blog posts and tutorials
- **Presentations**: Collection of slides and posters from conferences and talks
- **Research Group**: Information about current and past group members

## Adding a New Paper

Follow these steps to add a new publication to the website:

### 1. Prepare Required Files

Before adding the paper to the website, gather the following:

- **Paper PDF** (optional): If available, place in the `papers/` directory
- **BibTeX citation**: Create a `.bib` file in the `bibtex/` directory
- **Code repository link** (optional)
- **Demo/webpage link** (optional)
- **Presentation slides** (optional): Place in the `presentations/` directory

### 2. Create BibTeX File

1. Create a new `.bib` file in the `bibtex/` directory with a descriptive filename (e.g., `my-paper-title.bib`)
2. Format the BibTeX entry following this template:

```bibtex
@inproceedings{unique-key-name,
  title={Your Paper Title},
  author={Author One and Author Two and Yanai Elazar and Author Four},
  booktitle={Conference/Journal Name},
  year={2025}
}
```

**Important Notes:**
- Use a unique key name for the citation
- Ensure "Yanai Elazar" appears in the author list
- Use the full conference/journal name

### 3. Add Paper to Publications Page

Edit `publications.html` and add your paper entry in the appropriate year section:

```html
<p>
  <h5><b>Your Paper Title</b></h5>
  Author One, Author Two, <u><i>Yanai Elazar</i></u>, Author Four<br/>
  Conference/Journal Name Year<br/>
  <a href="https://arxiv.org/abs/paper-id"><span class="badge badge-pill badge-primary">paper</span></a>
  <button type="button" class="badge badge-pill badge-warning btn my-1 mr-1 btn-sm js-cite-modal" data-filename="/bibtex/my-paper-title.bib">bibtex</button>
  <a href="https://github.com/username/repo"><span class="badge badge-pill badge-success">code</span></a>
  <a href="https://demo-url.com"><span class="badge badge-pill badge-demo">demo</span></a>
  <a href="presentations/my-paper-slides.pdf"><span class="badge badge-pill badge-slides">slides</span></a>
</p>
```

### 4. Badge Types and Colors

Use these standard badge types for consistency:

- `badge-primary` (blue): Paper links (arXiv, ACL Anthology, etc.)
- `badge-warning` (yellow): BibTeX citations
- `badge-success` (green): Code repositories
- `badge-danger` (red): Datasets and resources
- `badge-demo` (teal): Live demos and project pages
- `badge-slides` (purple): Presentation slides and posters
- `badge-project` (orange): Blog posts and project pages
- `badge-dark` (dark): Paper type indicators (long, short)
- `badge-secondary` (gray): Additional paper type indicators

### 5. Author Name Formatting

- **Yanai Elazar's name**: Always format as `<u><i>Yanai Elazar</i></u>` (underlined and italicized)
- **Equal contribution**: Use asterisks (*) before author names: `*Author One, *Author Two`
- **Corresponding author**: Use appropriate notation if needed

### 6. Special Formatting Examples

**Award-winning paper:**
```html
Conference Name 2025 🏆 Best Paper Award<br/>
```

**arXiv preprint:**
```html
arxiv<br/>
```

**Long/Short paper indicators:**
```html
<span class="badge badge-pill badge-dark">long</span>
<span class="badge badge-pill badge-secondary">short</span>
```

### 7. File Organization Tips

- **Paper PDFs**: Use descriptive filenames (e.g., `bias-amplification-paradox.pdf`)
- **BibTeX files**: Match the filename to the paper topic (e.g., `bias-amplification-paradox.bib`)
- **Presentations**: Include conference/venue in filename (e.g., `my-paper-emnlp24.pdf`)

### 8. Testing Your Changes

1. Open `publications.html` in a web browser to verify formatting
2. Check that all links work correctly
3. Ensure the BibTeX modal displays properly
4. Verify responsive design on mobile devices

### 9. Year Organization

Papers are organized by publication year in reverse chronological order (newest first). Add new papers to the appropriate year section, or create a new year section if needed:

```html
<h3>2025</h3>
<!-- Papers for 2025 -->

<h3>2024</h3>
<!-- Papers for 2024 -->
```

## Development Setup

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yanaiela/yanaiela.github.io.git
cd yanaiela.github.io
```

2. Install dependencies (optional, for advanced features):
```bash
npm install
```

3. Start local development server (optional):
```bash
npm start
```

4. Or simply open `index.html` in your web browser for basic testing.

### Dependencies

The website uses:
- **Bootstrap 4**: CSS framework for responsive design
- **jQuery**: JavaScript library for interactive features
- **Font Awesome**: Icon fonts
- **Academicons**: Academic-specific icons
- **MathJax**: Mathematical notation rendering
- **Highlight.js**: Code syntax highlighting

## Maintenance Notes

- The website is automatically deployed via GitHub Pages when changes are pushed to the `main` branch
- All external links should be verified periodically
- BibTeX files should be validated for proper formatting
- Images should be optimized for web delivery
- The website includes Google Analytics tracking

## Contact

For questions about the website or repository, contact Yanai Elazar or create an issue in the repository.