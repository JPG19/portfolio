import React, { useContext } from "react";
import { motion } from "framer-motion";

import { UserContext } from "../../../../App";
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
        <img className="jp-picture" src="https://portfolio-images12.s3.amazonaws.com/jpDev.webp" alt="JP's pic" />
      </motion.div>
    </Styled>
  );
};

Slide.displayName = "components/Slide";

export default Slide;
