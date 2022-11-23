<template>
  <div class="flex align-center gap-sm">
    <div class="card card--shadow flex flex-column items-center gap-xxs padding-sm">
      <p>MON</p>
      <IconSun/>
      <p>72° &nbsp; <span class="color-contrast-low">60°</span></p>
    </div>
    
    <div class="card card--shadow flex flex-column items-center gap-xxs padding-sm">
      <p>TUE</p>
      <IconSunCloud/>
      <p>70° &nbsp; <span class="color-contrast-low">58°</span></p>
    </div>
    
    <div class="card card--shadow flex flex-column items-center gap-xxs padding-sm">
      <p>WED</p>
      <IconSunCloudRain/>
      <p>64° &nbsp; <span class="color-contrast-low">41°</span></p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

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
</script>
