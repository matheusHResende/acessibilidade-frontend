import baseUrl from "../../lib/assets/const/baseUrl"

const ModifyOneJob  = (idVaga, body, callBackSuccess = () => {}) => {
    return fetch(`${baseUrl}/vagas/${idVaga}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
            "vagas": {
                "ativo":body.ativo,
                "titulo":body.titulo,
                "descricao":body.descricao,
            },
            "endereco":{
                "pais":body.pais,
                "estado":body.estado,
                "cidade":body.cidade,
                "bairro":body.bairro,
                "cep": body.cep,
                "logradouro":body.logradouro,
                "numero": body.numero,
                "complemento": body.complemento
            }
        },
        mode: "cors",
    })
    .then(response => {
        const result = response.json();
        return console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });
};

export default ModifyOneJob;