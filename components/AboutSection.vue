<template>
  <section id="about" class="section-padding vue-bg">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 vue-card text-green-300 rounded-full text-sm font-semibold mb-4">
          About Me
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
          Building Apps That 
          <span class="text-vue">Matter</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From Depok to worldwide - delivering scalable solutions with Vue.js ecosystem
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Space Avatar -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <div class="relative group">
            <!-- Main Avatar -->
                        <!-- Main Avatar -->
            <div class="w-96 h-96 vue-card rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              <img 
                src="../app/assets/profpict.jpeg" 
                :alt="`${PERSONAL_INFO.fullName} - Vue.js Developer`"
                class="w-full h-full object-cover object-center"
              />
            </div>
            
            <!-- Orbiting Elements -->
            <div class="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-full opacity-70 animate-orbit shadow-xl"></div>
            <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-lime-500 rounded-full opacity-70 animate-orbit shadow-xl" style="animation-duration: 20s; animation-delay: -5s"></div>
            <div class="absolute top-1/2 -left-12 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-orbit shadow-xl" style="animation-duration: 15s; animation-delay: -2s"></div>
            
            <!-- Vue Glow -->
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-lime-500/20 rounded-3xl blur-xl opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="space-y-8 order-1 lg:order-2">
          <div>
            <h3 class="text-4xl font-bold text-white mb-6">
              Hello! I'm 
              <span class="text-vue">{{ PERSONAL_INFO.fullName }}</span>
            </h3>
            <div class="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Hi there! I'm a passionate Vue.js Developer who genuinely loves building applications 
                that are not just functional but also deliver 
                <span class="font-semibold text-green-400">real, tangible impact</span>. 
                I thrive on challenges and am always curious about how technology can solve complex problems.
              </p>
              <p>
                I've primarily focused on <span class="font-semibold text-vue">Vue.js, Nuxt.js, Node.js (Express.js & Nest.js), React.js, MySQL, and MongoDB</span> 
                to develop scalable and efficient solutions. I also have hands-on experience with 
                <span class="font-semibold text-lime-400">RabbitMQ and Redis</span> for building robust and resilient systems.
              </p>
              <p>
                I believe software isn't just about writing code; it's about 
                <span class="font-semibold text-vue">delivering value</span>. 
                I'm proud of my ability to transform ideas into products that users can effectively use and appreciate.
              </p>
            </div>
          </div>
          
          <!-- Personal Values -->
          <div class="vue-card rounded-2xl p-6 my-8">
            <h4 class="text-lg font-bold text-white mb-4">What drives me:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-gray-300">Always curious & eager to learn</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
                <span class="text-gray-300">Results-focused approach</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 1s"></div>
                <span class="text-gray-300">Problem-solving mindset</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
                <span class="text-gray-300">User-centric development</span>
              </div>
            </div>
          </div>
          
          <!-- Skills Tags -->
          <div class="flex flex-wrap gap-3 py-4">
            <span v-for="skill in skills" :key="skill" 
                  class="px-4 py-2 vue-card text-green-300 rounded-full text-sm font-semibold hover:scale-105 transform transition-all duration-200 cursor-default">
              {{ skill }}
            </span>
          </div>
          
          <!-- CTA -->
          <div class="pt-6">
            <a href="#contact" class="btn-primary group">
              <span>� Let's Build Together!</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PERSONAL_INFO } from '../constants/personal'

const skills = [
  'Vue.js', 'Nuxt.js', 'Node.js', 'Express.js', 'Nest.js', 'React.js', 
  'MySQL', 'MongoDB', 'RabbitMQ', 'Redis', 'JavaScript', 'TypeScript', 'Docker'
]
</script>
