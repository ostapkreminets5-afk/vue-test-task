import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {
  WorkflowType,
  AspectRatioType,
  DurationType,
  SubmitStatus,
} from '../types'

export const useWorkflowStore = defineStore('workflow', () => {
  const workflow = ref<WorkflowType | ''>('')
  const aspectRatio = ref<AspectRatioType | ''>('')
  const duration = ref<DurationType | ''>('')
  const prompt = ref('')
  const status = ref<SubmitStatus>('idle')

  const isValid = computed(() =>
    workflow.value.length > 0
    && aspectRatio.value.length > 0
    && duration.value.length > 0
    && prompt.value.trim().length > 0,
  )

  const isSubmitting = computed(() => status.value === 'loading')

  function setWorkflow(value: WorkflowType) { workflow.value = value }
  function setAspectRatio(value: AspectRatioType) { aspectRatio.value = value }
  function setDuration(value: DurationType) { duration.value = value }
  function setPrompt(value: string) { prompt.value = value }
  function setStatus(value: SubmitStatus) { status.value = value }

  function reset() {
    workflow.value = ''
    aspectRatio.value = ''
    duration.value = ''
    prompt.value = ''
    status.value = 'idle'
  }

  return {
    workflow, aspectRatio, duration, prompt, status,
    isValid, isSubmitting,
    setWorkflow, setAspectRatio, setDuration, setPrompt, setStatus, reset,
  }
})
