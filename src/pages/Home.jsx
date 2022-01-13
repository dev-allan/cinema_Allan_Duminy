import React, { Fragment } from "react";
import { getRandomInt } from "../common/helpers";

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
      <h1>Bienvenue chez CineNanard !</h1>
      <div>
          <p>{data.title}</p>
          <p>{data.duration}</p>
          <p>{data.actor}</p>
          <p>{data.resume}</p>
      </div>
      <div>
      </div>
    </Fragment>
  );
};

export default Home;
