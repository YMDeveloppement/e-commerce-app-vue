import axios from "axios";

const instanceProducts = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default instanceProducts;
