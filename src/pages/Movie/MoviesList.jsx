import React, { Fragment, useState } from "react";
import MoviesForm from "./MoviesForm";
import MoviesDetail from "./MoviesDetail";

/**
 * 
 * @param {data} props 
 * @returns la vue d'une liste de films avec un bouton permettant de tout supprimer à l'affichage
 */
export const MoviesList = (props) => {
  const [listMovies, setListMovies] = useState(props.data);

  const handleAddMovie = (movie) => {
    setListMovies([...listMovies, movie]);
  };

  const handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setListMovies([]);
  };

  return (
    <Fragment>
      <h2>Liste des films à l'affiche</h2>
      <MoviesForm addMovie={handleAddMovie}/>
      <h3>Les films à l'affiche</h3>
      <div>
      {listMovies.map((movie, index) => {
          return(
              <div key={index}>
                <MoviesDetail movie={movie}/>
              </div>
          )
      })}
      </div>
      <button onClick={handleDelete}>Effacer tous les films</button>
    </Fragment>
  );
};

export default MoviesList;
