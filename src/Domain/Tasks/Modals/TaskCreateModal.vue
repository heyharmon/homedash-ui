<template>
  <AppModal 
    size="xs"
    @closed="store.toggleCreateModal()" 
    :class="store.createModalOpen ? 'modal--is-visible' : ''"
  >
    <p class="flex items-center gap-xs text-md text-bold margin-bottom-sm">
      <TasksBadge/>
      Create a task
    </p>
    
    <form action="#" @submit.prevent="create()">
      <AppInput v-model="task.url" label="URL" placeholder="https://" required />

      <div class="margin-top-md margin-bottom-sm">
        <button class="btn btn--primary btn--md width-100%">Create task</button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/Domain/Tasks/Store/useTaskStore'
import AppModal from '@/App/Components/AppModal.vue'
import AppInput from '@/App/Components/Forms/AppInput.vue'
import TasksBadge from '@/Domain/Tasks/Components/TasksBadge.vue'

const store = useTaskStore()

const task = ref({
  completed: false,
  description: '',
  due: '',
  owner: '',
  title: '',
})

function create() {
  store.store(task.value)
    .then(() => {
      store.toggleCreateModal()
  
      task.value = {
        completed: false,
        description: '',
        due: '',
        owner: '',
        title: '',
      }
    })
}
</script>
