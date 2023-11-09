import axios from 'axios'

export const axiosConfig = axios.create ({
  baseURL : 'https://flask-production-f744.up.railway.app/articles'
})