import {
  Music,
  Smartphone,
  Clapperboard,
  Monitor,
  Square,
  Zap,
  Timer,
  Clock,
} from 'lucide-vue-next'

import type {
  SelectorOption,
  WorkflowType,
  AspectRatioType,
  DurationType,
} from '../types'

export const WORKFLOW_OPTIONS: SelectorOption<WorkflowType>[] = [
  { value: 'beat-sync', label: 'Beat Sync', icon: Music },
  { value: 'ugc-video', label: 'UGC Video', icon: Smartphone },
  { value: 'generate-video', label: 'Generate Video', icon: Clapperboard },
]

export const ASPECT_RATIO_OPTIONS: SelectorOption<AspectRatioType>[] = [
  { value: '9:16', label: '9:16', icon: Smartphone },
  { value: '16:9', label: '16:9', icon: Monitor },
  { value: '1:1', label: '1:1', icon: Square },
]

export const DURATION_OPTIONS: SelectorOption<DurationType>[] = [
  { value: 'short', label: 'Short', icon: Zap },
  { value: 'medium', label: 'Medium', icon: Timer },
  { value: 'long', label: 'Long', icon: Clock },
]
