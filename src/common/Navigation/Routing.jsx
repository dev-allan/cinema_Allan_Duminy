import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../pages/Home/Home";
import MoviesList from "../../pages/Movie/MoviesList";
import Page404 from "../../pages/Page404";
import NavBar from "./NavBar"

let pages = [
    { to: "/accueil", nom: "Accueil" },
    { to: "/movies", nom: "Les films à l'affiche" },
  ];

export const Routing = (props) => {
  return (
    <Fragment>
      <Router>
        <NavBar pages={pages} />
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path="/accueil" element={<Home data={props.data}/>} />
          <Route path="/movies" element={<MoviesList data={props.data}/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default Routing;
