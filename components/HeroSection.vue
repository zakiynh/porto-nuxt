<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden vue-bg">
    <!-- Background -->
    <div class="absolute inset-0 hero-gradient">
      <div class="absolute inset-0 bg-black/20"></div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/20 rounded-full blur-xl animate-float"></div>
      <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-xl animate-float" style="animation-delay: -2s"></div>
      <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-lime-500/20 rounded-full blur-xl animate-float" style="animation-delay: -4s"></div>
      
      <!-- Vue Logo Elements -->
      <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-orbit opacity-60"></div>
      <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-orbit opacity-80" style="animation-duration: 20s; animation-delay: -5s"></div>
      <div class="absolute bottom-1/3 left-1/4 w-3 h-3 bg-lime-400 rounded-full animate-orbit opacity-70" style="animation-duration: 25s; animation-delay: -10s"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <div class="max-w-5xl mx-auto">
        <!-- Main Title -->
        <div class="animate-fade-in">
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 text-shadow">
            Hello, I'm 
            <span class="block text-vue animate-pulse-slow">
              {{ firstName }}
            </span>
          </h1>
        </div>
        
        <!-- Subtitle -->
        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <p class="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-medium max-w-4xl mx-auto">
            {{ PERSONAL_INFO.description }}
            <br class="hidden md:block">
            Building scalable solutions for the modern web
          </p>
        </div>
        
        <!-- CTA Buttons -->
        <div class="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center mb-16" style="animation-delay: 0.4s">
          <a href="#experience" class="btn-primary group">
            <span>Explore My Work</span>
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          <a href="#contact" class="btn-secondary">
            <span>Make Contact</span>
          </a>
        </div>
        
        <!-- Social Links -->
        <div class="animate-slide-up flex justify-center space-x-8" style="animation-delay: 0.6s">
          <a href="#" class="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-200">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a :href="PERSONAL_INFO.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-200">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-200">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_INFO } from '../constants/personal'

// Extract first name from full name
const firstName = computed(() => {
  return PERSONAL_INFO.fullName.split(' ')[1]
})
</script>
