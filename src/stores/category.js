import { ref } from 'vue';
import { defineStore } from 'pinia';

import CategoryApi from '@/api/category';
const categoryApi = new CategoryApi();

export const useCategoryStore = defineStore('category', () => {
    const categories = ref([]);

    const fetchAllCategories = async() => {
        const data = await categoryApi.fetchAllCategories();
        categories.value = data.results;
    };

    const saveCategory = async (category) => {
        if (category.id) {
            await categoryApi.updateCategory(category);
        } else {
            await categoryApi.addCategory(category);
        };
        fetchAllCategories();
    };

    const delCategory = async (id) => {
        await categoryApi.delCategory(id);
        fetchAllCategories();
    };

    fetchAllCategories()

    return { categories, fetchAllCategories, saveCategory, delCategory }
});
