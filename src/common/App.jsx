import React, { Fragment, useState } from 'react';
import Routing from './Navigation/Routing';
import DB from "../DB.json"

import "./App.css"

export const App = () => {
    return (
        <Fragment>
            <Routing data={DB}/>
        </Fragment>
    );
};

export default App;