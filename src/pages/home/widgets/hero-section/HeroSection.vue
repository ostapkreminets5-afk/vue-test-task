<script setup lang="ts">
import HeroContent from './components/HeroContent.vue'
import { useHeroSection } from './composables/useHeroSection'
import { useHeroStore } from './store'

const { isVisible } = useHeroSection()
const heroStore = useHeroStore()
</script>

<template>
  <section v-if="isVisible" class="hero-section">
    <HeroContent />
  </section>
</template>

<style scoped>
.hero-section {
  width: 100%;
}
</style>
