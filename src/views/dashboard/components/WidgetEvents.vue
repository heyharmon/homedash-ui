<template>
  <div class="card card--shadow flex flex-column">
    <div class="flex items-center justify-between margin-bottom-xs">
      <p class="flex items-center gap-xs text-md">
        <IconCalendar/>
        Coming up
      </p>
      <IconPlus size="md"/>
    </div>
    
    <!-- <div class="flex flex-column gap-xxs margin-bottom-md padding-y-md border-bottom">
      <p class="color-contrast-medium">Event • Monday, Oct 22</p>
      <p class="text-lg">1:00pm Doctor appointment</p>
    </div> -->
    
    <div class="flex flex-column gap-xxs padding-top-xs">
      <p class="color-contrast-medium">Event • Monday, Oct 22</p>
      <p class="text-lg">1:00pm Doctor appointment</p>
    </div>
  </div>
</template>

<script setup>
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconCalendar from '@/domain/events/icons/IconCalendar.vue'
</script>
