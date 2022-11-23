<template>
  <div class="card card--shadow flex flex-column padding-md">
    <div class="flex items-center justify-between margin-bottom-sm">
      <p class="flex items-center gap-xs text-md">
        <IconCheck/>
        Todos
      </p>
      <IconPlus size="md"/>
    </div>
    
    <div class="flex flex-column gap-sm padding-top-xs">
      <div v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center border radius-md padding-y-xs padding-x-sm">
        <div>
          <p class="text-md margin-bottom-xxxs">{{ task.title }}</p>
          <p class="text-sm color-contrast-medium">{{ task.due }} • {{ task.owner }}</p>
        </div>
        
        <IconCheck :class="task.completed ? 'color-success' : 'color-contrast-lower'"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconCheck from '@/app/components/icons/IconCheck.vue'

const tasks = reactive([
  {
    completed: true,
    title: 'Take out the trash',
    description: '',
    due: 'Today',
    owner: 'Ryan',
  },
  {
    completed: false,
    title: 'Fix the garage door',
    description: '',
    due: 'This week',
    owner: 'Ryan',
  },
  {
    completed: false,
    title: 'Fix car door',
    description: '',
    due: 'This week',
    owner: 'Sarah',
  }
])
</script>
