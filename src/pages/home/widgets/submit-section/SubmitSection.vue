<script setup lang="ts">
import { useWorkflowForm } from '../../composables/useWorkflowForm'

const { store, handleSubmit, handleReset } = useWorkflowForm()
</script>

<template>
  <div class="submit-section">
    <button
      :class="['submit-section__btn', (!store.isValid || store.isSubmitting) && 'disabled']"
      :disabled="!store.isValid || store.isSubmitting"
      @click="handleSubmit"
    >
      <span :class="['submit-section__spinner', !store.isSubmitting && 'hidden']" />
      <span>{{ store.isSubmitting ? 'Generating...' : 'Start generation' }}</span>
    </button>
    <button
      :class="['submit-section__reset', store.status === 'idle' && 'hidden']"
      @click="handleReset"
    >
      Reset
    </button>
  </div>
</template>

<style scoped>
.submit-section {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.submit-section__btn {
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.75rem;
  background: #0a0a0a;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-section__btn:hover:not(.disabled) {
  opacity: 0.8;
}

.submit-section__btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.submit-section__reset {
  padding: 1rem 1.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.75rem;
  background: #ffffff;
  color: #0a0a0a;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.submit-section__reset:hover {
  background-color: #f5f5f5;
}

.submit-section__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.hidden {
  display: none;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
