import React, { Fragment } from "react";

import "./MoviesDetail.css";

/**
 *
 * @param {data} props
 * @returns une vue des détails d'un film
 */
export const MoviesDetail = (props) => {
  return (
    <Fragment>
      <div className="moviesDetailBody">
        <ul>
          <li>titre : {props.movie.title}</li>
          <li>acteur principal : {props.movie.actor}</li>
          <li>durée : {props.movie.duration} min</li>
          <li>résumé : {props.movie.resume}</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MoviesDetail;
