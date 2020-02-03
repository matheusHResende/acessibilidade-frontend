import api from '../../lib/assets/const/baseUrl';

const DeleteOneJob  = (idCompany) => {
    api.delete(`/vagas/${idCompany}`)
    .then(response => {
        const result = response.json();
        return console.log(result.message);
    })
    .catch(function(err){
        console.log(err);
    });
}
export default DeleteOneJob;
