/* eslint-disable prettier/prettier */
import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
