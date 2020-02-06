import React from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../lib/assets/const/api.js';
import Authentication from '../../services/Authentication';

export default async function RequestCadastroPcD(cadastroFinal){
    const response = await api.post('/pcd', cadastroFinal);
    console.log(response);

    if(response.statusText === "Created"){
        localStorage.setItem('key', response.data.token);
        localStorage.setItem('dados', JSON.stringify(response.data.usuario));
        return !Authentication()? <Redirect to={{pathname: '/feedfreelancer'}} /> : <Redirect to={{pathname: '/cadastro'}} />
    }
}