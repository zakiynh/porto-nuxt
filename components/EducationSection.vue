<template>
  <section id="education" class="section-padding vue-bg">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 vue-card text-green-300 rounded-full text-sm font-semibold mb-4">
          Educational Background
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
          Learning 
          <span class="text-vue">Journey</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From Urban Planning to Full-Stack Development - A story of career transformation
        </p>
      </div>

      <!-- Education Timeline -->
      <div class="space-y-12">
        <!-- Hacktiv8 Bootcamp -->
        <div class="vue-card rounded-3xl p-8 card-hover relative overflow-hidden">
          <!-- Career Switch Badge -->
          <div class="absolute top-4 right-4">
            <span class="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full transform rotate-12 animate-pulse">
              Career Switch!
            </span>
          </div>
          
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CodeBracketIcon class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-red-500/20 text-red-300 text-sm font-semibold rounded-full mb-4 border border-red-400/30">
                Bootcamp - Career Transformation
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Full Stack JavaScript Developer</h3>
              <h4 class="text-xl font-semibold text-red-400 mb-2">Hacktiv8 Indonesia</h4>
              <p class="text-gray-300 font-medium mb-4">Jan 2022 - May 2022</p>
              <p class="text-gray-400 text-sm mb-6">Jakarta, Indonesia</p>
              
              <div class="space-y-4 text-gray-300">
                <p class="leading-relaxed">
                  <span class="font-semibold text-red-300">Intensive coding bootcamp</span> that transformed my career from Urban Planning to Software Development. 
                  Gained comprehensive knowledge in full-stack JavaScript development through hands-on projects and industry best practices.
                </p>
                
                <div class="bg-gray-800/40 rounded-2xl p-6 space-y-3 border border-gray-700/30">
                  <h5 class="font-semibold text-red-300 mb-3">
                    🚀 Key Learning Areas
                  </h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                      JavaScript ES6+ & Modern Web APIs
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.2s"></span>
                      React.js & Component Architecture
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.4s"></span>
                      Node.js & Express.js Backend
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.6s"></span>
                      Database Design & Management
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.8s"></span>
                      RESTful APIs & Authentication
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 animate-pulse" style="animation-delay: 1s"></span>
                      Git Version Control & Collaboration
                    </div>
                  </div>
                </div>
                
                <div class="flex flex-wrap gap-2 pt-4">
                  <span v-for="tech in bootcampTechnologies" :key="tech" 
                        class="px-3 py-1 bg-red-500/20 text-red-300 text-xs font-medium rounded-full border border-red-400/30">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bachelor's Degree -->
        <div class="vue-card rounded-3xl p-8 card-hover relative overflow-hidden">
          <!-- Decorative particles for bachelor's -->
          <div class="absolute inset-0 overflow-hidden rounded-3xl">
            <div class="absolute top-10 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <div class="absolute top-20 right-20 w-0.5 h-0.5 bg-lime-300 rounded-full animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute bottom-16 left-16 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 2s"></div>
            <div class="absolute bottom-10 right-12 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
          </div>
          
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <AcademicCapIcon class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm font-semibold rounded-full mb-4 border border-green-400/30">
                Bachelor's Degree
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Teknik Perencanaan Wilayah dan Kota</h3>
              <h4 class="text-xl font-semibold text-green-300 mb-2">Universitas Islam Sultan Agung Semarang</h4>
              <p class="text-gray-300 font-medium mb-4">Oct 2016 - Feb 2022</p>
              <p class="text-gray-400 text-sm mb-6">Semarang, Indonesia</p>
              
              <div class="space-y-4 text-gray-300">
                <p class="leading-relaxed">
                  Earned a <span class="font-semibold text-green-300">Bachelor's degree in Urban and Regional Planning</span>, 
                  developing strong analytical and problem-solving skills that later proved invaluable in software development. 
                  Gained expertise in spatial analysis, data visualization, and systematic planning approaches.
                </p>
                
                <div class="bg-gray-800/40 rounded-2xl p-6 space-y-3 border border-gray-700/30">
                  <h5 class="font-semibold text-green-300 flex items-center mb-3">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                    Transferable Skills to Tech
                  </h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Systems Thinking & Analysis
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.2s"></span>
                      Data Analysis & Visualization
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.4s"></span>
                      Project Management
                    </div>
                    <div class="flex items-center">
                      <span class="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse" style="animation-delay: 0.6s"></span>
                      Problem-Solving Methodology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Associate's Degree -->
        <div class="vue-card rounded-3xl p-8 card-hover relative overflow-hidden">
          <!-- Decorative particles for associate's -->
          <div class="absolute inset-0 overflow-hidden rounded-3xl">
            <div class="absolute top-12 left-8 w-0.5 h-0.5 bg-lime-400 rounded-full animate-pulse"></div>
            <div class="absolute top-8 right-16 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
            <div class="absolute bottom-12 left-20 w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse" style="animation-delay: 2.5s"></div>
            <div class="absolute bottom-8 right-8 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" style="animation-delay: 0.8s"></div>
          </div>
          
          <div class="flex items-start space-x-6 relative z-10">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-lime-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BuildingLibraryIcon class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-lime-500/20 text-lime-300 text-sm font-semibold rounded-full mb-4 border border-lime-400/30">
                Associate's Degree
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Teknik Perencanaan Wilayah dan Kota</h3>
              <h4 class="text-xl font-semibold text-lime-300 mb-2">Diponegoro University</h4>
              <p class="text-gray-300 font-medium mb-4">Sep 2012 - Jan 2016</p>
              <p class="text-gray-400 text-sm mb-6">Semarang, Indonesia</p>
              
              <div class="space-y-3 text-gray-300">
                <p class="leading-relaxed">
                  Started my academic journey in <span class="font-semibold text-lime-300">Urban and Regional Planning</span> at one of Indonesia's top universities. 
                  Built a solid foundation in spatial analysis, urban development principles, and research methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Career Transition Story -->
      <div class="mt-20 vue-card p-8 relative overflow-hidden">
        <!-- Decorative particles for transition story -->
        <div class="absolute inset-0">
          <div class="absolute top-8 left-16 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
          <div class="absolute top-16 right-20 w-0.5 h-0.5 bg-lime-300 rounded-full animate-pulse" style="animation-delay: 1s"></div>
          <div class="absolute bottom-20 left-32 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 2s"></div>
          <div class="absolute bottom-12 right-24 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
          <div class="absolute top-32 left-1/2 w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
        </div>
        
        <div class="text-center relative z-10">
          <h3 class="text-3xl font-bold text-white mb-4">From Urban Planning to Full-Stack Development</h3>
          <p class="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            My journey from Urban Planning to Software Development showcases the power of continuous learning and adaptability. 
            The analytical skills and systematic thinking from my planning background have been invaluable in approaching 
            complex software problems and designing scalable solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CodeBracketIcon, AcademicCapIcon, BuildingLibraryIcon } from '@heroicons/vue/24/outline'

const bootcampTechnologies = [
  'JavaScript', 'Vue.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 
  'PostgreSQL', 'HTML5', 'CSS3', 'Git', 'RESTful APIs'
]
</script>
