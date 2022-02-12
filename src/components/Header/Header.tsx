import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import Styled from "./Header.styled";

const Header: React.FC = ({}) => {
  const location = useLocation();

  return (
    <Styled>
      <div className="max-width-container">
        {location.pathname !== '/' ? (
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
      </div>
    </Styled>
  );
};

Header.displayName = "components/Header";

export default Header;
