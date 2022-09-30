<template>

</template>

<script setup>
// TODO: Let's just use the store for this. Make it async.
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  authStore.logout()
    .then(() => {
      router.push({ name: 'login' })
    })
})
</script>
