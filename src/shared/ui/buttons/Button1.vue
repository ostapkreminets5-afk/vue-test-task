<script setup lang="ts">
import { type ButtonVariant } from './cva'

defineProps<{
  label?: string
  disabled?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    class="btn btn-primary"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn-primary {
  background-color: #0a0a0a;
  color: #ffffff;
}

.btn-primary:hover:not(:disabled) {
  opacity: 0.8;
}
</style>
