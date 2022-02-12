import React from "react";

import Styled from "./About.styled";

const About = () => {
  const languages = ["HTML, CSS, Javascript", "React", "TypeScript", "JQuery"];

  const devTools = ["GitHub", "Terminal", "Bitbucket", "NPM"];

  return (
    <Styled>
      <div className="max-width-container">
        <div className="name">Hi, i'm Juan Pablo</div>

        <div className="description">
          In 2018 i began my joruney as a software developer. Since then, i've
          worked for multiple projects and collaborated with talented people.
          I'm confident that i will keep improving my skills and get 1% better
          each day
        </div>

        <h2>What i work with</h2>

        <div className="flex-container">
          <div className="container">
            <h3>Languages and Frameworks</h3>
            {languages.map((lang) => (
              <div key={lang}>{lang}</div>
            ))}
          </div>

          <div className="container">
            <h3>Dev Tools</h3>
            {devTools.map((devT) => (
              <div key={devT}>{devT}</div>
            ))}
          </div>
        </div>
      </div>
    </Styled>
  );
};

About.displayName = "components/Main/components/About";

export default About;
