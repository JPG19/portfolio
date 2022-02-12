import styled from "styled-components";

export default styled.div`
  max-width: 1400px;
  margin: auto;
  color: hsl(0, 0%, 10%);
  padding: 3rem 0;
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
