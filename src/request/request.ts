import router from '@/router'
import axios from 'axios'
// 线上环境
// const baseURL = 'http://ip:8080'
// 本地环境
const baseURL = 'http://localhost:8080'

export const request = axios.create({
    baseURL,
    timeout: 5000
})
export default request;
