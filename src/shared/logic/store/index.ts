import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const theme = ref<'light' | 'dark'>('light')
  const locale = ref('uk')
  const isSidebarOpen = ref(false)

  const isDarkMode = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function setLocale(value: string) {
    locale.value = value
  }

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return {
    theme,
    locale,
    isSidebarOpen,
    isDarkMode,
    toggleTheme,
    setLocale,
    toggleSidebar,
  }
})
