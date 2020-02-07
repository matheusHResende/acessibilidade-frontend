import api from '../../lib/assets/const/api.js';

export default async function RequestLogin({usuario, senha}){
    try{
        const response = await api.post('/sessions', {usuario, senha});
        return response
    }catch(erros){
        console.log(erros.response)
    }
}