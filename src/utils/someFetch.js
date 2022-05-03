import axios from "axios";

axios.defaults.baseURL = "https://something";

export async function fetchTria(value) {
  const { data } = await axios.post("/count/tria", value);
  return data;
}

export async function fetchCircle(value) {
  const { data } = await axios.post("/count/circle", value);
  return data;
}
