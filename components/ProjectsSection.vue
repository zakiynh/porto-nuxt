<template>
  <section id="projects" class="section-padding vue-bg">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
          Portfolio
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Featured 
          <span class="text-gradient">Projects</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Showcasing some of my best work and creative solutions
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative bg-white rounded-3xl shadow-lg overflow-hidden card-hover border border-gray-100"
          :class="{ 'md:col-span-2 lg:col-span-1': index === 0 }"
        >
          <!-- Project Image -->
          <div class="relative h-64 overflow-hidden">
            <div 
              class="w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              :class="project.gradient"
            >
              <ShoppingCartIcon v-if="project.icon === 'ShoppingCartIcon'" class="w-24 h-24 text-white opacity-90" />
              <ClipboardDocumentListIcon v-else-if="project.icon === 'ClipboardDocumentListIcon'" class="w-24 h-24 text-white opacity-90" />
              <UserIcon v-else-if="project.icon === 'UserIcon'" class="w-24 h-24 text-white opacity-90" />
              <CodeBracketIcon v-else-if="project.icon === 'CodeBracketIcon'" class="w-24 h-24 text-white opacity-90" />
              <EyeIcon v-else class="w-24 h-24 text-white opacity-90" />
            </div>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- Status Badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              {{ project.status }}
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                {{ project.title }}
              </h3>
              <div class="flex space-x-2">
                <a
                  :href="project.demoUrl"
                  class="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all duration-200"
                  title="View Demo"
                >
                  <EyeIcon class="w-5 h-5" />
                </a>
                <a
                  :href="project.githubUrl"
                  class="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
                  title="View Code"
                >
                  <CodeBracketIcon class="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 text-sm bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 rounded-full font-medium hover:scale-105 transform transition-all duration-200"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Project Stats -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  {{ project.duration }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ project.year }}
                </span>
              </div>
              <div class="flex -space-x-2">
                <div v-for="n in 3" :key="n" 
                     class="w-8 h-8 rounded-full border-2 border-white"
                     :class="n === 1 ? 'bg-primary-500' : n === 2 ? 'bg-secondary-500' : 'bg-gray-400'">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- View More Button -->
      <div class="text-center mt-16">
        <a href="https://github.com" class="btn-secondary group">
          <span>View All Projects</span>
          <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CodeBracketIcon, EyeIcon, ShoppingCartIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/vue/24/outline'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with advanced shopping cart, payment integration, and admin dashboard.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project1',
    gradient: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
    icon: 'ShoppingCartIcon',
    status: 'Live',
    duration: '3 months',
    year: '2024'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project2',
    gradient: 'bg-gradient-to-br from-green-500 via-teal-500 to-blue-500',
    icon: 'ClipboardDocumentListIcon',
    status: 'Beta',
    duration: '2 months',
    year: '2024'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my work with smooth animations and interactive elements.',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'TypeScript', 'Heroicons'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project3',
    gradient: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500',
    icon: 'UserIcon',
    status: 'Live',
    duration: '1 month',
    year: '2024'
  },
  {
    id: 4,
    title: 'AI Chat Assistant',
    description: 'An intelligent chat assistant powered by machine learning with natural language processing capabilities.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project4',
    gradient: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    icon: 'CodeBracketIcon',
    status: 'Development',
    duration: '4 months',
    year: '2024'
  },
  {
    id: 5,
    title: 'Weather Analytics',
    description: 'A comprehensive weather analytics dashboard with data visualization and predictive modeling.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Flask', 'SQLite'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project5',
    gradient: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500',
    icon: 'EyeIcon',
    status: 'Live',
    duration: '2 months',
    year: '2023'
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'A unified social media management dashboard with analytics, scheduling, and engagement tracking.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project6',
    gradient: 'bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500',
    icon: 'UserIcon',
    status: 'Live',
    duration: '3 months',
    year: '2023'
  }
])
</script>
