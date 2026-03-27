# Mangalam HDPE Pipes - Landing Page

A premium, responsive landing page for Mangalam HDPE Pipes built strictly using **vanilla HTML, CSS, and JavaScript**. The page emphasizes technical prowess, detailed product information, and a seamless user experience, strictly adhering to the provided Figma design specifications.

## Features & Implementation

- **Sticky Navigation Header**: Implemented using a custom JavaScript scroll listener. The primary navigation bar smoothly transitions to a fixed state at the top of the viewport once the user scrolls past the first fold, ensuring persistent access to navigation and contact CTAs.
- **Interactive Image Carousel with Zoom**: The hero section features a thumbnail-driven image gallery. Hovering over the main hero image triggers a dynamic 2x zoom effect that actively tracks the mouse cursor's X/Y coordinates, allowing for detailed inspection of the high-resolution product imagery.
- **Custom Modals**: Fully styled modal overlays for "Get Custom Quote" (Call-back request) and "Download Technical Datasheet" interactions. All interactive form states, including the "Processing..." state, are managed natively via vanilla JavaScript.
- **Strict Responsive Design**: The layout leverages CSS Grid and Flexbox for fluidity, utilizing strict media breakpoints to enforce specific padding rules:
  - `Screens < 1080px`: Container padding dynamically adjusts to an 80px (vertical) and 60px (horizontal) constraint.
  - `Screens < 800px`: Container padding adjusts to an 80px (vertical) and 48px (horizontal) constraint.
  - `Screens < 360px`: Container padding adjusts to a 48px (vertical) and 16px (horizontal) constraint.

## Page Structure

The landing page sections are ordered systematically to guide the user:
1. **Hero Section** (Includes the Euroflex Trusted Partner Logos)
2. **Technical Specifications at a Glance**
3. **Features** (*Built to last. Engineered to perform*)
4. **Frequently Asked Questions**
5. **Versatile Applications Across Industries**
6. **Advanced HDPE Pipe Manufacturing Process**
7. **Testimonials** (*Trusted performance proven result*)
8. **Complete Piping Solutions Portfolio**
9. **Resources and Downloads**

## Setup and Usage

There are no external dependencies, CSS frameworks, or JavaScript libraries required. 

To run the project:
1. Using any modern web browser, open the `index.html` file directly.
2. Alternatively, start a lightweight local web server in the root directory (e.g., `python -m http.server 8000`) and navigate to `http://localhost:8000`.

## Code Quality Standards

- **HTML5**: Extensive use of semantic tags (`<header>`, `<nav>`, `<section>`, `<footer>`) to construct an accessible DOM.
- **CSS3**: Implementation of CSS custom properties (variables) for consistent theming and scalable styles without the use of libraries like Tailwind or Bootstrap.
- **JavaScript**: Well-organized, commented vanilla JS specifically modularized via functions to handle UI state, carousel logic, sticky positioning, and modal functionality cleanly.
