import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

const Routes = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/incidents/new" component={NewIncident} />
                <Route path="/profile" component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/" component={Logon} />  
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

