import React from "react";

import { Slide, About, Works } from "./components";
import Styled from "./Main.styled";

const Main = () => {
  return (
    <Styled>
      <Slide />
      <About />
      <Works />
      <div className="footer" />
    </Styled>
  );
};

Main.displayName = "components/Main";

export default Main;
