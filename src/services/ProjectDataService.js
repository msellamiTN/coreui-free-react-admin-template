import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_projet = url_api + 'projet'
let url_api_name_pilotes = url_api + 'projet?nom=imatch.'
class ProjectDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async createProject(projectData) {
    try {
      const response = await Axios.post(url_api_projet, projectData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      console.log(projectData)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async getProjectByReference(reference) {
    try {
      const response = await Axios.get(url_api + `projet?reference=eq.${reference}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const projectData = response.data[0]

      const project = {
        reference: projectData.reference,
        zone: projectData.zone,
        observations: projectData.observations,
        codecli: projectData.codecli,
        appris: projectData.appris,
        idligne: projectData.idligne,
        idproduit: projectData.idproduit,
        prefixe: projectData.prefixe,
        titre: projectData.titre,
        datelancement: projectData.datelancement,
        heurelancement: projectData.heurelancement,
        datedebut: projectData.datedebut,
        datefin: projectData.datefin,
        valide: projectData.valide,
        nbrjourgrapheevolutionprob: projectData.nbrjourgrapheevolutionprob,
        unite: projectData.unite,
        atelier: projectData.atelier,
        categorie: projectData.categorie,
        souscategorie: projectData.souscategorie,
        fta_valide: projectData.fta_valide,
        actionsecurisationvalide: projectData.actionsecurisationvalide,
        datevalidationprojet: projectData.datevalidationprojet,
        datevalidationfta: projectData.datevalidationfta,
        datevalidationactionsecurisation: projectData.datevalidationactionsecurisation,
        idsoucategorie: projectData.idsoucategorie,
        idgraphactionsecurisaation: projectData.idgraphactionsecurisaation,
        initiateur: projectData.initiateur,
        idprojet: projectData.idprojet,
        cloture: projectData.cloture,
        scaledfrom: projectData.scaledfrom,
        scaledto: projectData.scaledto,
      }
      console.log(project)
      return project
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async updateProjectByReference(reference, projectData) {
    try {
      const response = await Axios.patch(
        url_api + `projet?reference=eq.${reference}`,
        projectData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async deleteProjectByReference(reference) {
    try {
      const response = await Axios.delete(url_api + `projet?reference=eq.${reference}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async getProjetByPilote(nom) {
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
}
export default new ProjectDataService()
