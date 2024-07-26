<template>
   <h1>Acessórios</h1>
   <hr class="m-2"/>
   <div>
        <input type="text" v-model="accessory.desc" placeholder="Descrição">
        <button @click="saveAccessory()">Salvar</button>
        <button @click="cleanQuery()">Limpar</button>
   </div>
   <hr class="m-2">
   <ul>
        <li v-for="accessory in accessories" :key="accessory.id">
            <span @click="editAccessorry(accessory)">
                {{ accessory.id }} - {{ accessory.desc }}
            </span>
            <button @click="delAccessory(accessory.id)">Excluir</button>
        </li>
   </ul>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import AccessoryApi from "@/api/accessory";
const accessoryApi = new AccessoryApi();

const defaultAccessory = { id: null, desc: ""};
const accessories = ref([]);
const accessory = reactive({...defaultAccessory});

onMounted(async () => {
    accessories.value = await accessoryApi.fetchAllAccessories();
    console.log(accessories.value);
});

const cleanQuery = () => {
    Object.assign(accessory, { ...defaultAccessory});
};

const saveAccessory = async() => {
    if (accessory.id) {
        await accessoryApi.updateAccessory(accessory);
    } else {
        await accessoryApi.addAccessory(accessory);
    }
    accessories.value = await accessoryApi.fetchAllAccessories();
    cleanQuery();
};

const editAccessorry = async(refAccessory) => {
    Object.assign(accessory, refAccessory);
};

const delAccessory = async(id) => {
    await accessoryApi.delAccessory(id);
    accessories.value = await accessoryApi.fetchAllAccessories();
};
</script>