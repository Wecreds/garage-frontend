<template>
   <div>
    
   </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import AccessoryApi from "@/api/accessory";
const accessoryApi = new AccessoryApi();

const defaultAccessory = { id: null, desc: ""};
const accessories = ref([]);
const category = reactive({...defaultCategoria});

onMounted(async () => {
    accessories.value = await accessoryApi.fetchAllAccessories();
});


 
</script>