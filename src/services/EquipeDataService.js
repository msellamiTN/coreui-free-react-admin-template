import Axios from 'axios'

import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_equipe_projet = url_api + 'equipeprojet'
let url_api_name_pilotes = url_api + 'equipeprojet?nom=imatch.'
class EquipeDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async saveEquipeMembers(equipeMembers, projet) {
    try {
      // Convert array of members to JSON array
      console.log('projet' + projet.reference)
      const membersJSON = equipeMembers.map((membre) => ({
        idpilote: membre.idpilote,
        reference: projet.reference,
        categorie: membre.role,
        nom: membre.nom,
      }))
      console.log(membersJSON)
      // Send the request to save equipe members
      const response = await Axios.post(url_api_equipe_projet, membersJSON, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      // Handle the response as needed
      console.log(response.data)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
export default new EquipeDataService()
