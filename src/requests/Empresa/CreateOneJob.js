import baseUrl from "../../lib/assets/const/baseUrl"

const CreateOneJob  = (idEmpresa, body, callBackSuccess = () => {}) => {
    return fetch(`${baseUrl}/vagas/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
            "vagas": {
                "titulo":body.titulo,
                "descricao":body.descricao,
                "quantidade_vagas": body.quantidade_vagas,
                "id_usuario_empresa":idEmpresa
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

export default CreateOneJob;