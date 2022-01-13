import React, { Fragment } from "react";
import { getRandomInt } from "../../common/helpers";
import "./Home.css";

/**
 *
 * @param {Data afin d'afficher une film random en page d'accueil} props
 * @returns une vue affichant un film random
 */
export const Home = (props) => {
  let intRandom = getRandomInt(props.data.length);
  let data = props.data[intRandom];
  return (
    <Fragment>
      <div className="bodyHome">
        <h1>Bienvenue chez CineNanard !</h1>
        <div>
          <h2>Exemple de films</h2>
          <div>
            <p>Titre : {data.title}</p>
            <p>Durée : {data.duration}</p>
            <p>Acteurs : {data.actors}</p>
            <p>Resumé : {data.resume}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
