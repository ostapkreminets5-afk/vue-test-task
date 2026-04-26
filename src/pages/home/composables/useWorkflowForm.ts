import { useWorkflowStore } from '../common/store'
import { submitWorkflow } from '../common/api'
import type { SubmitStatus } from '../common/types'

const resultHandlers: Record<string, (store: ReturnType<typeof useWorkflowStore>) => void> = {
  success: (store) => store.setStatus('success'),
  error: (store) => store.setStatus('error'),
}

export function useWorkflowForm() {
  const store = useWorkflowStore()

  async function handleSubmit() {
    store.setStatus('loading')

    const formData = {
      workflow: store.workflow,
      aspectRatio: store.aspectRatio,
      duration: store.duration,
      prompt: store.prompt,
    }

    try {
      await submitWorkflow(formData)
      resultHandlers.success(store)
    } catch {
      resultHandlers.error(store)
    }
  }

  function handleReset() {
    store.reset()
  }

  return {
    store,
    handleSubmit,
    handleReset,
  }
}
