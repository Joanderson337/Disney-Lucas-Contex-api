import styled from "styled-components";

export const ContainerSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  width: 47.3rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 30rem;
  }

  > p {
    max-width: 30rem;
    color: #ffffff;
    margin-bottom: 3.6rem;
  }
`;
