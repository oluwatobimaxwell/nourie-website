import axios from "axios";

const api = axios.create({
  baseURL: "https://production.eatnourie.com/api/", // replace with your actual backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;