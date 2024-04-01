import router from '@/router'
import axios from 'axios'
const baseURL = 'http://localhost:8080'
export const request = axios.create({
    baseURL,
    timeout: 5000
})
export default request;
