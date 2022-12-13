<template>
  <div class="widget card card--shadow flex flex-column padding-md">
    <div class="flex items-center justify-between margin-bottom-sm">
      <p class="flex items-center gap-xs text-md">
        <TasksBadge/>
        Todos
      </p>
      <IconPlus @click="store.toggleCreateModal()" size="md"/>
    </div>
    
    <div class="widget__list flex flex-column padding-top-xs">
      <div 
        v-for="task in store.tasks" 
        :key="task.id" 
        class="widget__list-item flex justify-between items-center padding-y-sm"
      >
        <div class="flex flex-column gap-xxs">
          <p class="text-sm color-contrast-medium">{{ task.due }} • {{ task.owner }}</p>
          <p class="text-md">{{ task.title }}</p>
        </div>
        
        <IconCheck :class="task.completed ? 'color-success' : 'color-contrast-lower'"/>
      </div>
    </div>
    
    <TaskCreateModal/>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useTaskStore } from '@/Domain/Tasks/Store/useTaskStore'
import TaskCreateModal from '@/Domain/Tasks/Modals/TaskCreateModal.vue'
import TasksBadge from '@/Domain/Tasks/Components/TasksBadge.vue'
import IconPlus from '@/App/Components/Icons/IconPlus.vue'
import IconCheck from '@/App/Components/Icons/IconCheck.vue'

const store = useTaskStore()

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
