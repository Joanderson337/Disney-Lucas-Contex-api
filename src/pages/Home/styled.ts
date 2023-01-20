import styled from "styled-components";
import background from "../../assets/img/backgroud.png";

export const HomeContaier = styled.div`
  height: 100vh;
  background: url("${background}") no-repeat center center;
`;

export const HomeContext = styled.div`
  > aside {
    display: flex;
    justify-content: space-between;
    margin: 2rem 3rem 0 2rem;
  }

  @media (max-width: 768px) {
    aside {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
