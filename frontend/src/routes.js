import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

const Routes = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/" component={Logon} />  
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

