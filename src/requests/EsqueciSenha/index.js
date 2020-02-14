import api from '../../lib/assets/const/api.js';

export default async function EsqueciSenha ( usuario ){
    let response;
    await api.post('/esqueciSenha', { usuario })
    .then(res => { 
        response = { status:201 };
    })
    .catch(error => {
        response = { status:409, error: error.response.data.error };
        
    }); 
    return response
}