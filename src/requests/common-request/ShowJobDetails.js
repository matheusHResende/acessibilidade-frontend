import api from '../../lib/assets/const/baseUrl';

const ShowJobDetails = async (idJob) => {
    const res = await api.get(`vagas/${idJob}`);
    try {
        return res.data.vagas;
    } catch (err) {
        console.log(err);
    };
};

export default ShowJobDetails;