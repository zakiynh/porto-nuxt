<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300" :class="{ 'bg-black/95': scrolled, 'bg-black/80': !scrolled }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-3xl font-black text-vue hover:scale-105 transform transition-all duration-200">
            Zakiy
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="relative px-4 py-2 text-gray-300 hover:text-green-400 font-medium transition-all duration-200 rounded-full hover:bg-gray-800/40 group"
              @click.prevent="smoothScroll(item.href)"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="#contact" class="btn-primary text-sm px-6 py-3">
            Let's Talk
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-3 rounded-full text-slate-300 hover:text-blue-400 hover:bg-slate-800/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="block h-6 w-6" />
            <XMarkIcon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="mobileMenuOpen" class="md:hidden glass-effect border-t border-slate-700/50">
      <div class="px-4 pt-4 pb-6 space-y-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          @click.prevent="smoothScroll(item.href); closeMobileMenu()"
          class="block px-4 py-3 text-slate-300 hover:text-blue-400 font-medium rounded-xl hover:bg-slate-800/40 transition-all duration-200"
        >
          {{ item.name }}
        </a>
        <div class="pt-4">
          <a href="#contact" class="btn-primary w-full justify-center" @click.prevent="smoothScroll('#contact'); closeMobileMenu()">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  // { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Contact', href: '#contact' },
]

// Handle mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Handle smooth scrolling
const smoothScroll = (target: string) => {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Handle scroll events
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
