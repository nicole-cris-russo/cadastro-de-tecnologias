import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--color-gray-4);
  display: flex;
  justify-content: space-between;

  h3 {
    color: var(--color-gray-0);
  }

  button {
    background: var(--color-gray-3);
    border: none;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-gray-0);
    font-weight: 600;
    font-size: 20px;

    &:hover {
      background: var(--color-gray-2);
    }
  }
`;
