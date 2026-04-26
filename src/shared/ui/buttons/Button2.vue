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
    class="btn btn-secondary"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn-secondary {
  background-color: #ffffff;
  color: #0a0a0a;
  border: 1px solid #e5e5e5;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #f5f5f5;
}
</style>
