import React  from 'react';
import {Redirect} from 'react-router-dom';

import Authentication from '../../services/Authentication';
import FormLogin from '../../components/FormLogin.jsx';
const Login = ({ history }) =>{    
    return(
        !Authentication() ? <FormLogin history={history} /> :<Redirect to={{pathname: "/feed"}}/> 
    )
}

export default Login;