import api from '../../lib/assets/const/baseUrl';



const ListAllMyJobs = async (idCompany) => {
    const res = await api.get(`/vagas/empresa/${idCompany}`);
    try {
        return res.data.vagas;
    } catch (err) {
        console.log(err);
    }
};
export default ListAllMyJobs;