import styled from "styled-components";

export const MainTag = styled.main`
  width: 100%;
  background: var(--color-gray-4);
  display: flex;
  justify-content: center;
`;

export const Infos = styled.section`
  width: 60%;
  background: var(--color-gray-4);
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  @media screen and (max-width: 700px) {
    width: 85%;
    height: 50%;
  }
`;
