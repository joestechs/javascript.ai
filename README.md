# javascript.ai

> A practical, simplified-English, code-heavy JavaScript reference for developers who want to master JS from first principles to production.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green.svg)]()
[![Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-purple.svg)]()

---

## What is this?

**javascript.ai** is an open-source, multi-page educational website that teaches JavaScript deeply and practically. It is written in simplified English, packed with 200+ code examples, 85+ interview questions with answers, and 12 hands-on projects.

Unlike scattered blog posts or dense specification documents, this guide connects every concept—from `var` vs `let` to ES Modules, from the Event Loop to Proxy objects—in one cohesive, navigable resource.

---

## Live Demo

🌐 **https://joestechs.github.io/javascript.ai**

*(Replace `yourusername` with your actual GitHub username after enabling GitHub Pages)*

---

## Project Structure

```
javascript.ai/
│
├── index.html              # Homepage with curriculum overview
├── fundamentals.html       # Variables, types, coercion, operators, control flow
├── functions.html          # Functions, scope, closures, 'this', IIFE
├── objects-classes.html    # Objects, prototypes, ES6 classes, private fields
├── async.html              # Event loop, callbacks, Promises, async/await
├── modules.html            # ESM, CommonJS, dynamic imports, tree shaking
├── dom.html                # DOM selection, events, delegation, performance
├── advanced.html           # Generators, symbols, Proxy, WeakMap, memoization
├── testing.html            # Jest, matchers, mocking, coverage
├── frameworks.html         # React, Vue, Angular, Svelte, Node.js, bundlers
├── interview.html          # 85+ accordion Q&As + coding challenges
├── projects.html           # 6 practical projects with full code
│
├── css/
│   └── style.css           # Custom CSS variables, responsive grid, syntax highlighting
│
├── js/
│   └── main.js             # Theme toggle, mobile menu, copy buttons, Q&A accordion
│
└── README.md               # You are here
```

---

## Curriculum Overview

| Chapter | Topic | Key Concepts |
|---------|-------|-------------|
| 01 | **Fundamentals** | `var`/`let`/`const`, 8 data types, coercion, truthiness, strict mode |
| 02 | **Functions & Scope** | Declarations vs expressions, arrows, closures, `this`, call/apply/bind |
| 03 | **Objects & Classes** | Prototypes, inheritance, ES6 classes, `#private` fields |
| 04 | **Async JavaScript** | Event loop, microtasks vs macrotasks, Promises, async/await |
| 05 | **ESM & Modules** | `import`/`export`, CommonJS, dynamic `import()`, tree shaking |
| 06 | **DOM & Events** | Selection, modification, event phases, delegation, `requestAnimationFrame` |
| 07 | **Advanced Concepts** | Hoisting & TDZ, generators, symbols, Proxy, debounce/throttle |
| 08 | **Testing** | Jest, matchers, async tests, mocking, coverage reports |
| 09 | **Frameworks** | React, Vue, Angular, Svelte, Node.js, Vite/Webpack/Rollup/esbuild |
| 10 | **Interview Prep** | 20+ accordion Q&As + deep clone, debounce, map, flatten challenges |
| 11 | **Projects** | To-Do, Weather, Chat, Autocomplete, Canvas, Virtual Scroll |

---

## Features

- **Zero Dependencies** — Pure HTML, CSS, and vanilla JavaScript. No build step required.
- **Dark Mode** — Toggle between light and dark themes. Preference is saved to `localStorage`.
- **Mobile Responsive** — Fully responsive layout with a collapsible mobile navigation menu.
- **Syntax Highlighting** — Custom CSS-based highlighting for all 200+ code blocks.
- **Copy-to-Clipboard** — Hover over any code block to reveal a one-click copy button.
- **Accordion Q&A** — Click interview questions to expand answers. Only one open at a time.
- **Sticky Sidebar** — Chapter navigation stays visible while you scroll.
- **Cross-Page Navigation** — Every page links to the previous and next chapter.

---

## How to Use Locally

### Option 1: Open Directly
Since this is a static site, you can simply open `index.html` in your browser:

```bash
cd javascript.ai
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

### Option 2: Use a Local Server (Recommended)
Some features (like ES Module examples) work best with a local server:

```bash
# Using Python 3
cd javascript.ai
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit: **http://localhost:8000**

---

## Deploy to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/joestechs/javascript.ai.git
   git push -u origin main
   ```

2. Go to **Settings → Pages** in your GitHub repository.

3. Under "Source", select **Deploy from a branch**.

4. Choose the `main` branch and `/ (root)` folder.

5. Click **Save**. Your site will be live at:
   ```
   https://joestechs.github.io/javascript.ai
   ```

---

## Contributing

We welcome contributions! Here is how you can help:

1. **Fork** this repository.
2. **Create a branch**: `git checkout -b feature/your-feature`
3. **Make your changes** and test them locally.
4. **Commit**: `git commit -m "Add: description of change"`
5. **Push**: `git push origin feature/your-feature`
6. **Open a Pull Request** on GitHub.

### Contribution Ideas
- Add more interview questions and coding challenges
- Translate pages into other languages
- Add interactive code playgrounds (e.g., embed CodePen or a custom evaluator)
- Improve accessibility (ARIA labels, keyboard navigation)
- Add more projects (e.g., a full-stack CRUD app, a WebSocket game)

---

## References & Inspiration

This guide is built for practical learning. While every concept is explained in our own simplified English and with our own code examples, we reference and align with the following authoritative sources:

- **[MDN Web Docs](https://developer.mozilla.org)** — The definitive web technology reference
- **[ECMAScript Specification (TC39)](https://tc39.es)** — The official language specification
- **[JavaScript.info](https://javascript.info)** — In-depth modern JavaScript tutorials
- **[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)** — Deep dive book series by Kyle Simpson

---

## License

This project is licensed under the **MIT License**.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software. See [LICENSE](LICENSE) for full details.

---

## Acknowledgments

Built with ❤️ for the JavaScript community. Whether you are preparing for your first job interview or brushing up on advanced patterns, we hope this resource helps you write better code.

**Happy coding!**
