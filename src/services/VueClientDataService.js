import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_vueclient = url_api + '/vueclient'
let url_api_name_vueclients = url_api + '/vueclient?nom=imatch.'
class VueClientDataService extends Component {
  async getVueClientData() {
    try {
      const response = await Axios.get(url_api_vueclient)

      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async saveVueClientData(vueClientData) {
    try {
      const response = await Axios.post(url_api_vueclient, vueClientData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
export default new VueClientDataService()
