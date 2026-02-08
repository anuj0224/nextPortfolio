# Modern Developer Portfolio

A sleek, responsive, and highly customizable developer portfolio template built with Next.js, TailwindCSS, and Framer Motion.

🚀 **Live Preview:** [https://anuj-portfolio-v1.vercel.app/](https://anuj-portfolio-v1.vercel.app/)

## ✨ Key Features

-   **Modern Design**: Clean layout with glassmorphism effects, gradients, and subtle animations.
-   **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
-   **Dark/Light Mode**: Seamless theme switching with system preference support.
-   **Data-Driven Content**: All portfolio data (experience, projects, skills) is managed via a single JSON file (`data/portfolioData.json`), making updates effortless.
-   **Interactive UI**: Smooth page transitions and element reveals powered by Framer Motion.
-   **Performance Focused**: Built on Next.js 15 using the App Router for optimal speed and SEO.
-   **Resume Download**: Integrated download button for your PDF resume.

## 🛠 Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+ installed

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### 1. Update Content
Edit `data/portfolioData.json` to update your personal information, skills, experience, and projects. The UI will automatically reflect these changes.

### 2. Add Your Resume
Place your resume PDF in the `public/` directory and update the `resumeUrl` in `data/portfolioData.json`.

### 3. Change Theme Colors
Modify `app/globals.css` to adjust the color palette. The project uses Oklch color space for vibrant and accessible themes.

## 📂 Project Structure

```
/app          # App Router pages and layouts
/components   
  /ui         # Reusable atomic buttons, cards, etc.
  /sections   # Major page sections (Hero, About, Projects)
/data         # Content source (portfolioData.json)
/lib          # Utilities
/public       # Static assets (images, resume)
/types        # TypeScript definitions
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
