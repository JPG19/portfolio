import styled from "styled-components";

export default styled.header`
  height: 50px;
  padding: 20px;
  .max-width-container {
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: auto;

    a {
      color: hsl(0, 0%, 10%);
    }

    a:first-of-type {
      margin: 0 auto 0 0;
    }

    a:visited {
      color: hsl(0, 0%, 10%);
    }

    svg {
      width: 42px;
      height: 42px;
    }

    .linkedIn:hover path {
      fill: hsl(210, 90%, 40%);
    }

    .github:hover path {
      fill: hsl(0, 2%, 40%);
    }
  }
`;
