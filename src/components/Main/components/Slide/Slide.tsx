import React, { useContext } from "react";
import { motion } from "framer-motion";

import { UserContext } from "../../../../App";
import jpDev from "../../../../assets/jpDev.png";
import Styled from "./Slide.styled";

const Slide = () => {
  const contextValues = useContext(UserContext);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Styled {...contextValues}>
      <motion.div
        className="max-width-container"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: 1,
        }}
      >
        <h1>Front-end Developer working with React</h1>
        <img className="jp-picture" src={jpDev} alt="JP's picture" />
      </motion.div>
    </Styled>
  );
};

Slide.displayName = "components/Slide";

export default Slide;
