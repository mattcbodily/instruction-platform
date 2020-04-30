import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>
)