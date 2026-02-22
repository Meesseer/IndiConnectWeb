# IndiConnectWeb


IndiWeb:
A fully responsive, SEO-optimized homepage built using React and Tailwind CSS based on the provided Figma design

Tech Stack:
- React (Vite) – Fast development environment and optimized production builds
- Tailwind CSS – Utility-first CSS framework for scalable responsive design
- Framer Motion – Used for subtle animations (mobile menu & UI interactions)
- JavaScript (ES6+) – Client-side validation and interactivity
- Git – Version control

Setup Instructions:
- Clone the Repository:
    get clone https://github.com/Meesseer/IndiConnectWeb
    cd indiweb
- Install dependencies:
    npm install
- Run Development Server:
    npm run dev
- Built for production: 
    npm run build 
- Preview production build: 
    npm run preview

Technology Choices and Reasoning:
- React (with Vite)
- Lightweight and fast development setup
- Efficient component-based architecture
- Clean separation of UI sections (Hero, Sectors, Insights, Contact, Footer)

Tailwind CSS:
- Rapid UI development
- Fully responsive utility classes
- Avoids large CSS files
- Enables consistent spacing & typography

Framer Motion:
- Used for:
    Mobile navigation animation
    Subtle UI transitions
    Lightweight and production-safe

- Mock API (JSONPlaceholder)
    Used to simulate form submission
    Demonstrates async request handling without backend requirement


Responsiveness Strategy:
The layout is built using a mobile-first approach.

    Breakpoints Used:
    sm: – Small devices (≥640px)
    md: – Tablets (≥768px)
    lg: – Desktop (≥1024px)
    xl: – Large screens (≥1280px)

Techniques Used:
    CSS Grid for structured sections (Hero row 2, Insights cards, Footer)
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    Removed fixed widths and heights
    Used max-w-* containers to center content
    Used aspect-ratio and object-cover for image scaling
    Avoided layout-breaking pixel-based widths on mobile

Mobile Improvements:
    Stacked layouts
    Flexible buttons with wrapping
    No horizontal scroll
    Centered card alignment
    Fluid container widths

Image Optimization:
    Used proper alt attributes
    Avoided unnecessary heavy images
    Used responsive sizing with Tailwind utilities

Clean Structure:
    Logical component separation
    Organized folder structure
    No unnecessary libraries


Contact Form Implementation
    Features:
        Client-side validation
        Email format validation using regex
        Required field validation
        Loading state handling
        Success & error UI feedback
        Mock API submission

Why Client-side Validation?
    Improves user experience by:
    Preventing unnecessary API calls
    Providing instant feedback

Project Structure:
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── InsightCard.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── Sectors.jsx
│   ├── Indsights.jsx
│   ├── Contact.jsx
│
├── assets/
│
├── App.jsx
└── main.jsx

Design Implementation Notes
    Matched gradient overlays using Tailwind + custom inline gradients
    Implemented glassmorphism effects using:
    bg-white/10
    backdrop-blur-xl
    Ensured consistent spacing scale across sections
    Maintained alignment within max-width containers