import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PrivateRoute from '../lib/components/PrivateRoute';

import Index from '../screens/Index.jsx';
import Login from '../screens/Login.jsx';
import Cadastro from '../screens/Cadastro.jsx';
import NotFound from '../lib/components/NotFound.jsx';
import Feed from '../screens/Feed.jsx';
import EsqueciASenha from '../screens/EsqueciASenha.jsx';

// import FeedPcd from '../screens/FeedPcd';
// import FeedEmpresa from '../screens/FeedEmpresa';

export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastrar" component={Cadastro}/>
                <Route exact path="/recuperarsenha" component={EsqueciASenha} />
                <PrivateRoute exact path="/feedpcd" component={Feed}/>
                {/* <PrivateRoute exact path="/feedempresa" component={Feed}/>
                <PrivateRoute exact path="/feedfreelancer" component={FeedEmpresa}/> */}
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}