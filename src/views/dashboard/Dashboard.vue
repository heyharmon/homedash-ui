<template>
  <div>
    <!-- <div class="flex items-center justify-between padding-y-md">
      <h1 class="text-lg">Dashboard</h1>
      <button class="btn btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
        <span class="margin-left-xxs">Add</span>
      </button>
    </div> -->

    <div class="padding-y-lg">
      <div class="grid gap-lg">     
        <div class="col-6">
          <!-- Greeting -->
          <div class="flex flex-column gap-sm margin-bottom-xl">
            <p class="color-contrast-medium text-md">Good morning</p>
            <p class="text-xxxl">12:20 PM</p>
            <p>Monday, October 3</p>
          </div>
          
          <!-- Weather -->
          <div class="flex align-center gap-sm">
            <div class="flex flex-column card card--shadow items-center gap-xxs">
              <p>MON</p>
              <IconSun/>
              <p>72° &nbsp; <span class="color-contrast-low">60°</span></p>
            </div>
            
            <div class="flex flex-column card card--shadow items-center gap-xxs">
              <p>TUE</p>
              <IconSunCloud/>
              <p>70° &nbsp; <span class="color-contrast-low">58°</span></p>
            </div>
            
            <div class="flex flex-column card card--shadow items-center gap-xxs">
              <p>WED</p>
              <IconSunCloudRain/>
              <p>64° &nbsp; <span class="color-contrast-low">41°</span></p>
            </div>
          </div>
        </div>
        
        <div class="col-6">
          <div class="card card--shadow padding-lg flex flex-column">
            <div class="flex items-center justify-between margin-bottom-sm">
              <p class="flex items-center gap-xs text-md">
                <IconCalendar/>
                Coming up
              </p>
              
              <IconPlus size="md"/>
            </div>
            
            <div class="flex flex-column gap-xxs margin-bottom-md padding-y-md border-bottom">
              <p class="color-contrast-medium">Event • Monday, Oct 22</p>
              <p class="text-lg">1:00pm Doctor appointment</p>
            </div>
            
            <div class="flex flex-column gap-xxs padding-y-md">
              <p class="color-contrast-medium">Event • Monday, Oct 22</p>
              <p class="text-lg">1:00pm Doctor appointment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
// import { useOrganizationStore } from '@/domain/organizations/store/useOrganizationStore'

import Calendar from '@/app/components/Calendar.vue'

import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconCalendar from '@/domain/events/icons/IconCalendar.vue'
import IconSun from '@/domain/weather/icons/IconSun.vue'
import IconSunCloud from '@/domain/weather/icons/IconSunCloud.vue'
import IconSunCloudRain from '@/domain/weather/icons/IconSunCloudRain.vue'

const query = 'Salt Lake City, Utah'
const lat = '40.760780'
const lon = '-111.891045'
const apiKey = 'b2425bfdc4eb842bea86082cf0f0821a'

function fetchWeather() {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((response) => {
        console.log(response)
      })
}

onMounted(() => {
  // fetchWeather()
})
// const organizationStore = useOrganizationStore()

// onMounted(() => {
//     organizationStore.index()
// })
</script>

<style lang="scss">
  #app {
    background-color: #f5f5f5;
    height: 100vh;
    
    // background: linear-gradient(0deg, #eaf8ff 0%, #ffffff 100%);

    
    // filter: blur(8px);
    // background: url('http://placekitten.com/1920/1080');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }
</style>
