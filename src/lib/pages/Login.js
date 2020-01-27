import React from 'react';
import {Redirect} from 'react-router-dom';

import Authentication from '../../services/Authentication';
import FormLogin from '../../components/FormLogin';
import api from '../../services/api';

const Login = ({history}) =>{    
    async function submitLogin(e){  
        const response = await api.post('/sessions', e);

        if(!response.data.error){
            localStorage.setItem('key', response.data.token);
            localStorage.setItem('dados', JSON.stringify(response.data.user))
            history.push('/feed');
            return true;
        }
    }   

    return(
        !Authentication() ? <FormLogin history={history} onSubmit={submitLogin}/> :<Redirect to={{pathname: "/feed"}}/> 
    )
}

export default Login;