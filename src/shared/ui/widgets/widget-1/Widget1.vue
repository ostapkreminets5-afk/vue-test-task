<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="widget">
    <h4 v-if="title" class="widget-title">{{ title }}</h4>
    <div class="widget-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.widget {
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
}

.widget-title {
  font-size: 1rem;
  font-weight: 600;
  color: #0a0a0a;
  margin: 0 0 0.75rem;
}

.widget-content {
  font-size: 0.875rem;
  color: #0a0a0a;
}
</style>
