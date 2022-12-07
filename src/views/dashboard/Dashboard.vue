<template>
  <div class="padding-y-lg">
    <div class="flex justify-between margin-bottom-lg">
      <div class="flex flex-column gap-sm">
        <p class="color-contrast-medium text-md">Good morning</p>
        <p class="text-xxxl">12:21 PM</p>
        <p>Monday, October 3</p>
      </div>
      
      <div class="flex-grow-0">
        <WidgetWeather/>  
      </div>
    </div>
    
    <div class="flex flex-column gap-md">
      <WidgetEvents/>
      <WidgetTasks/>
    </div>
    
    <ModalCreateTask/>
  </div>
</template>

<script setup>
// import Calendar from '@/app/components/AppCalendar.vue'
import WidgetWeather from '@/views/dashboard/components/WidgetWeather.vue'
import WidgetEvents from '@/views/dashboard/components/WidgetEvents.vue'
import WidgetTasks from '@/views/dashboard/components/WidgetTasks.vue'
import ModalCreateTask from '@/views/dashboard/modals/ModalCreateTask.vue'
</script>
