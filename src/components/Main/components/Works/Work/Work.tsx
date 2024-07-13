import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Styled from "./Work.styled";

interface Props {
  backgroundImg: string;
  text: string;
  link: string;
}

const variants = {
  hidden: { opacity: 0 },
};

const Work = ({ backgroundImg, text, link }: Props) => {
  return (
    <Styled className="work-container" backgroundImg={backgroundImg}>
      <motion.div
        className="hover"
        initial="hidden"
        variants={variants}
        whileHover={{
          backgroundColor: "hsl(0, 0%, 10%)",
          transition: { duration: 0.5 },
          opacity: 1,
        }}
      >
        <div>{text}</div>
        {link.indexOf("/") === 0 ? (
          <Link to={link}>Check it out!</Link>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Check it out!
          </a>
        )}
      </motion.div>
    </Styled>
  );
};

Work.displayName = "Works/Work";

export default Work;
