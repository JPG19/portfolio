import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { UserContext } from "../../App";
import Styled from "./Header.styled";

const Header = ({}) => {
  const location = useLocation();
  const contextValues = useContext(UserContext);

  const checked = contextValues.theme === "light" ? false : true;

  return (
    <Styled {...contextValues}>
      <div className="max-width-container">
        {location.pathname !== "/" ? (
          <Link to="/">Home</Link>
        ) : (
          <a href="#works-container">Works</a>
        )}

        {location.pathname !== "/atp" && (
          <React.Fragment>
            <a
              href="https://www.linkedin.com/in/juan-pablo-garcia-032648178/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="linkedIn" icon={faLinkedin} />
            </a>

            <a
              href="https://github.com/JPG19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="github" icon={faGithubSquare} />
            </a>
          </React.Fragment>
        )}

        {location.pathname === "/" && <Link to="/contact">Contact</Link>}

        <label htmlFor="themeToggle" className="switch">
          <input
            id="themeToggle"
            checked={checked}
            onChange={() =>
              contextValues.toggleDark(checked ? "light" : "dark")
            }
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
      </div>
    </Styled>
  );
};

Header.displayName = "components/Header";

export default Header;
