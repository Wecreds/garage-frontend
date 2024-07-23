import axios from "axios";
export default class AccessoryApi {
  async fetchAllAccessories() {
    const { data } = await axios.get("/accessories/");
    return data.results;
  }
  async addAccessory(accessory) {
    const { data } = await axios.post("/accessories/", accessory);
    return data.results;
  }
  async updateAccessory(accessory) {
    const { data } = await axios.put(`/accessories/${accessory.id}/`, accessory);
    return data.results;
  }
  async delAccessory(id) {
    const { data } = await axios.delete(`/accessories/${id}/`);
    return data.results;
  }
}
