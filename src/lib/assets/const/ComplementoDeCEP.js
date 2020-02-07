import axios from 'axios';

const cepBase = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});

export default cepBase;