import axios from "axios";
export default class ColorApi {
  async fetchAllColors() {
    const { data } = await axios.get("/colors/");
    return data;
  }
  async addColor(color) {
    const { data } = await axios.post("/colors/", color);
    return data;
  }
  async updateColor(color) {
    const { data } = await axios.put(`/colors/${color.id}/`, color);
    return data;
  }
  async delColor(id) {
    const { data } = await axios.delete(`/colors/${id}/`);
    return data;
  }
}
