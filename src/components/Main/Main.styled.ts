import styled from "styled-components";

interface Props {
  theme: string;
}

export default styled.div<Props>`
  .footer {
    background-color: ${(props) =>
      props.theme === "light" ? "hsl(227, 82%, 36%)" : "hsl(268, 100%, 10%)"};
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

    a {
      color: #fff;
    }
  }
`;
