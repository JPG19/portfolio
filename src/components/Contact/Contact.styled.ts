import styled from "styled-components";

import StyledProps from "../types";

export default styled.div<StyledProps>`
  min-height: calc(100vh - 90px);
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isLightTheme
      ? props.lightBackgroundColor
      : props.darkBackgroundColor};
  color: ${(props) =>
    props.isLightTheme ? props.lightColor : props.darkColor};
  form {
    display: grid;
    width: 650px;
    padding: 20px;

    label {
      margin: 0 0 10px 0;
    }

    h2 {
      text-align: center;
    }

    input,
    textarea {
      background-color: ${(props) =>
        props.isLightTheme ? "hsl(0, 0%, 85%)" : "hsl(0,0%,45%)"};
      color: ${(props) =>
        props.isLightTheme ? props.lightColor : props.darkColor};
      border: none;
      margin: 0 0 20px 0;
    }

    input {
      height: 40px;
      padding: 5px;
    }

    textarea {
      padding: 5px;
    }

    input:last-of-type {
      margin: 0;
      height: 50px;
      font-weight: 800;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 750px) {
    form {
      width: 475px;
    }
  }

  @media screen and (max-width: 525px) {
    form {
      width: 350px;
    }
  }
`;
