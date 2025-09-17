<template>
  <section id="skills" class="section-padding vue-bg relative overflow-hidden">
    
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-400/30">
          Expertise
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
          Skills & 
          <span class="text-vue">Technologies</span>
        </h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          My technical expertise and the tools I use to build modern web applications
        </p>
      </div>
      
      <!-- Skills Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <!-- Frontend -->
        <div class="vue-card group p-6">
          <div class="relative mb-6">
            <div class="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <ComputerDesktopIcon class="w-10 h-10 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 group-hover:animate-ping"></div>
          </div>
          <h3 class="text-2xl font-bold text-white mb-6 text-center group-hover:text-blue-300 transition-colors">Frontend</h3>
          <div class="space-y-4">
            <div v-for="skill in frontendSkills" :key="skill.name" class="group/skill">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-300 font-medium">{{ skill.name }}</span>
                <span class="text-blue-300 font-semibold text-sm">{{ skill.level }}%</span>
              </div>
              <div class="relative">
                <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <div 
                  class="absolute top-0 bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Backend -->
        <div class="vue-card group p-6">
          <div class="relative mb-6">
            <div class="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <ServerIcon class="w-10 h-10 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-70 group-hover:animate-ping"></div>
          </div>
          <h3 class="text-2xl font-bold text-white mb-6 text-center group-hover:text-green-300 transition-colors">Backend</h3>
          <div class="space-y-4">
            <div v-for="skill in backendSkills" :key="skill.name" class="group/skill">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-300 font-medium">{{ skill.name }}</span>
                <span class="text-green-300 font-semibold text-sm">{{ skill.level }}%</span>
              </div>
              <div class="relative">
                <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <div 
                  class="absolute top-0 bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Database -->
        <div class="vue-card group p-6">
          <div class="relative mb-6">
            <div class="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <CircleStackIcon class="w-10 h-10 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-70 group-hover:animate-ping"></div>
          </div>
          <h3 class="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors">Database</h3>
          <div class="space-y-4">
            <div v-for="skill in databaseSkills" :key="skill.name" class="group/skill">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-300 font-medium">{{ skill.name }}</span>
                <span class="text-purple-300 font-semibold text-sm">{{ skill.level }}%</span>
              </div>
              <div class="relative">
                <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <div 
                  class="absolute top-0 bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tools -->
        <div class="vue-card group p-6">
          <div class="relative mb-6">
            <div class="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <WrenchScrewdriverIcon class="w-10 h-10 text-white" />
            </div>
            <div class="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full opacity-70 group-hover:animate-ping"></div>
          </div>
          <h3 class="text-2xl font-bold text-white mb-6 text-center group-hover:text-orange-300 transition-colors">Tools</h3>
          <div class="space-y-4">
            <div v-for="skill in toolSkills" :key="skill.name" class="group/skill">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-300 font-medium">{{ skill.name }}</span>
                <span class="text-orange-300 font-semibold text-sm">{{ skill.level }}%</span>
              </div>
              <div class="relative">
                <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <div 
                  class="absolute top-0 bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Skills Tags -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span 
            v-for="tech in additionalTechs" 
            :key="tech"
            class="px-6 py-3 bg-slate-800/40 text-slate-300 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-200 border border-slate-600/30 hover:border-purple-400/50 font-medium hover:text-white"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ComputerDesktopIcon, ServerIcon, CircleStackIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

const frontendSkills = [
  { name: 'React.js', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'Nuxt.js', level: 75 },
  { name: 'TypeScript', level: 85 },
  { name: 'jQuery', level: 70 }
]

const backendSkills = [
  { name: 'Node.js', level: 90 },
  { name: 'Express.js', level: 85 },
  { name: 'Nest.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Django', level: 70 }
]

const databaseSkills = [
  { name: 'PostgreSQL', level: 85 },
  { name: 'MySQL', level: 90 },
  { name: 'MongoDB', level: 80 },
  { name: 'Redis', level: 75 },
  { name: 'TypeORM', level: 70 }
]

const toolSkills = [
  { name: 'Git', level: 95 },
  { name: 'VS Code', level: 95 },
  { name: 'Postman', level: 90 },
  { name: 'AWS', level: 70 },
  { name: 'Linux', level: 75 }
]

const additionalTechs = [
  'Redux', 'Pinia', 'Prisma', 'AWS', 'Google Cloud', 'Linux', 'Docker', 'DBeaver'
]
</script>
