import api from '../../lib/assets/const/baseUrl';

const DeleteOneJob  = async (idJob) => {
    const res = await api.delete(`/vagas/${idJob}`)
    try {
        return console.log(res);
    } catch (err) {
        console.log(err);
    };
}
export default DeleteOneJob;
