import type { WorkflowFormState } from '../types'

const DELAY_MS = 1500
const SUCCESS_RATE = 0.8

function createMockResponse(data: WorkflowFormState) {
  const isSuccess = Math.random() < SUCCESS_RATE
  return {
    success: isSuccess,
    data: isSuccess ? { id: crypto.randomUUID(), ...data } : null,
    error: isSuccess ? null : 'Server error: generation failed',
  }
}

export function submitWorkflow(data: WorkflowFormState) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = createMockResponse(data)
      response.success ? resolve(response) : reject(response)
    }, DELAY_MS)
  })
}
