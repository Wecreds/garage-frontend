import { ref } from 'vue';
import { defineStore } from 'pinia';

import ColorApi from '@/api/color';
const colorApi = new ColorApi();

export const useColorStore = defineStore('color', () => {
    const colors = ref([]);

    const fetchAllColors = async() => {
        const data = await colorApi.fetchAllColors();
        colors.value = data.results;
    };

    const saveColor = async (color) => {
        if (color.id) {
            await colorApi.updateColor(color);
        } else {
            await colorApi.addColor(color);
        };
        fetchAllColors();
    };

    const delColor = async (id) => {
        await colorApi.delColor(id);
        fetchAllColors();
    };

    fetchAllColors()

    return { colors, fetchAllColors, saveColor, delColor }
});
