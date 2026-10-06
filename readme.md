# PACELINE

A modern, responsive e-commerce landing page built with HTML, CSS, and JavaScript.

Paceline focuses on clean visual design, responsive layouts, smooth interactions, accessibility, and optimized performance.

## Overview

Paceline was developed as part of the **Developer Community × Google Developer Group selection task**.

The objective was to transform the provided design concept into a polished and functional website while maintaining a consistent experience across desktop, tablet, and mobile devices.

The project was built from scratch using core web technologies, without relying on frontend frameworks or UI libraries.

## Features

- Fully responsive design for desktop, tablet, and mobile
- Light and dark theme with persistent user preference
- Interactive navigation and UI elements
- Animated statistics using Intersection Observer
- Semantic HTML structure
- Keyboard-friendly navigation and visible focus states
- Reduced-motion support for accessibility
- Optimized WebP images for improved loading performance
- Responsive layouts using CSS media queries
- Reusable CSS custom properties
- Client-side theme persistence using LocalStorage

## Tech Stack

| Technology    | Purpose                                           |
|---------------|---------------------------------------------------|
| HTML5         | Page structure and semantic markup                |
| CSS3          | Styling, layouts, animations, and responsiveness  |
| JavaScript    | Interactions and dynamic functionality            |
| WebP          | Optimized image delivery                          |
| LocalStorage  | Theme preference persistence                      |
| Git & GitHub  | Version control and repository management         |

**No frameworks or build tools are required.**

## Project Structure

```text
Paceline/
├── index.html              # Home page
├── about.html              # About page
├── README.md
│
├── css/
│   ├── style.css           # Design tokens, base styles, components, light/dark themes
│   └── responsive.css      # Tablet and mobile layouts
│
├── script/
│   ├── script.js           # General page interactions
│   ├── navigation.js       # Navigation and mobile menu
│   └── theme.js            # Light/dark theme toggle and saved preference
│
└── src/
    ├── Home/
    │   ├── hero_section/       # Hero images (desktop + mobile)
    │   ├── category_section/   # Shop by Category images
    │   ├── arrivals_section/   # New Arrivals images
    │   ├── story_section/      # Our Story image
    │   └── explore_section/    # Explore Collections images (for her / for him)
    ├── About/                  # About page images
    └── svg/
        ├── moon-line.svg       # Theme toggle icon (dark)
        └── sun-line.svg        # Theme toggle icon (light)
```

## Run Locally

### Prerequisites

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- **Live Server** extension for VS Code

### 1. Clone the repository

```bash
git clone <https://github.com/developeranger-creator/Paceline.git>
```

### 2. Open the project

Navigate into the project directory:

```bash
cd PACELINE
```

Open the folder in Visual Studio Code.

### 3. Start the local server

Open `index.html` in VS Code.

Right-click the file and select:

**Open with Live Server**

The website will open in your browser using a local development server.

You can make changes to the HTML, CSS, or JavaScript files and refresh the browser to view the updates.

> No `npm install`, package manager, or build process is required for this project.

## Performance

The website was tested using **Google Lighthouse** and optimized across performance, accessibility, best practices, and SEO.

| Category | Score |
|----------|------:|
| Performance | 93+ |
| Accessibility | 99 |
| Best Practices | 100 |
| SEO | 100 |

Performance improvements included:

- Converting images to WebP
- Compressing large image assets
- Lazy-loading below-the-fold images
- Prioritizing the hero image
- Reducing unnecessary JavaScript execution
- Using responsive layouts and optimized assets

## Accessibility

Accessibility was considered throughout the development process.

The project includes:

- Semantic HTML elements
- Descriptive image `alt` text
- Keyboard-accessible interactive elements
- Visible focus states
- ARIA attributes where required
- Support for reduced-motion preferences
- Responsive and readable content
- Light and dark themes with appropriate contrast

Accessibility was tested using Lighthouse, keyboard navigation, responsive testing, and browser-based accessibility checks.

## Responsive Design

The layout adapts to different screen sizes, including:

- Mobile devices
- Tablets
- Laptops
- Desktop displays

CSS media queries are used to adjust layouts, typography, spacing, navigation, and content presentation according to the available screen width.

## Theme System

Paceline supports both **light and dark themes**.

The selected theme is stored using `LocalStorage`, allowing the preference to remain active when the user revisits or refreshes the website.

## Testing

The project was tested for:

- Responsive behavior
- Light and dark themes
- Navigation and interactive elements
- Keyboard accessibility
- Reduced-motion preferences
- Image loading and optimization
- Browser console errors
- Lighthouse performance and accessibility
- Different viewport sizes

## Live Demo

**[View Live Website](https://paceline-store.netlify.app/)**

## Repository

**[View Source Code](YOUR-GITHUB-REPOSITORY-URL)**

## Author

**Aadarsh Raj**

Frontend development project focused on responsive design, accessibility, performance, and clean implementation.

---

*Built with HTML, CSS, and JavaScript.*