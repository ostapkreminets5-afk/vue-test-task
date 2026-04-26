<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="card">
    <div v-if="title" class="card-header">
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <div class="card-body">
      <p v-if="description" class="card-description">{{ description }}</p>
      <slot />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.75rem;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card-header {
  padding: 1rem 1.25rem 0;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #0a0a0a;
  margin: 0;
}

.card-body {
  padding: 1rem 1.25rem;
}

.card-description {
  color: #737373;
  font-size: 0.875rem;
  margin: 0;
}

.card-footer {
  padding: 0 1.25rem 1rem;
}

.card-footer:empty {
  display: none;
}
</style>
