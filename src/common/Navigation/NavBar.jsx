import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <Fragment>
      <nav>
        {props.pages &&
          props.pages.map((page, index) => {
            return (
              <Link key={index} to={page.to}>
                {page.nom}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default NavBar;
