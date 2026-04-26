import type { Component } from 'vue'
import { Loader2, CheckCircle2, XCircle } from 'lucide-vue-next'
import type { SubmitStatus } from '../types'

export interface StatusConfig {
  message: string
  icon: Component | null
  className: string
}

export const STATUS_CONFIG_MAP: Record<SubmitStatus, StatusConfig> = {
  idle: {
    message: '',
    icon: null,
    className: 'status-idle',
  },
  loading: {
    message: 'Generating your video...',
    icon: Loader2,
    className: 'status-loading',
  },
  success: {
    message: 'Video generation started successfully!',
    icon: CheckCircle2,
    className: 'status-success',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    icon: XCircle,
    className: 'status-error',
  },
}
