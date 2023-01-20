import styled from "styled-components";
import background from "../../assets/img/sss.png";

export const CardContainer = styled.a`
  width: 26.5rem;
  height: 14.9rem;
  background: url("${background}") no-repeat center center;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
