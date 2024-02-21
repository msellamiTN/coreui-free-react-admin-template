import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list_unite = url_api + 'unite'
let url_api_name_unite = url_api + 'unite?unite=imatch.'
class UniteDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getUnite(unite) {
    try {
      const response = await Axios.get(`${url_api_name_unite}${unite}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const unites = response.data.map((unite) => {
        console.log(unite)
        return {
          id: unite.idunite,
          unite: unite.unite,
        }
      })
      return unites
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllUnites() {
    try {
      const response = await Axios.get(url_api_list_unite, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const unites = response.data.map((unite) => {
        console.log(unite)
        return {
          id: unite.idunite,
          unite: unite.unite,
        }
      })
      //alert(unites)
      return unites
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new UniteDataService()
