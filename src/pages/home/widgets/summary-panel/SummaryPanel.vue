<script setup lang="ts">
import { computed } from 'vue'
import { useWorkflowStore } from '../../common/store'

const store = useWorkflowStore()

const summaryRows = computed(() => [
  { label: 'Workflow', value: store.workflow, placeholder: 'Not selected' },
  { label: 'Aspect Ratio', value: store.aspectRatio, placeholder: 'Not selected' },
  { label: 'Duration', value: store.duration, placeholder: 'Not selected' },
  { label: 'Prompt', value: store.prompt, placeholder: 'Not provided' },
])

const hasAnyValue = computed(() =>
  summaryRows.value.some((row) => row.value.length > 0),
)
</script>

<template>
  <div :class="['summary-panel', !hasAnyValue && 'summary-panel--empty']">
    <h3 class="summary-panel__label">Summary</h3>
    <div class="summary-panel__grid">
      <div
        v-for="row in summaryRows"
        :key="row.label"
        class="summary-panel__row"
      >
        <span class="summary-panel__key">{{ row.label }}</span>
        <span
          :class="['summary-panel__value', !row.value && 'summary-panel__value--empty']"
        >
          {{ row.value || row.placeholder }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  transition: opacity 0.3s ease;
}

.summary-panel--empty {
  opacity: 0.5;
}

.summary-panel__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #0a0a0a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.summary-panel__grid {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.summary-panel__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-panel__key {
  font-size: 0.875rem;
  color: #737373;
}

.summary-panel__value {
  font-size: 0.875rem;
  font-weight: 600;
  color: #0a0a0a;
}

.summary-panel__value--empty {
  color: #a3a3a3;
  font-weight: 400;
  font-style: italic;
}
</style>
