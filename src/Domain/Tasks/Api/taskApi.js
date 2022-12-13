import { httpClient as HttpClient } from '@/App/Api/httpClient'

const taskApi = {
    /**
     * List tasks
     *
     * @param String team [Team slug]
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(team, params) {
      return HttpClient.get(`/${team}/tasks`, { params: params })
    },
    
    /**
     * Store a task
     *
     * @param String team [Team slug]
     * @param Object task [Properties to create task from]
     * @return promise
     */
    store(team, task) {
      // return HttpClient.post(`/${team}/tasks`, task)
      return {
        data: task
      }
    },
    
    /**
     * Show a task
     *
     * @param String team [Team slug]
     * @param Integer id [id of the task you want to show]
     * @return promise
     */
    show(team, id) {
      return HttpClient.get(`/${team}/tasks/${id}`)
    },
    
    /**
     * Destroy a task
     *
     * @param String team [Team slug]
     * @param Integer id [Id of the task you want to destroy]
     * @return promise
     */
    destroy(team, id) {
      return HttpClient.delete(`/${team}/tasks/${id}`)
    }
}

export { taskApi }
