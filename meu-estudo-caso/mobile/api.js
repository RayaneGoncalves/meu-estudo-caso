import axios from 'axios'
import { Platform } from 'react-native'
const API = axios.create({
  baseURL: 'https://proweb.leoproti.com.br/api'
})
export default API
