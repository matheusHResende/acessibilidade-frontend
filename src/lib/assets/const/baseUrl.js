import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api-acessibilidade.herokuapp.com'
});

export default Api;