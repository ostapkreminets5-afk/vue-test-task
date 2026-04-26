<script setup lang="ts" generic="T extends string">
import type { SelectorOption } from '@/pages/home/common/types'

defineProps<{
  label: string
  options: SelectorOption<T>[]
  modelValue: T | ''
}>()

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>()

function handleSelect(value: T) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="selector-group">
    <h3 class="selector-group__label">{{ label }}</h3>
    <div class="selector-group__options">
      <button
        v-for="option in options"
        :key="option.value"
        :class="['selector-group__btn', modelValue === option.value && 'selected']"
        @click="handleSelect(option.value)"
      >
        <component :is="option.icon" class="selector-group__icon" :size="18" :stroke-width="2" />
        <span class="selector-group__text">{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.selector-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.selector-group__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #0a0a0a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.selector-group__options {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.selector-group__btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.75rem;
  background: #ffffff;
  color: #0a0a0a;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 0.9rem;
}

.selector-group__btn:hover {
  border-color: #0a0a0a;
  background: #fafafa;
}

.selector-group__btn.selected {
  border-color: #0a0a0a;
  background: #0a0a0a;
  color: #ffffff;
}

.selector-group__icon {
  flex-shrink: 0;
}

.selector-group__text {
  font-weight: 500;
}
</style>
