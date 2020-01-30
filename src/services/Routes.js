import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Main from '../screens/Main';

import FeedPcd from '../screens/FeedPcd';


export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/feedpcd" component={FeedPcd}/>

            </Switch>
        </BrowserRouter>
    )
}