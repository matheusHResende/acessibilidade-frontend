import React  from 'react';
import { Redirect } from 'react-router-dom';

import Authentication from '../services/Authentication';
import FormLogin from '../lib/components/FormLogin.jsx';

const Login = ({ history }) =>{
    let auth = Authentication() ;

    function redirect(){
        switch(auth){
            case 1:
                return {pathname: '/feedpcd'}
            case 2:
                return {pathname: '/feedempresa'}
            case 3:
                return {pathname: '/feedfreelancer'}
            default:
        }
    }

    return auth === 1 || auth === 2 || auth === 3 ? <Redirect to={redirect()} history={history} /> : <FormLogin history={history} />
}


export default Login;