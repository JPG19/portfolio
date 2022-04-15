import styled from "styled-components";

import StyledProps from "../types";

export default styled.header<StyledProps>`
  height: 50px;
  padding: 20px;
  background-color: ${(props) =>
    props.isLightTheme
      ? props.lightBackgroundColor
      : props.darkBackgroundColor};
  .max-width-container {
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: auto;

    a {
      color: ${(props) =>
        props.isLightTheme ? props.lightColor : props.darkColor};
    }

    a:first-of-type {
      margin: 0 auto 0 0;
    }

    a:visited {
      color: ${(props) =>
        props.isLightTheme ? props.lightColor : props.darkColor};
    }

    svg {
      width: 42px;
      height: 42px;
    }

    .linkedIn:hover path {
      fill: ${(props) =>
        props.isLightTheme ? "hsl(210, 90%, 40%)" : "hsl(154, 45%, 63%)"};
    }

    .github:hover path {
      fill: ${(props) =>
        props.isLightTheme ? "hsl(0, 2%, 40%)" : "hsl(0, 0%, 100%)"};
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: crimson;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px crimson;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
