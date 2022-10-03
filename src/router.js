import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

// import auth from '@/views/auth/routes/index.js'
import dashboard from '@/views/dashboard/routes/index.js'

const routes = [
  // ...auth,
  ...dashboard,
  // {
  //   path: '/',
  //   redirect: 'dashboard'
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

/**
* Restrict unauthenticated access
* Redirect to login page if not logged in and trying to access a restricted page
*/
// router.beforeEach(async (to) => {
//   // TODO: Can I just isntantiate this store one in this file?
//   const authStore = useAuthStore()
// 
//   const publicRouteNames = [
//     'register', 
//     'login', 
//     'forgotPassword',
//     'styleDesignBrief',
//     'sitesLaunch',
//   ]
// 
//   const authRequired = !publicRouteNames.includes(to.name)
// 
//   if (!authStore.user && authRequired) {
//     // TODO: Set the return URL so that when the user logs in, they can return here
//     // authStore.returnUrl = to.fullPath
// 
//     return '/login'
//   }
// })

/**
* Setup organization
* Get organization from url, persist in auth store for use in api requests
*/
// router.beforeEach(async (to) => {
//     // TODO: Can I just isntantiate this store one in this file?
//     const authStore = useAuthStore()
// 
//     if (to.params.organization) {
//         authStore.organization = to.params.organization
//     }
// })

export default router
