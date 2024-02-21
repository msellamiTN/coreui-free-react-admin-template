/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list = url_api + 'zone'
let url_api_name = url_api + 'zone?idatelier=eq.'
class ZoneDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getZonesByAtelier(atelier) {
    try {
      const response = await Axios.get(`${url_api_name}${atelier}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const zones = response.data.map((zone) => {
        console.log(zone)
        return {
          idzone: zone.idzone,
          zone: zone.zone,
        }
      })
      return zones
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllZones() {
    try {
      const response = await Axios.get(url_api_list, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
       
      const zones = response.data.map((zone) => {
        console.log(zone)
        return {
          idzone: zone.idzone,
          zone: zone.zone,
        }
      })
      return zones
    
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new ZoneDataService()
