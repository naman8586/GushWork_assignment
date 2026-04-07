# Mangalam HDPE Pipes - Landing Page

A premium, responsive landing page for Mangalam HDPE Pipes built strictly using **vanilla HTML, CSS, and JavaScript**. The page emphasizes technical prowess, detailed product information, and a seamless user experience, strictly adhering to the provided Figma design specifications.

## Features & Implementation

- **Sticky Navigation Header**: Implemented using a custom JavaScript scroll listener. The primary navigation bar smoothly transitions to a fixed state at the top of the viewport once the user scrolls past the first fold, ensuring persistent access to navigation and contact CTAs. The header logically configures transitions (e.g. hiding via `.is-hiding` when scrolling above the desired axis) precisely matching design requests.
- **Interactive Image Carousel with Zoom**: The hero section features a thumbnail-driven image gallery. Hovering or touching over the main hero image triggers a dynamic tracked zoom effect that accurately calculates local object cursors (via bounded offsets), allowing for detailed inspection of high-resolution product imagery.
- **Typography Integration**: Strictly links and binds **Urbanist** for headings and **Inter** for all standard body copy to guarantee the precise modern layout aesthetic from Figma.
- **Custom Modals**: Fully styled modal overlays for "Get Custom Quote" (Call-back request) and "Download Technical Datasheet" (Brochure) interactions. All interactive form states, including the toast notifications and "Processing..." button states, are managed natively via vanilla JavaScript.
- **Strict Responsive Design**: The layout leverages CSS Grid and Flexbox for native fluidity. Explicit media breakpoints execute robust padding scaling bounds and block-stacking logic, guaranteeing `overflow-x: hidden` horizontal stability globally:
  - `Desktop Constraints`: Restricts max bounds up to `1240px` optimally flanked with `100px` boundary padding per explicit Figma instructions.
  - `Screens < 1080px`: Scales structural features (reducing standard 3-column Grids safely to 2-columns) and padding adjusts tighter (`60px`). Forms and interactable limits expand safely.
  - `Screens < 800px`: Nav-bar cascades smoothly onto an animated hamburger layout. Tighter form stacks and fully wrapped grids format into 1-columns, enforcing robust readable heights.
  - `Screens < 360px`: Ultra-micro screens narrow padding to `16px` securing absolute safe-zones for dense layouts.

## Page Structure

The landing page sections are ordered systematically targeting high user conversions:
1. **Hero Section** (Includes the Dynamic Gallery, Certifications & Price boxes)
2. **Featured Partner Logos** (Trusted Companies Infinite Marquee)
3. **Technical Specifications at a Glance**
4. **Features Gallery** (*Built to last. Engineered to perform*)
5. **Frequently Asked Questions** (Interactive Accordion)
6. **Versatile Applications Summary Track**
7. **Advanced Process Horizontal Stepper**
8. **Testimonials Horizontal Snap-Track**
9. **Solutions Portfolio Gallery**
10. **Resources, Downloads & Footer Consultation Block**

## Setup and Usage

There are no external dependencies, CSS frameworks, or JavaScript libraries required (no Tailwind, Bootstrap, React, or jQuery usage whatsoever).

To run the project:
1. Double-click to open `index.html` natively using any modern web browser.
2. Alternatively, start a lightweight local web server in the root directory (e.g., `python -m http.server 8000` or via `npx serve`) and inspect via standard local ports.

## Code Quality Standards

- **HTML5**: Formatted explicitly using core semantic markers (`<header>`, `<nav>`, `<section>`, `<main>`, `<footer>`).
- **CSS3**: Complete CSS Variable (`:root`) driven theming, utilizing robust flex behaviors, clamp sizing properties, advanced media queries, and modular class implementations.
- **JavaScript**: Procedural strictly structured functions to securely isolate gallery index tracking, scroll listener thresholds, coordinate tracking, and form event interceptors cleanly.
