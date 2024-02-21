import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list_pilotes = url_api + 'pilote'
let url_api_name_pilotes = url_api + 'pilote?nom=imatch.'
class PiloteDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend

  async getPiloteByName(nom) {
    try {
      const response = await Axios.get(`${url_api_name_pilotes}${nom}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const pilotes = response.data.map((pilote) => {
        console.log(pilote)
        return {
          idpilote: pilote.idpilote,
          nom: pilote.nom,
          photo: pilote.photo,
          poste: pilote.poste,
          tel: pilote.tel,
          email: pilote.email,
        }
      })
      return pilotes
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async checkPilote(username, password) {
    try {
      const response = await fetch(
        `http://localhost:3001/pilote?email=eq.${encodeURIComponent(
          username,
        )}&password=eq.${encodeURIComponent(password)}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Range-Unit': 'items',
          },
        },
      )
      if (response.ok) {
        const pilotes = await response.json() // Extract JSON data from the response
        const formattedPilotes = pilotes.map((pilote) => ({
          idpilote: pilote.idpilote,
          nom: pilote.nom,
          photo: pilote.photo,
          poste: pilote.poste,
          tel: pilote.tel,
          email: pilote.email,
        }))
        return formattedPilotes[0]
      }
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllPilote() {
    try {
      const response = await Axios.get(url_api_list_pilotes, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const pilotes = response.data.map((pilote) => {
        console.log(pilote)
        return {
          idpilote: pilote.idpilote,
          nom: pilote.nom,
          photo: pilote.photo,
          poste: pilote.poste,
          tel: pilote.tel,
          email: pilote.email,
        }
      })
      //alert(pilotes)
      return pilotes
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }

  getAll() {
    return Axios.get('/pilote')
  }

  get(name) {
    return Axios.get(`/pilote/?nom=${name}`)
  }

  create(data) {
    return Axios.post('/pilote', data)
  }

  update(id, data) {
    return Axios.put(`/pilote/${id}`, data)
  }

  delete(id) {
    return Axios.delete(`/pilotes/${id}`)
  }

  deleteAll() {
    return Axios.delete(`/pilotes`)
  }

  findByTitle(title) {
    return Axios.get(`/pilotes?title=${title}`)
  }
}
export default new PiloteDataService()
