import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue';
import ForgotPassword from '@/views/auth/ForgotPassword.vue';
import Logout from '@/views/auth/Logout.vue';

export default [
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
]
