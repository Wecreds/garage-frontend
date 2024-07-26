<template>
   <h1>Acessórios</h1>
   <hr class="m-2"/>
   <div>
        <input type="text" v-model="accessory.desc" placeholder="Descrição">
        <button @click="saveAccessory()">Salvar</button> - 
        <button @click="cleanQuery()">Limpar</button>
   </div>
   <hr class="m-2">
   <ul>
        <li v-for="accessory in accessories" :key="accessory.id">
            <span @click="editAccessory(accessory)">
                {{ accessory.id }} - {{ accessory.desc }}
            </span> - 
            <button @click="delAccessory(accessory.id)">Excluir</button>
        </li>
   </ul>
</template>
<script setup>
import { reactive, computed, onMounted } from "vue";
import { useAccessoryStore } from '@/stores/accessory';

const accessoryStore = useAccessoryStore(); 

const defaultAccessory = { id: null, desc: ""};
const accessory = reactive({...defaultAccessory});
const accessories = computed(() => {return accessoryStore.accessories});

const cleanQuery = () => {
    Object.assign(accessory, { ...defaultAccessory});
};

const delAccessory = async(id) => {
    await accessoryStore.delAccessory(id);
};

const saveAccessory = async() => {
    await accessoryStore.saveAccessory(accessory);
    cleanQuery();
};

const editAccessory = async(refAccessory) => {
    Object.assign(accessory, refAccessory);
};

onMounted(() => {
    accessoryStore.fetchAllAccessories();
});
</script>