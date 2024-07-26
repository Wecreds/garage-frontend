import axios from "axios";
export default class CategoryApi {
  async fetchAllCategories() {
    const { data } = await axios.get("/categories/");
    return data;
  }
  async addCategory(category) {
    const { data } = await axios.post("/categories/", category);
    return data;
  }
  async updateCategory(category) {
    const { data } = await axios.put(`/categories/${category.id}/`, category);
    return data;
  }
  async delCategory(id) {
    const { data } = await axios.delete(`/categories/${id}/`);
    return data;
  }
}
