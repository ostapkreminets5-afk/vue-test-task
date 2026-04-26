import { ref } from 'vue'

export function useHeroSection() {
  const isVisible = ref(true)

  function toggleVisibility() {
    isVisible.value = !isVisible.value
  }

  return { isVisible, toggleVisibility }
}
