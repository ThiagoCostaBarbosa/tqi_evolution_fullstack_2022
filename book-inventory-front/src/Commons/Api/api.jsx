import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:8080",
});

const api = {
  get: (path) => async () => (await url.get(path))["data"],
  post: async (path, data) => await url.post(path, data),
  patch: async (path, data) => await url.patch(path, data),
  delete: async (path, data) => await url.delete(path, data),
};

export default api;
