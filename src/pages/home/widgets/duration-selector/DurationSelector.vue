<script setup lang="ts">
import { SelectorGroup } from '@/shared/ui/selector-group'
import { DURATION_OPTIONS } from '../../common/const/options'
import { useWorkflowStore } from '../../common/store'

const store = useWorkflowStore()
</script>

<template>
  <SelectorGroup
    label="Duration"
    :options="DURATION_OPTIONS"
    :model-value="store.duration"
    @update:model-value="store.setDuration"
  />
</template>
