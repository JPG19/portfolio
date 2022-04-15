import styled from "styled-components";

import StyledProps from "../../../types";

export default styled.div<StyledProps>`
  background-color: ${(props) =>
    props.theme === "light"
      ? props.lightBackgroundColor
      : props.darkBackgroundColor};
  color: ${(props) =>
    props.theme === "light" ? props.lightColor : props.darkColor};

  .motion-work {
    max-width: 1400px;
    margin: auto;
    padding: 3rem 0;
  }

  .title {
    text-align: center;
  }

  .certification {
    padding: 2rem 0;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    a {
      text-decoration: auto;
    }
  }

  @media screen and (max-width: 1420px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    .certification {
      text-align: center;
    }
  }
`;
