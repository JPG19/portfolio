import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";
import { Slide, About, Works } from "./components";
import Styled from "./Main.styled";

const Main = () => {
  const contextValues = useContext(UserContext);

  return (
    <Styled theme={contextValues.theme}>
      <Slide />
      <About />
      <Works />
      <div className="footer">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms Of Service</Link>
      </div>
    </Styled>
  );
};

Main.displayName = "components/Main";

export default Main;
