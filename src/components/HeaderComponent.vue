<template>
    <div class="bg-gray-100">
      <router-link to="/">Home</router-link> -
      <router-link to="/accessories">Acessórios</router-link> - 
      <router-link to="/categories">Categorias</router-link> - 
      <router-link to="/colors">Cores</router-link> - 
      <router-link to="/brands">Marcas</router-link>
      <br>
      <div v-if="authStore.loggedIn">
      <router-link  to="/logout">Logout</router-link> |
        {{ authStore.user.email }}
      </div>
      <router-link v-else to="/login">Login</router-link>
      <hr class="m-2"/>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>
