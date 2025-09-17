# Portfolio Website

Modern portfolio website built with Nuxt.js 4, Vue 3, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Stack** - Built with Nuxt.js 4, Vue 3, and TypeScript
- **Beautiful UI** - Styled with Tailwind CSS and custom components
- **Section Navigation** - Smooth scrolling between sections
- **Contact Form** - Interactive contact form with validation
- **SEO Optimized** - Meta tags and structured data
- **Performance** - Fast loading and optimized build

## 📋 Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal information and professional overview
- **Projects** - Showcase of recent work and projects
- **Skills** - Technical skills with progress indicators
- **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 4
- **Frontend**: Vue.js 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Package Manager**: Yarn

## 📦 Installation

Make sure to install dependencies:

```bash
yarn install
```

## 🚀 Development

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## 🏗️ Build

Build the application for production:

```bash
yarn build
```

Preview production build:

```bash
yarn preview
```

## 📁 Project Structure

```
├── app/
│   ├── app.vue          # Main app component
│   └── app.css          # Global styles
├── components/
│   ├── NavBar.vue       # Navigation component
│   ├── HeroSection.vue  # Hero section
│   ├── AboutSection.vue # About section
│   ├── ProjectsSection.vue # Projects showcase
│   ├── SkillsSection.vue   # Skills display
│   ├── ContactSection.vue  # Contact form
│   └── FooterSection.vue   # Footer
├── public/              # Static assets
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Dependencies

```

## 🎨 Customization

### Personal Information
Update the following components with your information:
- `components/HeroSection.vue` - Name and introduction
- `components/AboutSection.vue` - About me content and stats
- `components/ContactSection.vue` - Contact details

### Projects
Edit `components/ProjectsSection.vue` to add your projects:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    demoUrl: 'https://demo-url.com',
    githubUrl: 'https://github.com/your-repo'
  }
  // Add more projects...
]
```

### Skills
Update skills in `components/SkillsSection.vue`:
```javascript
const frontendSkills = [
  { name: 'Skill Name', level: 90 } // level: 0-100
  // Add more skills...
]
```

### Colors and Styling
Modify `app/app.css` for custom styles and Tailwind configuration.

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build command: `yarn build`
2. Publish directory: `dist`

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help, feel free to reach out!
