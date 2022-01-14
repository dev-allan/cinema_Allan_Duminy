import React, { Fragment } from 'react';
import Routing from './Navigation/Routing';
import DB from "../DB.json";
import data from "../data.json";

import "./App.css"

export const App = () => {
    return (
        <Fragment>
            <Routing data={DB}/>
        </Fragment>
    );
};

export default App;