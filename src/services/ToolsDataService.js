import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api_rpc = 'http://localhost:3001/rpc/'
let url_api = 'http://localhost:3001/'
class ToolsDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getLastIDProject() {
    try {
      const response = await Axios.get(`${url_api_rpc}getlastprojectid`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      const lastIdProjet = parseInt(response.data.lastidprojet)
      console.log(lastIdProjet) // Output: 72 (as an integer)
      return lastIdProjet
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }

  async getRoles() {
    try {
      const response = await Axios.get(`${url_api}role`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      const roles = response.data.map((role) => {
        console.log(role)
        return {
          idrole: role.idrole,
          role: role.role,
        }
      })
      return roles
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new ToolsDataService()
