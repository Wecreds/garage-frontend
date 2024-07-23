<template>
    <h1>Deslogando...</h1>
</template>
<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
    authStore.unsetToken()
    localStorage.removeItem('psg_auth_token')
    router.push({ name: 'home' })
})
</script>