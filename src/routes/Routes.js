import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';

import Index from '../lib/pages/Index';
import Login from '../lib/pages/Login';
import Cadastro from '../lib/pages/Cadastro';
import Feed from '../lib/pages/Feed';
import NotFound from '../components/NotFound';

export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastrar" component={Cadastro}/>
                <PrivateRoute exact path="/feed" component={Feed}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}