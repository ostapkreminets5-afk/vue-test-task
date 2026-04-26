import type { Component } from 'vue'

export type WorkflowType = 'beat-sync' | 'ugc-video' | 'generate-video'
export type AspectRatioType = '9:16' | '16:9' | '1:1'
export type DurationType = 'short' | 'medium' | 'long'

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export interface WorkflowFormState {
  workflow: WorkflowType | ''
  aspectRatio: AspectRatioType | ''
  duration: DurationType | ''
  prompt: string
}

export interface SelectorOption<T extends string = string> {
  value: T
  label: string
  icon: Component
}
