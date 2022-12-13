import Register from '@/Views/Auth/Register.vue';
import Login from '@/Views/Auth/Login.vue';
import ForgotPassword from '@/Views/Auth/ForgotPassword.vue';
import Logout from '@/Views/Auth/Logout.vue';

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
