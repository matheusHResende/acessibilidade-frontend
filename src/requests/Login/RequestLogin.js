import api from '../../lib/assets/const/api.js';

export default async function RequestLogin({usuario, senha}){
    let result
    await api.post('/sessions', {usuario, senha})
        .then(res => { 
            result = res
        })
        .catch(error => {
            result = error.response.data.error
        })
    return result    
}