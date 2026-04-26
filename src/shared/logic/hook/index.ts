import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowSize() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  function onResize() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => window.addEventListener('resize', onResize))
  onUnmounted(() => window.removeEventListener('resize', onResize))

  return { width, height }
}


export function useMediaQuery(query: string) {
  const matches = ref(false)

  onMounted(() => {
    const media = window.matchMedia(query)
    matches.value = media.matches

    const handler = (e: MediaQueryListEvent) => {
      matches.value = e.matches
    }
    media.addEventListener('change', handler)

    onUnmounted(() => media.removeEventListener('change', handler))
  })

  return matches
}
