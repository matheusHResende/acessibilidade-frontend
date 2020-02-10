import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Main from '../screens/main';

import FeedPcd from '../screens/FeedPcd';
import FeedCompany from '../screens/FeedCompany';
import JobDetailPcd from '../screens/JobDetailPcd';
import JobDetailCompany from '../screens/JobDetailCompany';

export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/feedpcd" component={FeedPcd}/>
                <Route exact path="/feedempresa" component={FeedCompany}/>
                <Route exact path="/jobdetailpcd" component={JobDetailPcd}/>
                <Route exact path="/jobdetailcompany" component={JobDetailCompany}/>

            </Switch>
        </BrowserRouter>
    )
}