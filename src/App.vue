<template>
  <div class="bg-white min-h-screen x-screen p-4">
    <router-link to="/">Home</router-link> - 
    <router-link to="/accessories">Acessórios</router-link>
    <hr class="m-2"/>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
