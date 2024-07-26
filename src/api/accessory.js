import axios from "axios";
export default class AccessoryApi {
  async fetchAllAccessories() {
    const { data } = await axios.get("/accessories/");
    return data;
  }
  async addAccessory(accessory) {
    const { data } = await axios.post("/accessories/", accessory);
    return data;
  }
  async updateAccessory(accessory) {
    const { data } = await axios.put(`/accessories/${accessory.id}/`, accessory);
    return data;
  }
  async delAccessory(id) {
    const { data } = await axios.delete(`/accessories/${id}/`);
    return data;
  }
}
