import api from "./api";

const purchasesApi = {
  getById: (id) => api.get(`/purchases/${id}`,),
  save: (data) => api.post(`/purchases`, data),
};

export default purchasesApi;