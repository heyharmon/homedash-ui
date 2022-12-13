<template>
  <div class="padding-y-lg">
    <div class="flex justify-between margin-bottom-lg">
      <div>
        <p class="color-contrast-medium text-md margin-bottom-xxxs">Good morning</p>
        <p class="margin-bottom-xxs">Monday, October 3</p>
        <p class="text-xxxl">12:21 PM</p>
      </div>
      
      <div class="flex-grow-0">
        <WidgetWeather/>  
      </div>
    </div>
    
    <div class="flex flex-column gap-md">
      <WidgetEvents/>
      <WidgetTasks/>
    </div>
  </div>
</template>

<script setup>
// import Calendar from '@/App/Components/AppCalendar.vue'
import WidgetWeather from '@/Views/Dashboard/Components/WidgetWeather.vue'
import WidgetEvents from '@/Views/Dashboard/Components/WidgetEvents.vue'
import WidgetTasks from '@/Views/Dashboard/Components/WidgetTasks.vue'
</script>
