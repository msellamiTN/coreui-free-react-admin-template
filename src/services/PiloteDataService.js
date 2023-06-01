import Axios from 'axios'
import { Component } from 'react'
import http from '../http-common'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:8000/api/'
let url_api_list_pilotes = url_api + 'pilotes/'
class PiloteDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  pilotes = [{ Id: '4' }]
  constructor() {
    super()
    this.pilotes = [{ Id: '4' }]
  }

  getPiloteByName(name) {
    //alert(name)
    Axios.get(
      url_api_list_pilotes,
      {
        params: {
          name,
        },
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
      .then(function (response) {
        this.pilotes = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
export default new PiloteDataService()
