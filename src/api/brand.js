import axios from "axios";
export default class BrandApi {
  async fetchAllBrands() {
    const { data } = await axios.get("/brands/");
    return data;
  }
  async addBrand(brand) {
    const { data } = await axios.post("/brands/", brand);
    return data;
  }
  async updateBrand(brand) {
    const { data } = await axios.put(`/brands/${brand.id}/`, brand);
    return data;
  }
  async delBrand(id) {
    const { data } = await axios.delete(`/brands/${id}/`);
    return data;
  }
}