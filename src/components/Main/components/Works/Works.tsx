import React, { useContext } from "react";
import { motion } from "framer-motion";

import fccLogo from "../../../../assets/fccLogo.png";
import salesforceAppBuilder from "../../../../assets/appBuilder.png";
import loneball from "../../../../assets/loneball5.jpg";
import awsCertified from "../../../../assets/aws_ccp.png";

import { UserContext } from "../../../../App";
import Work from "./Work/Work";
import Styled from "./Works.styled";

const Works = () => {
  const contextValues = useContext(UserContext);
  const certifications = [
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
    {
      imageUrl: awsCertified,
      link: "https://www.credly.com/badges/129309e9-3000-44bd-825c-9cd374621fa1/public_url",
      text: "AWS Certified Cloud Practitioner",
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
          {certifications.map((certification) => (
            <Work
              key={certification.text}
              backgroundImg={certification.imageUrl}
              link={certification.link}
              text={certification.text}
            />
          ))}
        </div>
      </motion.div>
    </Styled>
  );
};

Works.displayName = "components/Works";

export default Works;
