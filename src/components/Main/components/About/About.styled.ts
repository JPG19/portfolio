import styled from "styled-components";

export default styled.div`
  width: 100%;
  min-height: 500px;
  background-color: hsl(227, 82%, 36%);
  color: hsl(0, 0%, 95%);
  text-align: center;
  display: grid;
  padding: 4rem 0;

  .name {
    font-weight: 800;
    font-size: 2rem;
    align-self: end;
    padding: 0 0 1rem 0;
  }

  .description {
    width: 50%;
    margin: auto;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: hsl(0, 0%, 10%);
  }

  .container {
    background-color: hsl(0, 0%, 95%);
    padding: 2rem 1rem;
    width: 550px;
    border-radius: 20px 0 0 20px;

    &:last-of-type {
      border-radius: 0 20px 20px 0;
      border-left: 1px solid hsl(0, 0%, 10%);
    }
  }

  @media screen and (max-width: 768px) {
    .description {
      width: 100%;
    }

    .container {
      width: 100%;
      border-radius: 0;

      &:last-of-type {
        border-radius: 0;
        border-left: none;
        border-top: 1px solid hsl(0, 0%, 10%);
      }
    }
  }
`;
