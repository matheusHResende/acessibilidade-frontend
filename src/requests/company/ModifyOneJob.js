import api from '../../lib/assets/const/baseUrl';


const ModifyOneJob  = async (idJob, body) => {
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
    const res = await api.put(`/vagas/${idJob}`, NewJobsDetails.changes)
    try {
        return console.log(res);
    } catch (error) {
        console.log(error);
    };
};

export default ModifyOneJob;