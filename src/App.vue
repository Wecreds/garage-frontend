<template>
  <div class="bg-white min-h-screen x-screen p-4">
    <div class="bg-gray-100">
      <router-link to="/">Home</router-link> -
      <router-link to="/accessories">Acessórios</router-link>
      <div v-if="authStore.loggedIn">
      <router-link  to="/logout">Logout</router-link> |
        {{ authStore.user.email }}
      </div>
      <router-link v-else to="/login">Login</router-link>
      <hr class="m-2"/>
    </div>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  console.log(authStore);
})
</script>
