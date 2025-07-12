# Repository Purpose

This is a modern React/TypeScript starter template for building professional websites. It provides a clean, well-configured foundation using shadcn/ui components, Next.js, and modern web development practices.

# Setup Instructions

This project uses **npm** as the package manager:

- Start development server: `PORT=XXXX npm run dev`

# Repository Structure

- `/pages`: Next.js pages using pages router
  - `_app.tsx`: Application wrapper with providers
  - `index.tsx`: Home page
  - `404.tsx`: Custom 404 error page
- `/src`: Core application code
  - `/components`: Reusable React components (uses shadcn/ui component library)
  - `/hooks`: Custom React hooks
  - `/lib`: Utility libraries and configurations
  - `index.css`: Global styling file
- `/public`: Static assets (favicon, placeholder images, robots.txt)
- `/.next`: Next.js build output (auto-generated, ignored by git)
- `/node_modules`: Dependencies (managed by npm)

# Technology Stack

The project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Meta Framework**: Next.js 15 with pages router
- **Package Manager**: npm
- **UI Framework**: shadcn/ui (high-quality, accessible components)
- **Styling**: Tailwind CSS with custom configurations
- **Routing**: Next.js pages router (file-based routing)
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode support

# Configuration Files

- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.json`: ESLint configuration for Next.js
- `tailwind.config.ts`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `components.json`: shadcn/ui components configuration
- `package.json`: Project dependencies and scripts

# Development Guidelines

## Code Quality

- Use TypeScript strictly - avoid `any` types
- Follow React best practices and hooks rules
- Follow Next.js best practices for pages router
- Use the existing component structure and naming conventions

## Component Development

- All UI components should use shadcn/ui as the base when possible
- Components should be placed in `/src/components/ui` for reusable UI elements
- Page components go in `/pages` directory
- Use TypeScript interfaces for all props and data structures

## Styling

- Use Tailwind CSS classes for styling
- Follow the existing design system and color palette
- Ensure responsive design principles are followed
- Test both light and dark theme modes

## Testing

- Do no manual testing

# Common Development Tasks

- **Add new page**: Create component in `/pages` directory (Next.js will auto-route)
- **Add new component**: Create in `/src/components` following shadcn/ui patterns
- **Modify styling**: Update Tailwind classes or extend `tailwind.config.ts`
- **Add dependencies**: Use `npm install package-name`
- **Build production**: Run `npm run build` - outputs to `/.next`
- **Deploy**: Use `npm start` for production server or deploy to Vercel

This template provides a solid foundation for rapid website development with Next.js and modern tooling.
