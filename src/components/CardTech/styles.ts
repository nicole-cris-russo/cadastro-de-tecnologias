import styled from "styled-components";

export const Card = styled.section`
  width: 100%;
  height: 50px;
  background: var(--color-gray-4);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background: var(--color-gray-2);
    transition: 0.3s;
  }

  span {
    color: var(--color-gray-0);
    font-size: 14px;
    font-weight: 500;
    margin-right: 15px;
  }

  div {
    display: flex;
    align-items: center;
  }

  div svg {
    cursor: pointer;
  }

  div svg path {
    color: var(--color-gray-0);
  }
`;
