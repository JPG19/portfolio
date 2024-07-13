import { url } from "inspector";
import styled from "styled-components";

interface Props {
  className: string;
}

export default styled.div<Props>`
  min-height: 100vh;
  color: hsl(0, 0%, 100%);
  overflow: auto;

  header a {
    color: hsl(0, 0%, 100%) !important;
  }

  .title {
    text-align: center;
  }

  .mainTable {
    margin: auto;
    width: 100%;

    thead tr th {
      font-size: 1.5rem;
      text-align: left;
      padding: 10px;
    }

    tbody tr td {
      font-size: 1.5rem;
      padding: 10px;
    }
  }

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
