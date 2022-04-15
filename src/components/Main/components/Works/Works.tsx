import React, { useContext } from "react";
import { motion } from "framer-motion";

import fccLogo from "../../../../assets/fccLogo.png";
import salesforceAppBuilder from "../../../../assets/appBuilder.png";
import loneball from "../../../../assets/loneball5.jpg";

import { UserContext } from "../../../../App";
import Work from "./Work/Work";
import Styled from "./Works.styled";

const Works = () => {
  const contextValues = useContext(UserContext);
  const responsiveDesigns = [
    {
      imageUrl: fccLogo,
      link: "https://www.freecodecamp.org/certification/fcc5eb78346-2dcc-4c52-894b-415cda26dea0/responsive-web-design",
      text: "Responsive Web Design",
    },
    {
      imageUrl: fccLogo,
      link: "https://www.freecodecamp.org/certification/fcc5eb78346-2dcc-4c52-894b-415cda26dea0/front-end-development-libraries",
      text: "Front End Development Libraries",
    },
    {
      imageUrl: salesforceAppBuilder,
      link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=6Vi5EHu5cXVKa6JdhIddLXwHwl/A1QwdVrBo7titffNqxgvMlJncKcV+RXCR7VOf",
      text: "Salesforce Certified Platform App Builder",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Styled id="works-container" {...contextValues}>
      <motion.div
        className="motion-work"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          duration: 1,
        }}
      >
        <h2 className="title">My Recent Work and Certifications</h2>

        <h3 className="certification">Personal Projects</h3>

        <Work backgroundImg={loneball} link="/atp" text="ATP Top 10" />

        <h3 className="certification">Certifications</h3>

        <div className="projects">
          {responsiveDesigns.map((work) => (
            <Work
              key={work.text}
              backgroundImg={work.imageUrl}
              link={work.link}
              text={work.text}
            />
          ))}
        </div>
      </motion.div>
    </Styled>
  );
};

Works.displayName = "components/Works";

export default Works;
