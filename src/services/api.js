import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-acessibilidade.herokuapp.com'
});

export default api;
