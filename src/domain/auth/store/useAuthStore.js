import { defineStore, acceptHMRUpdate } from 'pinia'
import { authApi as AuthApi } from '@/domain/auth/api/authApi'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      user: JSON.parse(localStorage.getItem('user')),
      organization: 'bloomcu',
    }),
    
    getters: {
      isAuthenticated(state) {
        if (state.user) { 
          return state.user.access_token
        }
      }
    },
    
    actions: {
      async register(name, email, password, password_confirmation) {
        await AuthApi.register(name, email, password, password_confirmation)
          .then(response => {
            this.user = response.data.data
            
            // Store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response.data.data))
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      async login(email, password) {
        await AuthApi.login(email, password)
          .then(response => {
            this.user = response.data.data
            this.organization = response.data.data.organization.slug
            
            // Store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response.data.data))
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      async logout() {
        localStorage.removeItem('user');
        
        await AuthApi.logout()
          .then(response => {
            this.user = null
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
