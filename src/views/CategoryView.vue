<template>
    <h1>Categorias</h1>
    <hr class="m-2"/>
    <div>
         <input type="text" v-model="category.desc" placeholder="Descrição">
         <button @click="saveCategory()">Salvar</button> -
         <button @click="cleanQuery()">Limpar</button>
    </div>
    <hr class="m-2">
    <ul>
         <li v-for="category in categories" :key="category.id">
             <span @click="editCategory(category)">
                 {{ category.id }} - {{ category.desc }}
             </span> -
             <button @click="delCategory(category.id)">Excluir</button>
         </li>
    </ul>
 </template>
 <script setup>
 import { reactive, computed, onMounted } from "vue";
 import { useCategoryStore } from '@/stores/category';
 
 const categoryStore = useCategoryStore(); 
 
 const defaultCategory = { id: null, desc: ""};
 const category = reactive({...defaultCategory});
 const categories = computed(() => {return categoryStore.categories});
 
 const cleanQuery = () => {
     Object.assign(category, { ...defaultCategory});
 };
 
 const delCategory = async(id) => {
     await categoryStore.delCategory(id);
 };
 
 const saveCategory = async() => {
     await categoryStore.saveCategory(category);
     cleanQuery();
 };
 
 const editCategory = async(refCategorie) => {
     Object.assign(category, refCategorie);
 };
 
 onMounted(() => {
     categoryStore.fetchAllCategories();
 });
 </script>