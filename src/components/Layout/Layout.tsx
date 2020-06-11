import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};
