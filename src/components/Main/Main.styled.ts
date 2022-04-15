import styled from "styled-components";

interface Props {
  isLightTheme: boolean;
}

export default styled.div<Props>`
  .footer {
    height: 30px;
    background-color: ${(props) =>
      props.isLightTheme ? "hsl(227, 82%, 36%)" : "hsl(268, 100%, 10%)"};
  }
`;
