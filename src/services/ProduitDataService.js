/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import Axios from 'axios'
import { Component } from 'react'
//Definition of EndPoint API CAll used to get data from backend
let url_api = 'http://localhost:3001/'
let url_api_list = url_api + 'produit'
let url_api_name = url_api + 'produit?designation=imatch.'
class ProduitDataService extends Component {
  //Definition of EndPoint API CAll used to get data from backend
  async getProduiyByDesgn(produit) {
    try {
      const response = await Axios.get(`${url_api_name}${produit}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
       
      const produits = response.data.map((produit) => {
        console.log(produit)
        return {
          idproduit: produit.idproduit,
          designation: produit.designation,
          refproduit: produit.refproduit,
        }
      })
      return produits
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
  async getAllProduits() {
    try {
      const response = await Axios.get(url_api_list, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
       
      const produits = response.data.map((produit) => {
        console.log(produit)
        return {
          idproduit: produit.idproduit,
          designation: produit.designation,
          refproduit: produit.refproduit,
        }
      })
      return produits
    
    } catch (error) {
      console.log(error)
      throw error // Re-throw the error to propagate it to the caller
    }
  }
}
export default new ProduitDataService()
