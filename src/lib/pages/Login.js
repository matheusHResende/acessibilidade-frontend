import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';

import Authentication from '../../services/Authentication';
import FormLogin from '../../components/FormLogin';
import api from '../../services/api';

const Login = ({history}) =>{
    const [dados, setDados] = useState([])
    
    async function submitLogin(e){
        const response = await api.post('/sessions', e);

        if(!response.data.error){
            localStorage.setItem('key', response.data.token);
            setDados([...dados,response.data]);
            history.push('/feed');
        }else{}
    }   

    return(
        !Authentication() ? <FormLogin history={history} onSubmit={submitLogin}/> :<Redirect to={{pathname: "/feed"}}/> 
    )
}

export default Login;