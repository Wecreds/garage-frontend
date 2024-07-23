import axios from "axios";
export default class AccessoryApi {
  async fetchAllAccessories() {
    const { data } = await axios.get("/accessories/");
    return data.results;
  }
  async addAccessory(category) {
    const { data } = await axios.post("/categories/", category);
    return data.results;
  }
  async updateAccessory(category) {
    const { data } = await axios.put(`/categories/${category.id}/`, category);
    return data.results;
  }
  async delAccessory(id) {
    const { data } = await axios.delete(`/categories/${id}/`);
    return data.results;
  }
}
