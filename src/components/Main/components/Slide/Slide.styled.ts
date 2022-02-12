import styled from "styled-components";

export default styled.div`
  padding: 4rem 0;
  .max-width-container {
    display: grid;
    gap: 25px;
    h1 {
      max-width: 90%;
      margin: auto;
    }

    .jp-picture {
      display: block;
      margin: auto;
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (max-width: 1450px) {
    .max-width-container {
      h1 {
        padding: 0 0 0 20px;
      }
    }
  }

  @media screen and (max-width: 1021px) {
    padding: 2rem 0;
    .max-width-container {
      h1 {
        max-width: none;
        width: 90%;
        margin: auto;
        text-align: center;
      }
    }
  }
`;
