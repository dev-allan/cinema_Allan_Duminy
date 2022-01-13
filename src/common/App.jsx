import React, { Fragment } from 'react';
import Home from '../pages/Home';
import MoviesDetail from '../pages/MoviesDetail';
import MoviesForm from '../pages/MoviesForm';
import MoviesList from '../pages/MoviesList';

export const App = () => {
    return (
        <Fragment>
            <Home/>
            <MoviesDetail/>
            <MoviesForm/>
            <MoviesList/>
        </Fragment>
    );
};

export default App;