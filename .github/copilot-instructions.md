# Nuxt.js Portfolio Project

This is a modern portfolio website built with Nuxt.js 4 featuring:

## ✨ Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Hero Section** - Eye-catching introduction with gradient text effects
- **About Section** - Personal information with animated elements
- **Projects Showcase** - Interactive project cards with hover effects
- **Skills Display** - Progress bars with smooth animations
- **Contact Form** - Functional contact form with validation
- **Modern UI/UX** - Clean design with smooth scrolling navigation

## 🛠️ Tech Stack
- **Nuxt.js 4** - Full-stack Vue framework
- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons
- **Composition API** - Modern Vue.js patterns

## 📁 Project Structure
```
app/
├── app.vue              # Main application component
└── app.css             # Global styles and Tailwind imports

components/
├── NavBar.vue          # Fixed navigation with mobile menu
├── HeroSection.vue     # Landing section with CTAs
├── AboutSection.vue    # Personal information and stats
├── ProjectsSection.vue # Project showcase grid
├── SkillsSection.vue   # Skills with progress indicators
├── ContactSection.vue  # Contact form and info
└── FooterSection.vue   # Site footer
```

## 🎨 Development Guidelines

### Vue.js Best Practices
- Use Composition API with `<script setup>` syntax
- Implement proper TypeScript types for props and emits
- Use reactive() for complex objects, ref() for primitives
- Follow Vue.js naming conventions (PascalCase for components)

### Tailwind CSS Conventions
- Use responsive design patterns (mobile-first)
- Implement consistent spacing with Tailwind spacing scale
- Use semantic color names and custom CSS properties
- Apply hover and focus states for interactive elements

### Component Architecture
- Keep components focused and single-responsibility
- Use props for data passing, emit events for communication
- Implement proper error boundaries and loading states
- Use computed properties for derived data

### Code Quality
- Maintain consistent code formatting with Prettier
- Use ESLint for code quality checks
- Write meaningful commit messages
- Document complex logic with comments

## 🚀 Customization Tips

1. **Personal Branding**: Update colors in Tailwind config and CSS variables
2. **Content**: Replace placeholder text with actual portfolio content
3. **Projects**: Add real project data with live URLs and GitHub links
4. **Skills**: Update skill levels and add relevant technologies
5. **Contact**: Configure contact form with actual backend integration
6. **SEO**: Update meta tags in nuxt.config.ts for better search visibility

## 📱 Responsive Design
- Mobile-first approach with breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Consistent spacing and typography across all devices
- Touch-friendly interactive elements for mobile users
- Optimized images and assets for different screen densities

This portfolio showcases modern web development practices and provides a solid foundation for personal branding online.
