<script setup lang="ts">
import { buttonVariants, type ButtonVariant, type ButtonSize } from './cva'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    label?: string
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
  },
)

defineEmits<{
  click: [event: MouseEvent]
}>()

const classes = computed(() => buttonVariants(props.variant, props.size))
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;
  border: none;
  outline: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

.btn-primary {
  background-color: #0a0a0a;
  color: #ffffff;
}

.btn-primary:hover:not(:disabled) {
  opacity: 0.8;
}

.btn-secondary {
  background-color: #ffffff;
  color: #0a0a0a;
  border: 1px solid #e5e5e5;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #f5f5f5;
}

.btn-ghost {
  background-color: transparent;
  color: #0a0a0a;
}

.btn-ghost:hover:not(:disabled) {
  background-color: #f5f5f5;
}
</style>
