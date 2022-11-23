<template>
  <div class="card card--shadow flex flex-column">
    <div class="flex items-center justify-between margin-bottom-xs">
      <p class="flex items-center gap-xs text-md">
        <IconCheck/>
        Coming up
      </p>
      <IconPlus size="md"/>
    </div>
    
    <!-- <div class="flex flex-column gap-xxs margin-bottom-md padding-y-md border-bottom">
      <p class="color-contrast-medium">Event • Monday, Oct 22</p>
      <p class="text-lg">1:00pm Doctor appointment</p>
    </div> -->
    
    <div class="flex flex-column gap-xxs padding-top-xs">
      <div class="flex justify-between items-center border radius-md padding-y-xs padding-x-sm">
        <div class="">
          <p class="text-sm color-contrast-medium margin-bottom-xxxs">Task • Today • Ryan</p>
          <p class="text-md">Trashcans</p>
        </div>
        
        <IconCheck/>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconCheck from '@/app/components/icons/IconCheck.vue'
</script>
