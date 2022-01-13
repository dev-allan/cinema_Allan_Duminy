import React, { Fragment, useState } from "react";
import DB from "./../../DB.json";

import "./MoviesForm.css";

/**
 *
 * @param {data} props
 * @returns une vue comprenant le formulaire d'ajout de films
 */
export const MoviesForm = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    actors: "",
    duration: "",
    resume: "",
  });

  const handleChangeTitle = (e) => {
    setMovie({
      ...movie,
      title: e.target.value,
    });
  };

  const handleChangeActor = (e) => {
    setMovie({
      ...movie,
      actor: e.target.value,
    });
  };

  const handleChangeDuration = (e) => {
    setMovie({
      ...movie,
      duration: e.target.value,
    });
  };

  const handleChangeResume = (e) => {
    setMovie({
      ...movie,
      resume: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.addMovie(movie);
    DB.push(movie);
  };

  return (
    <Fragment>
      <div className="bodyMoviesForm">
        <h2>Ajouter un film</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputFormMovies">
            <label>
              titre du film
              <input
                type="text"
                name="title"
                onChange={handleChangeTitle}
                placeholder="entrer le titre du film"
              />
            </label>
          </div>
          <div className="inputFormMovies">
            <label>
              acteur du film
              <input
                type="text"
                name="actor"
                onChange={handleChangeActor}
                placeholder="entrer un acteur"
              />
            </label>
          </div>
          <div className="inputFormMovies">
            <label>
              durée en minute
              <input
                type="number"
                name="duration"
                min={0}
                step={10}
                onChange={handleChangeDuration}
                placeholder="entrer une durée en min"
              />
            </label>
            </div>
            <div className="inputFormMovies">
            <label>
              resumer
              <textarea
                id="resume"
                name="resume"
                rows="5"
                cols="33"
                onChange={handleChangeResume}
              ></textarea>
            </label>
          </div>
          <button type="submit" value="submit">
            Envoyer le film
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default MoviesForm;
