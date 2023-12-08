// aqui será implementado todas as chamadas a API usando axios
import axios from 'axios';

// URL da api
const apiUrl = 'http://localhost:8082/Tarefas';
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

class _CarService {
  async getTarefas(page = 1, limit = 10) {
    // faz uma a GET à Api passando os parametros de página e limite
    const response = await axiosInstance.get(`?page=${page}&limit=${limit}`);
    // retorna os dados da resposta
    return response.data;
  }

  async getTarefa(id) {
    // faz uma chamada GET à Api passando o ID
    const response = await axiosInstance.get(`/${id}`);
    // retorna os dados da resposta
    return response.data.tarefas;
  }

  async createTarefas(tarefas) {
    // faz uma chamada POST ao Api
    const response = await axiosInstance.post(`/`, tarefas);
    // retorna os dados da resposta
    return response.data;
  }

  async updateTarefas(id, tarefas) {
    // faz uma chamada PUT ao Api passando o ID
    const response = await axiosInstance.put(`/${id}`, tarefas);
    // retorna os dados da resposta
    return response.data;
  }

  async deleteTarefas(id) {
    // faz uma chamada DELETE ao Api passando o ID
    const response = await axiosInstance.delete(`/${id}`);
    // retorna os dados da resposta
    return response.data;
  }
}

const CarService = new _CarService();
export default CarService;
