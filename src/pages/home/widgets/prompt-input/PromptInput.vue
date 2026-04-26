<script setup lang="ts">
import { useWorkflowStore } from '../../common/store'

const store = useWorkflowStore()
</script>

<template>
  <div class="prompt-input">
    <h3 class="prompt-input__label">Prompt / Description</h3>
    <textarea
      class="prompt-input__textarea"
      :value="store.prompt"
      placeholder="Describe your video idea..."
      rows="4"
      @input="store.setPrompt(($event.target as HTMLTextAreaElement).value)"
    />
    <span class="prompt-input__counter">{{ store.prompt.length }} characters</span>
  </div>
</template>

<style scoped>
.prompt-input {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.prompt-input__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #0a0a0a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

.prompt-input__textarea {
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.75rem;
  background: #ffffff;
  color: #0a0a0a;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.15s ease;
  min-height: 100px;
}

.prompt-input__textarea:focus {
  border-color: #0a0a0a;
}

.prompt-input__textarea::placeholder {
  color: #a3a3a3;
}

.prompt-input__counter {
  font-size: 0.75rem;
  color: #a3a3a3;
  text-align: right;
}
</style>
