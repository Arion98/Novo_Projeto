// aqui será implementado todas as chamadas a API usando axios
import axios from 'axios';

// URL da api
const apiUrl = 'http://localhost:8082/Ta';
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

class _CarService {
  async getCarros(page = 1, limit = 10) {
    // faz uma a GET à Api passando os parametros de página e limite
    const response = await axiosInstance.get(`?page=${page}&limit=${limit}`);
    // retorna os dados da resposta
    return response.data;
  }

  async getCarro(id) {
    // faz uma chamada GET à Api passando o ID
    const response = await axiosInstance.get(`/${id}`);
    // retorna os dados da resposta
    return response.data.Carros;
  }

  async createCarro(Carros) {
    // faz uma chamada POST ao Api
    const response = await axiosInstance.post(`/`, Carros);
    // retorna os dados da resposta
    return response.data;
  }

  async updateCarro(id, Carros) {
    // faz uma chamada PUT ao Api passando o ID
    const response = await axiosInstance.put(`/${id}`, Carros);
    // retorna os dados da resposta
    return response.data;
  }

  async deleteCarro(id) {
    // faz uma chamada DELETE ao Api passando o ID
    const response = await axiosInstance.delete(`/${id}`);
    // retorna os dados da resposta
    return response.data;
  }
}

const CarService = new _CarService();
export default CarService;
