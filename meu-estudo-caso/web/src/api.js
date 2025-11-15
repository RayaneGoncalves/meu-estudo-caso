import axios from 'axios'
const API = axios.create({
  baseURL: 'https://proweb.leoproti.com.br/api'
})
export default API
