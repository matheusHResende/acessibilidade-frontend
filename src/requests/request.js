module.exports = {
    getVagas: function(endpoint) {
        fetch(`https://api-acessibilidade.herokuapp.com/${endpoint}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            mode: "cors",
        }).then(response => {
            return response.json();
        }).catch(function(err) {
            console.log('ERRO!')
        });
    }
};