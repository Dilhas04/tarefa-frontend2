import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefa-backend2.herokuapp.com'
})
 
export default api;