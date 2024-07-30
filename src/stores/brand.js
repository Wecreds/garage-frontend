import { ref } from 'vue';
import { defineStore } from 'pinia';

import BrandApi from '@/api/brand';
const brandApi = new BrandApi();

export const useBrandStore = defineStore('brand', () => {
    const brands = ref([]);
    const totalPages = ref(1);

    const fetchBrandsByPage = async(page) => {
        const data = await brandApi.fetchBrandsByPage(page);
        brands.value = data.results;
        totalPages.value = /*Math.ceil(data.count / 10)*/ data.count
    };

    const saveBrand = async (brand) => {
        if (brand.id) {
            await brandApi.updateBrand(brand);
        } else {
            await brandApi.addBrand(brand);
        };
        fetchBrandsByPage();
    };

    const delBrand = async (id) => {
        await brandApi.delBrand(id);
        fetchBrandsByPage();
    };

    fetchBrandsByPage()

    return { totalPages, brands, fetchBrandsByPage, saveBrand, delBrand }
});
