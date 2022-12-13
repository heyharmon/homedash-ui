import axios from 'axios'
// import { useAuthStore } from '@/Domain/Auth/Store/useAuthStore'

/**
* Setup Http client
* An instance of Axios we can use for all API requests to CMS
*/
const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

/**
* Authenticate requests
* Return auth header with access token if user is logged in
*/
// httpClient.interceptors.request.use((config) => {
//     const { user } = useAuthStore()
//     if (!!user?.access_token) {
//       config.headers.Authorization = `Bearer ${user.access_token}`
//     }
//     return config
//   }, (error) => { 
//     Promise.reject(error) 
//   }
// );

/**
* Catch unauthorized requests
* Logout if 401 Unauthorized or 403 Forbidden response returned from api
*/
// httpClient.interceptors.response.use((response) => { return response }, (error) => {
//     if ([401, 403].includes(error.response.status)) {
//       document.location.href = '/logout';
//     }
// });

export { httpClient }
