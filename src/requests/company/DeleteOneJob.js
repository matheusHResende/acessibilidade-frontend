import api from '../../lib/assets/const/baseUrl';

const DeleteOneJob  = async (idCompany) => {
    const res = await api.delete(`/vagas/${idCompany}`)
    try {
        return console.log(res);
    } catch (err) {
        console.log(err);
    };
}
export default DeleteOneJob;
