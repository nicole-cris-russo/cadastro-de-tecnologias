import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--color-gray-4);

  section {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: var(--color-gray-0);
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
