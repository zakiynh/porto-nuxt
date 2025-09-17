<template>
  <div>
    <NuxtRouteAnnouncer />
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <!-- <ProjectsSection /> -->
      <SkillsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
// Explicit imports for components to fix auto-import issues
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import EducationSection from '../components/EducationSection.vue'
// import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style>
@import './app.css';
</style>
