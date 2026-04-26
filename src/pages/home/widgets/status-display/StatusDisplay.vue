<script setup lang="ts">
import { computed } from 'vue'
import { useWorkflowStore } from '../../common/store'
import { STATUS_CONFIG_MAP } from '../../common/const/status-config'

const store = useWorkflowStore()

const currentConfig = computed(() => STATUS_CONFIG_MAP[store.status])
const isVisible = computed(() => store.status !== 'idle')
</script>

<template>
  <section :class="['status-display', !isVisible && 'status-display--hidden']">
    <div :class="['status-display__card', currentConfig.className]">
      <component
        v-if="currentConfig.icon"
        :is="currentConfig.icon"
        class="status-display__icon"
        :size="20"
        :stroke-width="2"
      />
      <span class="status-display__message">{{ currentConfig.message }}</span>
      <div :class="['status-display__spinner', store.status !== 'loading' && 'hidden']" />
    </div>
  </section>
</template>

<style scoped>
.status-display {
  transition: all 0.3s ease;
}

.status-display--hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  margin: 0;
}

.status-display__card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 500;
}

.status-loading {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  color: #404040;
}

.status-success {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  color: #0a0a0a;
}

.status-error {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  color: #0a0a0a;
}

.status-display__icon {
  flex-shrink: 0;
}

.status-display__spinner {
  width: 18px;
  height: 18px;
  border: 2px solid #e5e5e5;
  border-top-color: #0a0a0a;
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
