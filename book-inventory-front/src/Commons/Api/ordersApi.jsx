import api from "./api";

const ordersApi = {
  getById: (id) => api.get(`/orders/${id}`),
  save: (data) => api.post(`/orders`, data),
};

export default ordersApi;