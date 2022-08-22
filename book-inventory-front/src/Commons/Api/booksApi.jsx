import api from "./api";

const booksApi = {
  getAll: api.get(`/books`),
  save: (data) => api.post(`/books`, data),
};

export default booksApi;