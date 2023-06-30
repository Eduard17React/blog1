import axios from "axios";


const customAxios = axios.create({
    baseURL: 'http://localhost:3050'
})

export default customAxios