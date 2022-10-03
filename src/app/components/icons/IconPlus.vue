<template>
  <svg 
    :class="`icon--${size}`"
    class="icon fill-current"
    viewBox="0 0 24 24"
  >
    <g stroke-linecap="round" fill="none" stroke="currentColor" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line> <line x1="22" y1="12" x2="2" y2="12"></line></g>
  </svg>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'sm'
  }
})
</script>
