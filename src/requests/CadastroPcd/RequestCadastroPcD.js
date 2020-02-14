import api from '../../lib/assets/const/api.js';

export default async function RequestCadastroPcD(cadastroFinal, { history }) {
    let result;
    
    await api.post('/pcd', cadastroFinal)
        .then(res => {
            result = res
        })
        .catch(error => {
            result = error.response
            if(error.response.status === 423){
            }
        })
    
    const { status, statusText } = result;

    if( status === 201 && statusText === "Created" ){
        localStorage.setItem('key', result.data.token);
        localStorage.setItem('dados', JSON.stringify(result.data.usuario));
        window.location.href = "/login"
    }else{
        return result  
    }
}