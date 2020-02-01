import baseUrl from "../../lib/assets/const/baseUrl"

const ListAllMyJobs = (idEmpresa = '', callBackSuccess = () => {}) => {
    return fetch(`${baseUrl}/vagas/empresa/${idEmpresa}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        mode: "cors",
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        callBackSuccess(response.vagas)
    })
    .catch(function(err) {
        console.log('ERRO!')
    });
};

export default ListAllMyJobs;