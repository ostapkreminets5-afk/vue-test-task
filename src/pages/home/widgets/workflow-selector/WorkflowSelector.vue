<script setup lang="ts">
import { SelectorGroup } from '@/shared/ui/selector-group'
import { WORKFLOW_OPTIONS } from '../../common/const/options'
import { useWorkflowStore } from '../../common/store'

const store = useWorkflowStore()
</script>

<template>
  <SelectorGroup
    label="Workflow"
    :options="WORKFLOW_OPTIONS"
    :model-value="store.workflow"
    @update:model-value="store.setWorkflow"
  />
</template>
