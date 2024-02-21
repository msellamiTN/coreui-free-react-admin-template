/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list = url_api + 'ligne'
let url_api_name = url_api + 'ligne?idzone=eq.'
class LigneDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getLignesByZone(zone) {
    try {
      const response = await Axios.get(`${url_api_name}${zone}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const lignes = response.data.map((ligne) => {
        console.log(ligne)
        return {
          idligne: ligne.idligne,
          ligne: ligne.ligne,
        }
      })
      return lignes
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllLignes() {
    try {
      const response = await Axios.get(url_api_list, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
       
      const lignes = response.data.map((ligne) => {
        console.log(ligne)
        return {
          idligne: ligne.idligne,
          ligne: ligne.ligne,
        }
      })
     alert(lignes)
      return lignes
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new LigneDataService()
