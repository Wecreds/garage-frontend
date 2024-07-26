<template>
    <h1>Cores</h1>
    <hr class="m-2"/>
    <div>
         <input type="text" v-model="color.name" placeholder="Nome da cor">
         <button @click="saveColor()">Salvar</button> -
         <button @click="cleanQuery()">Limpar</button>
    </div>
    <hr class="m-2">
    <ul class="flex justify-around flex-col md:flex-row">
         <li v-for="color in colors" :key="color.id">
             <span @click="editColor(color)">
                 {{ color.id }} - {{ color.name }}
             </span> -
             <button @click="delColor(color.id)">Excluir</button>
         </li>
    </ul>
 </template>
 <script setup>
 import { reactive, computed, onMounted } from "vue";
 import { useColorStore } from '@/stores/color';
 
 const colorStore = useColorStore(); 
 
 const defaultColor = { id: null, name: ""};
 const color = reactive({...defaultColor});
 const colors = computed(() => {return colorStore.colors});
 
 const cleanQuery = () => {
     Object.assign(color, { ...defaultColor});
 };
 
 const delColor = async(id) => {
     await colorStore.delColor(id);
 };
 
 const saveColor = async() => {
     await colorStore.saveColor(color);
     cleanQuery();
 };
 
 const editColor = async(refColor) => {
     Object.assign(color, refColor);
 };
 
 onMounted(() => {
     colorStore.fetchAllColors();
 });
 </script>