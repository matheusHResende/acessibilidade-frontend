import baseUrl from "../../lib/assets/const/baseUrl"

const DeleteOneJob  = (idVaga = '', callBackSuccess = () => {}) => {
    return fetch(`${baseUrl}/vagas/${idVaga}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: "cors",
    })
    .then(response => {
        const result = response.json();
        return console.log(result.message);
    })
    .catch(function(err){
        console.log(err);
    });
};

export default DeleteOneJob;