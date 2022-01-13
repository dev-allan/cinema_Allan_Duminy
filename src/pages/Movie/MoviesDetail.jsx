import React, { Fragment } from 'react';

export const MoviesDetail = (props) => {
    return (
        <Fragment>
            <ul>
                <li>titre : {props.movie.title}</li>
                <li>acteur principal : {props.movie.actor}</li>
                <li>durée : {props.movie.duration} min</li>
                <li>résumé : {props.movie.resume}</li>
            </ul>         
        </Fragment>
    );
};

export default MoviesDetail;