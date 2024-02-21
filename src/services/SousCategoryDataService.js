/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list_categorie = url_api + 'soucategorie'
let url_api_name_categorie = url_api + 'soucategorie?idcatégorie=eq.'
class SousCategoryDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getSousCategorie(categorie) {
    try {
      const response = await Axios.get(`${url_api_name_categorie}${categorie}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const categories = response.data.map((categorie) => {
        console.log(categorie)
        return {
          id: categorie.idsoucategorie,
          souscategorie: categorie.souscategorie,
          idcatégorie: categorie.idcatégorie,
        }
      })
      return categories
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllCategories() {
    try {
      const response = await Axios.get(url_api_list_categorie, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
       
      const categories = response.data.map((categorie) => {
        console.log(categorie)
        return {
          id: categorie.idsoucategorie,
          souscategorie: categorie.souscategorie,
          idcatégorie: categorie.idcatégorie,
        }
      })
     //alert(categories)
      return categories
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new SousCategoryDataService()
