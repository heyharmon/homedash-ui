<template>
  <div 
    :class="classBinds"
    class="flex justify-center items-center radius-lg bg-black"
    :style="`background-color:${color};`"
  >
    <slot/>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { appendToSet } from '@/App/helpers/index.js'

const props = defineProps({
  size: {
    type: String,
    default: 'lg'
  },
  color: {
    type: String,
    default: '#000'
  }
})

const classBinds = computed(() => {
  let classList = ''
  
  classList = appendToSet(`width-${props.size} height-${props.size}`, classList)

  return classList
})
</script>
