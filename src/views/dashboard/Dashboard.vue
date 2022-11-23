<template>
  <div class="padding-y-lg">
    <div class="grid gap-lg">     
      <div class="col-6">
        <div class="flex flex-column gap-sm margin-bottom-xl">
          <p class="color-contrast-medium text-md">Good morning</p>
          <p class="text-xxxl">12:21 PM</p>
          <p>Monday, October 3</p>
        </div>
        <WidgetWeather/>
      </div>
      
      <div class="col-6 flex flex-column gap-sm">
        <WidgetEvents/>
        <WidgetTasks/>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Calendar from '@/app/components/Calendar.vue'
import WidgetWeather from '@/views/dashboard/components/WidgetWeather.vue'
import WidgetEvents from '@/views/dashboard/components/WidgetEvents.vue'
import WidgetTasks from '@/views/dashboard/components/WidgetTasks.vue'
</script>

<style lang="scss">
  #app {
    // background-color: #f5f5f5;
    background-color: #aaa;
    // background: linear-gradient(0deg, #eaf8ff 0%, #ffffff 100%);
    height: 100vh;
    
    // filter: blur(8px);
    // background: url('http://placekitten.com/1920/1080');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }
</style>
