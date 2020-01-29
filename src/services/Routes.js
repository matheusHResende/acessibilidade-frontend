import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Main from '../screens/Main';

import FeedPcd from '../screens/FeedPcd';
import FeedEmpresa from '../screens/FeedEmpresa';
import FeedFreelancer from '../screens/FeedFreelancer'

export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Main}/>

                <Route exact path="/feedpcd" component={FeedPcd}/>
                <Route exact path="/feedempresa" component={FeedEmpresa}/>
                <Route exact path="/FeedFreelancer" component={FeedFreelancer}/>

            </Switch>
        </BrowserRouter>
    )
}