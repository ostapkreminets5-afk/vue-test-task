<script setup lang="ts">
import { WorkflowSelector } from './widgets/workflow-selector'
import { AspectRatioSelector } from './widgets/aspect-ratio-selector'
import { DurationSelector } from './widgets/duration-selector'
import { PromptInput } from './widgets/prompt-input'
import { SummaryPanel } from './widgets/summary-panel'
import { SubmitSection } from './widgets/submit-section'
import { StatusDisplay } from './widgets/status-display'
</script>

<template>
  <div class="page-wrapper">
    <div class="page-container">
      <header class="page-header">
        <span class="page-header__badge">AI Powered</span>
        <h1 class="page-header__title">Video Workflow Starter</h1>
        <p class="page-header__subtitle">
          Configure your AI video generation parameters
        </p>
      </header>

      <div class="page-form">
        <section class="page-form__section">
          <WorkflowSelector />
        </section>

        <section class="page-form__section page-form__section--row">
          <AspectRatioSelector />
          <DurationSelector />
        </section>

        <section class="page-form__section">
          <PromptInput />
        </section>

        <section class="page-form__section">
          <SummaryPanel />
        </section>

        <section class="page-form__section">
          <SubmitSection />
        </section>

        <section class="page-form__section">
          <StatusDisplay />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background: #ffffff;
}

.page-container {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.page-header {
  text-align: center;
  padding: 1rem 0;
}

.page-header__badge {
  display: inline-block;
  padding: 0.375rem 1rem;
  border-radius: 2rem;
  background: #0a0a0a;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.page-header__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0a0a0a;
  margin: 0.5rem 0;
  line-height: 1.2;
}

.page-header__subtitle {
  font-size: 1rem;
  color: #737373;
  margin: 0;
}

.page-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.page-form__section--row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .page-form__section--row {
    grid-template-columns: 1fr;
  }
}
</style>
