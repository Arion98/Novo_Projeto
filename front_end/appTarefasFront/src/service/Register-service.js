// aqui será implementado todas as chamadas a API usando axios
import axios from 'axios';

// URL da api
const apiUrl = 'http://localhost:8082/usuarios';
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

class _RegisterService {
  async getRegister(page = 1, limit = 10) {
    // faz uma a GET à Api passando os parametros de página e limite
    const response = await axiosInstance.get(`?page=${page}&limit=${limit}`);
    // retorna os dados da resposta
    return response.data;
  }

  async getRegisters(id) {
    // faz uma chamada GET à Api passando o ID
    const response = await axiosInstance.get(`/${id}`);
    // retorna os dados da resposta
    return response.data.Register;
  }

  async createRegister(Register) {
    // faz uma chamada POST ao Api
    const response = await axiosInstance.post(`/`, Register);
    // retorna os dados da resposta
    return response.data;
  }

  async updateRegister(id, Registers) {
    // faz uma chamada PUT ao Api passando o ID
    const response = await axiosInstance.put(`/${id}`, Registers);
    // retorna os dados da resposta
    return response.data;
  }

  async deleteRegister(id) {
    // faz uma chamada DELETE ao Api passando o ID
    const response = await axiosInstance.delete(`/${id}`);
    // retorna os dados da resposta
    return response.data;
  }
}

const LoginService = new _RegisterService();
export default LoginService;
