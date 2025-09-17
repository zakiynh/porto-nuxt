<template>
  <section id="experience" class="section-padding vue-bg">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 vue-card text-green-300 rounded-full text-sm font-semibold mb-4">
          Professional Journey
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
          My 
          <span class="text-vue">Experience</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          2+ years of building scalable web applications with modern technologies
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="space-y-12">
        <!-- BRIK Experience -->
        <div class="vue-card rounded-3xl p-8 card-hover relative overflow-hidden">
          <!-- Decorative particles -->
          <div class="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
          <div class="absolute bottom-6 left-6 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-80" style="animation-delay: 1s"></div>
          
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
              <TruckIcon class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 text-sm font-semibold rounded-full mb-4 border border-orange-400/30">
                Current Position
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Full Stack Engineer</h3>
              <h4 class="text-xl font-semibold text-orange-400 mb-2">BRIK</h4>
              <p class="text-slate-300 font-medium mb-4">Aug 2025 - Present (2 months)</p>
              <p class="text-slate-400 text-sm mb-6">Jakarta, Indonesia</p>
              
              <div class="space-y-4 text-slate-300">
                <p class="leading-relaxed">
                  Currently developing <span class="font-semibold text-orange-300">BOD (Brik Order & Delivery)</span>, 
                  a comprehensive platform for the concrete sales industry, streamlining order management 
                  and delivery processes for enhanced operational efficiency.
                </p>
                
                <div class="flex flex-wrap gap-2 pt-4">
                  <span v-for="tech in brikTechnologies" :key="tech" 
                        class="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-400/30">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PT. MRT Jakarta Experience -->
        <div class="vue-card rounded-3xl p-8 card-hover relative overflow-hidden">
          <!-- Decorative particles -->
          <div class="absolute inset-0 overflow-hidden rounded-3xl">
            <div class="absolute top-6 left-8 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <div class="absolute top-16 right-12 w-0.5 h-0.5 bg-lime-300 rounded-full animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute bottom-12 left-16 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 2s"></div>
            <div class="absolute bottom-6 right-8 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
          </div>
          
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <TruckIcon class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-4 border border-blue-400/30">
                Previous Experience
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Software Developer</h3>
              <h4 class="text-xl font-semibold text-blue-300 mb-2">PT. MRT Jakarta</h4>
              <p class="text-gray-300 font-medium mb-4">Feb 2024 - Aug 2025 (1 years 7 months)</p>
              <p class="text-gray-400 text-sm mb-6">Jakarta, Indonesia</p>
              
              <div class="space-y-4 text-gray-300">
                <p class="leading-relaxed">
                  Fully responsible for ensuring <span class="font-semibold text-blue-300">stability and performance</span> of key applications
                  supporting company operations, with direct impact on efficiency and user experience.
                </p>
                
                <div class="bg-gray-800/40 rounded-2xl p-6 space-y-4 border border-gray-700/30">
                  <h5 class="font-semibold text-blue-300 mb-3">
                    Key Achievements
                  </h5>
                  <div class="space-y-3">
                    <div>
                      <h6 class="font-medium text-white mb-2">Minipos Applications Enhancement</h6>
                      <ul class="text-sm text-gray-300 space-y-1">
                        <li>• Resolved critical bugs in station login & access management</li>
                        <li>• Implemented station-specific account access locking</li>
                        <li>• Enhanced security across north & south station entrances</li>
                      </ul>
                    </div>
                    <div>
                      <h6 class="font-medium text-white mb-2">Marti.id</h6>
                      <ul class="text-sm text-gray-300 space-y-1">
                        <li>• Developed comprehensive SaaS workflow management platform</li>
                        <li>• Implemented digital document signing with document flow</li>
                        <li>• Optimized system performance and scalability</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="flex flex-wrap gap-2 pt-4">
                  <span v-for="tech in mrtTechnologies" :key="tech" 
                        class="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-400/30">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PT Datindo Infonet Prima Experience -->
        <div class="vue-card rounded-3xl p-8 card-hover relative overflow-hidden">
          <!-- Decorative particles -->
          <div class="absolute top-4 right-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
          <div class="absolute bottom-8 left-4 w-1 h-1 bg-violet-400 rounded-full animate-pulse opacity-80" style="animation-delay: 2s"></div>
          
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CodeBracketIcon class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex-1">
              <div class="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full mb-4 border border-purple-400/30">
                First Mission
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Full Stack Engineer</h3>
              <h4 class="text-xl font-semibold text-purple-400 mb-2">PT Datindo Infonet Prima</h4>
              <p class="text-slate-300 font-medium mb-4">Jul 2022 - Oct 2023 (1 year 4 months)</p>
              <p class="text-slate-400 text-sm mb-6">Jakarta, Indonesia</p>
              
              <div class="space-y-4 text-slate-300">
                <p class="leading-relaxed">
                  Started my professional journey as a Full Stack Engineer, gaining foundational experience 
                  in web development and learning industry best practices.
                </p>
                
                <div class="flex flex-wrap gap-2 pt-4">
                  <span v-for="tech in datindoTechnologies" :key="tech" 
                        class="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-400/30">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Summary -->
      <div class="mt-20 vue-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-4 left-8 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div class="absolute bottom-6 right-12 w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-40" style="animation-delay: 1s"></div>
        <div class="absolute top-1/2 right-8 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-70" style="animation-delay: 2s"></div>
        
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold text-white mb-4">Experience Summary</h3>
          <p class="text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Over 2+ years of navigating the universe of full-stack development, specializing in building scalable applications 
            that solve real-world problems and drive business efficiency across digital galaxies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-slate-800/50 rounded-2xl shadow-md border border-slate-700/30">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 space-glow">
              <span class="text-2xl font-bold text-white">2+</span>
            </div>
            <h4 class="font-semibold text-white mb-2">Years Experience</h4>
            <p class="text-slate-400 text-sm">In full-stack development</p>
          </div>

          <div class="text-center p-6 bg-slate-800/50 rounded-2xl shadow-md border border-slate-700/30">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 space-glow">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h4 class="font-semibold text-white mb-2">Companies</h4>
            <p class="text-slate-400 text-sm">Diverse industry experience</p>
          </div>

          <div class="text-center p-6 bg-slate-800/50 rounded-2xl shadow-md border border-slate-700/30">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 space-glow">
              <span class="text-2xl font-bold text-white">10+</span>
            </div>
            <h4 class="font-semibold text-white mb-2">Technologies</h4>
            <p class="text-slate-400 text-sm">Mastered tech stack</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TruckIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'

const brikTechnologies = [
  'TypeScript', 'Node.js', 'Nest.js', 'Vue.js', 'Nuxt.js', 
  'React.js', 'PostgreSQL', 'TypeORM', 'Redis', 'RabbitMQ'
]

const mrtTechnologies = [
  'Vue.js', 'Node.js', 'Express.js', 'React.js', 'MySQL', 'MongoDB', 
  'RabbitMQ', 'Redis', 'JavaScript', 'SaaS Development'
]

const datindoTechnologies = [
  'Python', 'Django', 'MySQL', 'jQuery', 'React.js'
]
</script>
