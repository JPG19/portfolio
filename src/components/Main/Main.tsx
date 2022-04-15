import React, { useContext } from "react";

import { UserContext } from "../../App";
import { Slide, About, Works } from "./components";
import Styled from "./Main.styled";

const Main = () => {
  const contextValues = useContext(UserContext);

  return (
    <Styled isLightTheme={contextValues.isLightTheme}>
      <Slide />
      <About />
      <Works />
      <div className="footer" />
    </Styled>
  );
};

Main.displayName = "components/Main";

export default Main;
