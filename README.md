# 🎓 Loyola Website

A modern, responsive website built for Loyola College using Next.js and Tailwind CSS. This collaborative project was developed during my university tenure along with some of my classmates as part of an internship program.

## ✨ Features

- 🎨 Modern responsive design with Tailwind CSS
- ⚡ Fast performance with Next.js 13
- 🧩 Component-based architecture
- 🎯 Material-UI integration with custom styling
- 🌈 DaisyUI component library integration

## 🛠️ Tech Stack

- **Framework:** Next.js 13.2.1
- **Styling:** Tailwind CSS 3.2.7 + DaisyUI 2.51.4
- **UI Components:** Material-UI 5.11.14
- **Icons:** Material-UI Icons
- **Carousel:** React Material-UI Carousel

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LoyolaWebsite
   ```

2. **Navigate to project directory**
   ```bash
   cd loyola_website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
loyola_website/
├── Assets/          # Static assets and media files
├── components/      # Reusable React components
├── pages/          # Next.js pages and API routes
├── public/         # Public static files
├── styles/         # Global styles and CSS modules
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## 🎯 Development Guidelines

### Component Architecture
- ✅ Use component-based development approach
- ✅ Break large components into smaller sub-components
- ✅ Create separate files for testing components in `pages/` folder

### Styling Standards
- 🚫 **No raw CSS** - Use Tailwind CSS exclusively
- ✅ Leverage [Tailwind UI](https://tailwindui.com) components
- ✅ Utilize [DaisyUI](https://daisyui.com) component library
- ✅ Follow the Figma design specifications
- ✅ Maintain consistent color scheme throughout

### Code Organization
- ✅ Add section separators for large code blocks:
  ```javascript
  //-------------------------------
  // Component Logic Section
  //-------------------------------
  ```
- ✅ Include descriptive comments for each major section
- ✅ Store media files in `/Assets` or `/public` directories

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🔧 Recommended VSCode Extensions

- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets** - Code snippets for React
- **Prettier - Code formatter** - Automatic code formatting

## 🎨 Design Resources

- Follow the provided Figma design specifications
- Maintain consistency with established color schemes
- Reference Tailwind documentation for styling patterns