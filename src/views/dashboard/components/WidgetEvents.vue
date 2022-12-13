<template>
  <div class="card card--shadow flex flex-column padding-md">
    <div class="flex items-center justify-between margin-bottom-sm">
      <p class="flex items-center gap-xs text-md">
        <EventsBadge/>
        Events
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
import IconPlus from '@/App/Components/Icons/IconPlus.vue'
import IconCalendar from '@/Domain/events/Icons/IconCalendar.vue'
import EventsBadge from '@/Domain/Events/Components/EventsBadge.vue'
</script>
