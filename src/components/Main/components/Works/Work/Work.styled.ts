import styled from "styled-components";

type Props = {
  backgroundImg: string;
};

export default styled.div<Props>`
  width: 325px;
  height: 300px;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;

  .hover {
    width: 325px;
    height: 300px;
    border-radius: 25px;
    color: hsl(0, 0%, 95%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      display: inline-block;
      border: 1px solid hsl(0, 76%, 35%);
      padding: 7px 18px;
      border-radius: 25px;
      margin: 25px 0 0 0;
      font-size: 1rem;
      font-weight: 400;
      color: hsl(0, 0%, 95%);

      &:visited {
        color: hsl(0, 0%, 95%);
      }

      &:hover {
        background-color: hsl(0, 76%, 35%);
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;
