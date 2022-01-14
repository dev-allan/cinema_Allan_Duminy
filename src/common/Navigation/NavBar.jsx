import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <Fragment>
      <nav className="mainNav">
        {props.pages &&
          props.pages.map((page, index) => {
            return (
              <Link key={index} to={page.to} className="linkNav">
                {page.nom}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default NavBar;
