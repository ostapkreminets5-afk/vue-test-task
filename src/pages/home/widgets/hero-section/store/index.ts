import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeroStore = defineStore('hero-section', () => {
  const title = ref('Ласкаво просимо')
  const subtitle = ref('Це головна секція сторінки')

  function setTitle(value: string) {
    title.value = value
  }

  function setSubtitle(value: string) {
    subtitle.value = value
  }

  return { title, subtitle, setTitle, setSubtitle }
})
