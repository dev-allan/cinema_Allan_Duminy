import React, { Fragment } from "react";

export const Home = (props) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let intRandom = getRandomInt(props.data.length);
  let data = props.data[intRandom];
  console.log(data)
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
