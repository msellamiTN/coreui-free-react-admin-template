import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list = url_api + 'client'
let url_api_name = url_api + 'client?nom=imatch.'
class ClientDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getClient(client) {
    try {
      const response = await Axios.get(`${url_api_name}${client}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      const clients = response.data.map((client) => {
        console.log(client)
        return {
          codecli: client.codecli,
          nom: client.nom,
          adresse: client.adresse,
          tel: client.tel,
          email: client.email,
          activite: client.activite,
          province: client.province,
          codepostal: client.codepostal,
          pays: client.pays,
        }
      })
      return clients
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllClients() {
    try {
      const response = await Axios.get(url_api_list, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const clients = response.data.map((client) => {
        console.log(client)
        return {
          codecli: client.codecli,
          nom: client.nom,
          adresse: client.adresse,
          tel: client.tel,
          email: client.email,
          activite: client.activite,
          province: client.province,
          codepostal: client.codepostal,
          pays: client.pays,
        }
      })
      return clients
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new ClientDataService()
