<template>
  <div>
    <div class="flex items-center justify-between padding-y-md">
      <h1 class="text-lg">Dashboard</h1>
      <button class="btn btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
        <span class="margin-left-xxs">Add</span>
      </button>
    </div>

    <div class="padding-y-sm">
      <div class="grid gap-sm">     
        <div class="col-3">
          <div class="card card--shadow padding-sm height-xxxl flex flex-column">
            <h3 class="text-md">Foo</h3>
          </div>
        </div>
        <div class="col-3">
          <div class="card card--shadow padding-sm height-xxxl flex flex-column">
            <h3 class="text-md">Bar</h3>
          </div>
        </div>
        <div class="col-3">
          <div class="card card--shadow padding-sm height-xxxl flex flex-column">
            <h3 class="text-md">Baz</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { onMounted } from 'vue'
// import { useOrganizationStore } from '@/domain/organizations/store/useOrganizationStore'

import IconPlus from '@/app/components/icons/IconPlus.vue'

// const organizationStore = useOrganizationStore()

// onMounted(() => {
//     organizationStore.index()
// })
</script>
