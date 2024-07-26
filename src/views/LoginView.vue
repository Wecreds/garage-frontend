<template>
    <div class="authContainer">
        <passage-auth app-id="1WVoxrGB9C6odLJ5zHcuJHwJ"></passage-auth>
    </div>
</template>
<script setup>
import "@passageidentity/passage-elements/passage-auth";

import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore();

const getUserInfo = async () => {
    try {
        const authToken = localStorage.getItem('psg_auth_token');
        const passageUser = new PassageUser(authToken);
        const user = await passageUser.userInfo(authToken);
        console.log(user);
        if (user) {
            await authStore.setToken(authToken);
            router.push({ name: 'home' })
        } else {
            authStore.unsetToken();
        }
    } catch (error) {
        authStore.unsetToken();
    }
};

onMounted(() => {
    getUserInfo();
});
</script>