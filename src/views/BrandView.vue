<template>
    <h1>Marcas</h1>
    <hr class="m-2"/>
    <div>
         <input type="text" v-model="brand.name" placeholder="Nome"> | 
         <input type="text" v-model="brand.nationality" placeholder="Nacionalidade">
         <button @click="saveBrand()">Salvar</button> -
         <button @click="cleanQuery()">Limpar</button>
    </div>
    <hr class="m-2">
    <ul class="flex justify-around flex-col md:flex-row">
         <li v-for="brand in brands" :key="brand.id">
             <span @click="editBrand(brand)">
                 {{ brand.id }} - {{ brand.name }} - {{ brand.nationality }}
             </span> -
             <button @click="delBrand(brand.id)">Excluir</button>
         </li>
    </ul>
    <PageSelectorComponent :currentPage="currentPage" @nextPage="nextPage()" @previousPage="previousPage()" :totPages="totPages" @selectedPage="handleSelectedPage"/>
 </template>
 <script setup>
 import { reactive, computed, onMounted, ref } from "vue";

 import PageSelectorComponent from "@/components/PageSelectorComponent.vue";
 import { useBrandStore } from '@/stores/brand';
 
 const brandStore = useBrandStore();
 
 const defaultBrand = { id: null, name: "", nationality: ""};
 const brand = reactive({...defaultBrand});
 const brands = computed(() => {return brandStore.brands});
 const totPages = computed(() => {return brandStore.totalPages});

 const currentPage = ref(1);

 const nextPage = () => {
    if(currentPage.value < totPages.value){
        currentPage.value ++;
        brandStore.fetchBrandsByPage(currentPage.value);
    }
}

const previousPage = () => {
    if (currentPage.value > 1){
        currentPage.value --;
        brandStore.fetchBrandsByPage(currentPage.value);
    }
}

const handleSelectedPage = (page) => {
    currentPage.value = page
    brandStore.fetchBrandsByPage(currentPage.value);
}
 
 const cleanQuery = () => {
     Object.assign(brand, { ...defaultBrand});
 };
 
 const delBrand = async(id) => {
     await brandStore.delBrand(id);
 };
 
 const saveBrand = async() => {
     await brandStore.saveBrand(brand);
     cleanQuery();
 };
 
 const editBrand = async(refBrand) => {
     Object.assign(brand, refBrand);
 };
 
 onMounted(() => {
     brandStore.fetchBrandsByPage(currentPage.value);
 });
 </script>