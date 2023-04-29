import React from "react";
import { Link } from "react-router-dom";
import Watched from "./Watched";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}>İzlenecekler </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to={Watched}>İzlenenler</Link>
            </li>
          <li>
            <i className="fas fa-plus"></i>
          </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;
