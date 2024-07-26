import { ref } from 'vue';
import { defineStore } from 'pinia';

import BrandApi from '@/api/brand';
const brandApi = new BrandApi();

export const useBrandStore = defineStore('brand', () => {
    const brands = ref([]);

    const fetchAllBrands = async() => {
        const data = await brandApi.fetchAllBrands();
        brands.value = data.results;
    };

    const saveBrand = async (brand) => {
        if (brand.id) {
            await brandApi.updateBrand(brand);
        } else {
            await brandApi.addBrand(brand);
        };
        fetchAllBrands();
    };

    const delBrand = async (id) => {
        await brandApi.delBrand(id);
        fetchAllBrands();
    };

    fetchAllBrands()

    return { brands, fetchAllBrands, saveBrand, delBrand }
});
