/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list = url_api + 'atelier'
let url_api_name = url_api + 'atelier?idunite=eq.'
class AtelierDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getAteliersByUnite(unite) {
    try {
      const response = await Axios.get(`${url_api_name}${unite}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const ateliers = response.data.map((atelier) => {
        console.log(atelier)
        return {
          idatelier: atelier.idatelier,
          atelier: atelier.atelier,
        }
      })
      return ateliers
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllAteliers() {
    try {
      const response = await Axios.get(url_api_list, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
       
      const ateliers = response.data.map((atelier) => {
        console.log(atelier)
        return {
          idatelier: atelier.idatelier,
          atelier: atelier.atelier,
        }
      })
      return ateliers
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new AtelierDataService()
