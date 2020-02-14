import api from '../../lib/assets/const/api.js';

export default async function EsqueciSenha ( { token, senha } ){
    let response;
    await api.patch(`/resetarSenha/${token}`, { senha })
    .then(res => { 
        response = res
    })
    .catch(error => {
        response = error.response 
    });

    const { status, statusText } = response;

    if( status === 201 && statusText === "Created" ){
        localStorage.setItem('key', response.data.token);
        localStorage.setItem('dados', JSON.stringify(response.data.usuario));
        window.location.href = "/login";
    }else{
        return response  
    }
}