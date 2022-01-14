import React, { useState, useEffect } from "react";
import { getRandomInt } from "../../common/helpers";
import { getFromServer } from "../../common/TestBackEnd/FetchServer";
import { isEmpty } from "../../common/helpers";

/**
 *
 * @returns une vue affichant un film aléatoire contenu dans data.json avec json server
 */
const HomeWithJsonServer = () => {
  let [dataMoviePromise, setDataMoviePromise] = useState();
  let [dataMovie, setDataMovie] = useState();

  useEffect(() => {
    let data = getFromServer();
    setDataMoviePromise(data);
  }, []);

  const recupValuePromise = async () => {
    await dataMoviePromise.then((value) => {
      let randomMovie = getRandomInt(value.length);
      setDataMovie(value[randomMovie]);
    });
  };

  useEffect(() => {
    recupValuePromise();
  }, [dataMoviePromise]);
  return (
    <div>
      {/* Film random en utilisant jsonwebserver */}
      <h2>Films random en utilisant JSON WEB SERVER</h2>
      {!isEmpty(dataMovie) && (
        <div>
          <p>titre : {dataMovie.title}</p>
          <p>acteur : {dataMovie.actors}</p>
          <p>résumé : {dataMovie.resume}</p>
          <p>durée : {dataMovie.duration} min</p>
        </div>
      )}
    </div>
  );
};

export default HomeWithJsonServer;
