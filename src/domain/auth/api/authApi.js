import { httpClient as HttpClient } from '@/App/Api/httpClient'

const authApi = {
    /**
     * Register new user
     *
     * @param String name
     * @param String email
     * @param String password
     * @param String password_confirmation [repeated password]
     * @return promise
     */
    register(name, email, password, password_confirmation) {
        return HttpClient.post(`/Auth/register`, {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation, 
        })
    },
    
    /**
     * Log in
     *
     * @param string email
     * @param string password
     * @return promise
     */
    login(email, password) {
        return HttpClient.post(`/Auth/login`, {
          email: email,
          password: password,
        })
    },
    
    /**
     * Log out
     *
     * @return promise
     */
    logout() {
        return HttpClient.post(`/Auth/logout`)
    },
}

export { authApi }
