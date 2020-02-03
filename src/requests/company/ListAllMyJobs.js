import api from '../../lib/assets/const/baseUrl';



const ListAllMyJobs = async (idCompany) => {
    await api.get(`/vagas/empresa/${idCompany}`)
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
export default ListAllMyJobs;