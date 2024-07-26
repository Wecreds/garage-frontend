import { ref } from 'vue';
import { defineStore } from 'pinia';

import AccessoryApi from '@/api/accessory';
const accessoryApi = new AccessoryApi();

export const useAccessoryStore = defineStore('accessory', () => {
    const accessories = ref([]);

    const fetchAllAccessories = async() => {
        const data = await accessoryApi.fetchAllAccessories();
        accessories.value = data.results;
    };

    const saveAccessory = async (accessory) => {
        if (accessory.id) {
            await accessoryApi.updateAccessory(accessory);
        } else {
            await accessoryApi.addAccessory(accessory);
        };
        fetchAllAccessories();
    };

    const delAccessory = async (id) => {
        await accessoryApi.delAccessory(id);
        fetchAllAccessories();
    };

    fetchAllAccessories()

    return { accessories, fetchAllAccessories, saveAccessory, delAccessory }
});
