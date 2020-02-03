import api from '../../lib/assets/const/baseUrl';


const ModifyOneJob  = (idJob, body) => {
    const NewJobsDetails = {
        changes: {
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
        }
    };
    api.put(`/vagas/${idJob}`, NewJobsDetails.changes)
    .then(response => {
        const result = response.json();
        return console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });
};

export default ModifyOneJob;