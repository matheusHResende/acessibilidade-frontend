import api from '../../lib/assets/const/baseUrl';


const ListAllJobs = (idJob = '') => {
    api.get(`/vagas/${idJob}`)
    .then(response => {
        return response.json();
    })
    .then(response => {
        return response.vagas
    })
    .catch(function(err) {
        console.log('ERRO!')
    });
};

export default ListAllJobs;