import axios from 'axios'
const token = localStorage.getItem('Access-token')

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://192.168.0.39:3333',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default api
