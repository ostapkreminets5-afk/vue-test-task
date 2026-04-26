import { useWorkflowStore } from '../common/store'
import { submitWorkflow } from '../common/api'

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
      store.setStatus('success')
    } catch {
      store.setStatus('error')
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
