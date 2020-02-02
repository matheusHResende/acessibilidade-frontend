import baseUrl from "../lib/assets/const/baseUrl"

export const getVagas = (idVaga = '', callBackSuccess = () => {}) => {
    return fetch(`${baseUrl}/vagas/${idVaga}`, {
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

export const getVagasEmpresa = (idEmpresa = '', callBackSuccess = () => {}) => {
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