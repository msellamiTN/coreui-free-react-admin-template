import axios from 'axios'
class ClientModel {
  getClients() {
    return axios.get('/client')
  }
  getClientById(id) {
    return axios.get(`/client/${id}`)
  }
  addClient(clientData) {
    return axios.post('/client', clientData)
  }
  updateClient(id, clientData) {
    return axios.patch(`/client/${id}`, clientData)
  }
  deleteClient(id) {
    return axios.delete(`/client/${id}`)
  }
}
const clientModelInstance = new ClientModel()
export default clientModelInstance
