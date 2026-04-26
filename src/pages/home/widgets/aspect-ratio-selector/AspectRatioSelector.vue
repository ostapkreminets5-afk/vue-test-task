<script setup lang="ts">
import { SelectorGroup } from '@/shared/ui/selector-group'
import { ASPECT_RATIO_OPTIONS } from '../../common/const/options'
import { useWorkflowStore } from '../../common/store'

const store = useWorkflowStore()
</script>

<template>
  <SelectorGroup
    label="Aspect Ratio"
    :options="ASPECT_RATIO_OPTIONS"
    :model-value="store.aspectRatio"
    @update:model-value="store.setAspectRatio"
  />
</template>