import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Main from '../screens/main';

import FeedPcd from '../screens/FeedPcd';
import FeedEmpresa from '../screens/FeedEmpresa';


export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/feedpcd" component={FeedPcd}/>
                <Route exact path="/feedempresa" component={FeedEmpresa}/>


            </Switch>
        </BrowserRouter>
    )
}