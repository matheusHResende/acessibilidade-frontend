import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PrivateRoute from '../lib/components/PrivateRoute';


import Main from '../screens/main';

import FeedPcd from '../screens/FeedPcd';
import FeedCompany from '../screens/FeedCompany';
import JobDetailPcd from '../screens/JobDetailPcd';
import JobDetailCompany from '../screens/JobDetailCompany';
import ProfilePcd from '../screens/ProfilePcd';
import ProfileCompany from '../screens/ProfileCompany';


// import FeedPcd from '../screens/FeedPcd';
// import FeedEmpresa from '../screens/FeedEmpresa';

export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/feedpcd" component={FeedPcd}/>
                <Route exact path="/feedcompany" component={FeedCompany}/>
                <Route exact path="/jobdetailpcd" component={JobDetailPcd}/>
                <Route exact path="/jobdetailcompany" component={JobDetailCompany}/>
                <Route exact path="/profilecompany" component={ProfileCompany}/>
            </Switch>
        </BrowserRouter>
    )
}