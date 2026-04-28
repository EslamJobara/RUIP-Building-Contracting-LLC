# RUIP Building Contracting LLC

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.5.3-blue)
![Tailwind](https://img.shields.io/badge/tailwindcss-3.4.1-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, responsive web application for RUIP Building Contracting LLC, a leading construction and engineering company in UAE and Saudi Arabia. Specializing in civil construction, steel structures, and MEP systems.

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Description

This project serves as the primary digital presence for RUIP Building Contracting LLC. It is built to showcase their robust portfolio of construction projects, highlight their specialized services (Civil Construction, Steel Structures, and MEP), and provide easy access to contact information for potential clients in the UAE and Saudi Arabia regions.

## Technologies

This project is built with a modern frontend stack to ensure high performance, maintainability, and a great user experience:

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Installation


Step-by-step instructions on how to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd RUIP-Building-Contracting-LLC
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

## Usage

Here are the primary commands to run and build the application:

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

2. **Build for production**:
   ```bash
   npm run build
   ```
   This compiles the application to the `dist` folder.

3. **Lint the code**:
   ```bash
   npm run lint
   ```

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

## Project Structure

```
RUIP-Building-Contracting-LLC/
├── public/               # Static assets that don't need compilation
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   ├── pages/            # Page-level components
│   ├── App.tsx           # Main application root component
│   └── main.tsx          # Application entry point
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Contributing

Guidelines for others who want to help improve the project:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
