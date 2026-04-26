<script setup lang="ts">
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
    class="btn btn-ghost"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn-ghost {
  background-color: transparent;
  color: #0a0a0a;
  border: none;
}

.btn-ghost:hover:not(:disabled) {
  background-color: #f5f5f5;
}
</style>
