import { defineStore, acceptHMRUpdate } from 'pinia'
import { taskApi as TaskApi } from '@/Domain/Tasks/Api/taskApi'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        team: 1,
        tasks: [
          {
            id: 1,
            completed: false,
            description: 'This is the task description',
            due: 'Today',
            owner: 'Ryan',
            title: 'Fix car door',
          },
          {
            id: 2,
            completed: true,
            description: 'This is the task description',
            due: 'Tomorrow',
            owner: 'Ryan',
            title: 'Clean the garage',
          },
          {
            id: 3,
            completed: false,
            description: 'This is the task description',
            due: 'Thursday',
            owner: 'Ryan',
            title: 'Take out the trash',
          }
        ],
        task: null,
        createModalOpen: false,
        isLoading: false,
    }),
    
    actions: {
        index(params) {
          this.isLoading = true
          this.tasks = null
          
          TaskApi.index(this.team, params)
            .then(response => {
              this.tasks = response.data.data
              this.isLoading = false
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(task) {
          this.isLoading = true
          
          await TaskApi.store(this.team, task)
            .then(response => {
              console.log(response)
              // this.tasks.unshift(response.data.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async show(id) {
          this.isLoading = true
          this.task = null
          
          await TaskApi.show(this.team, id)
            .then(response => {
              this.task = response.data.data
              this.isLoading = false
            })
        },
        
        async destroy(id) {
          this.isLoading = true
          
          await TaskApi.destroy(this.team, id)
            .then(response => {
              this.tasks = this.tasks.filter((task) => task.id !== id)
              this.isLoading = false
            })
        },
        
        toggleCreateModal() {
          this.createModalOpen = !this.createModalOpen
        },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot))
}
