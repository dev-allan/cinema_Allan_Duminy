import React, { Fragment, useState, useEffect } from "react";
import MoviesForm from "./MoviesForm";
import MoviesDetail from "./MoviesDetail";
import { getFromServer } from "../../common/TestBackEnd/FetchServer";

import "./MoviesList.css";
import { isEmpty } from "../../common/helpers";

/**
 *
 * @param {data} props
 * @returns la vue d'une liste de films avec un bouton permettant de tout supprimer à l'affichage
 */
export const MoviesList = (props) => {
  const [listMovies, setListMovies] = useState(props.data);
  let [dataMoviePromise, setDataMoviePromise] = useState();
  let [dataMovie, setDataMovie] = useState();

  useEffect(() => {
    let data = getFromServer();
    setDataMoviePromise(data);
  },[listMovies]);

  const recupValuePromise = async () => {
    await dataMoviePromise.then((value) => {
      setDataMovie(value);
    });
  };

  useEffect(() => {
    recupValuePromise();
  }, [dataMoviePromise]);

  console.log(dataMovie);

  useEffect(() => {
    let data = getFromServer();
    setDataMoviePromise(data);
  }, []);

  const handleAddMovie = (movie) => {
    setListMovies([...listMovies, movie]);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setListMovies([]);
  };

  return (
    <Fragment>
      <MoviesForm addMovie={handleAddMovie} />
      <div className="bodyMoviesList">
        <h3>Les films à l'affiche</h3>
        <div className="listDetailMovie">
          {listMovies.map((movie, index) => {
            return (
              <div key={index}>
                <MoviesDetail movie={movie} />
              </div>
            );
          })}
        </div>
        <button id="btnDelete" onClick={handleDelete}>
          Effacer tous les films contenus dans le state
        </button>

        <div  className="listDetailMovie">
        {!isEmpty(dataMovie) && dataMovie.map((movie, index) => {
            return (
              <div key={index}>
                <MoviesDetail movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default MoviesList;
