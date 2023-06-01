/* eslint-disable prettier/prettier */
import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:8080/rest/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
