<script setup lang="ts">
const model = defineModel<string>({ default: '' })

defineProps<{
  label?: string
  placeholder?: string
  type?: string
  error?: string
  disabled?: boolean
}>()
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      v-model="model"
      :type="type || 'text'"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input-field"
      :class="{ 'input-error': error }"
    />
    <span v-if="error" class="input-error-message">{{ error }}</span>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #0a0a0a;
}

.input-field {
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  background-color: #ffffff;
  color: #0a0a0a;
}

.input-field:focus {
  border-color: #0a0a0a;
  box-shadow: 0 0 0 1px #0a0a0a;
}

.input-field:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-field.input-error {
  border-color: #0a0a0a;
}

.input-error-message {
  font-size: 0.75rem;
  color: #737373;
}
</style>
