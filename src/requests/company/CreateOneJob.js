import api from '../../lib/assets/const/baseUrl';


const CreateOneJob  = (idCompany, body) => {
    const JobDetails = {
        job: {
            "vagas": {
                "titulo":body.titulo,
                "descricao":body.descricao,
                "quantidade_vagas": body.quantidade_vagas,
                "id_usuario_empresa":idCompany
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
    api.post(`/vagas`, JobDetails.job)
    .then(response => {
        const result = response.json();
        return console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });
};

export default CreateOneJob;