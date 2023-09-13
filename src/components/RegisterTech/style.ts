import styled from "styled-components";

interface IContainerProps {
  display: boolean;
}

export const Container = styled.section`
  display: ${({ display }: IContainerProps) => (display ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 380px;
  background: var(--color-gray-3);
  border-radius: 5px;

  @media screen and (max-width: 700px) {
    width: 80vw;
    height: 60vh;
  }
`;

export const Close = styled.section`
  color: var(--color-gray-1);
  cursor: pointer;

  &:hover {
    color: var(--color-gray-0);
  }
`;

export const BoxTop = styled.section`
  width: 100%;
  height: 15%;
  background: var(--color-gray-2);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 5px 5px 0 0;
  font-size: 16px;
  font-weight: 600;

  span {
    color: var(--color-gray-0);
  }
`;

export const BoxBottom = styled.section`
  width: 100%;
  height: 85%;
  border-radius: 0 0 5px 5px;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    label {
      color: var(--color-gray-0);
      font-weight: 400;
      font-size: 14px;
    }

    input {
      height: 50px;
      border: 1px solid var(--color-gray-0);
      background: var(--color-gray-2);
      border-radius: 5px;
      padding-left: 15px;
      font-size: 14px;
      color: var(--color-gray-0);
      outline: none;
    }

    select {
      height: 50px;
      border-radius: 5px;
      background: var(--color-gray-2);
      border: 1px solid var(--color-gray-0);
      color: var(--color-gray-0);
      padding-left: 15px;
      outline: none;
    }

    button {
      height: 50px;
      border-radius: 5px;
      border: none;
      color: var(--color-gray-0);
      font-weight: 700;
      font-size: 14px;
      background: var(--color-primary);
      margin-top: 10px;
      &:hover {
        background: var(--color-primary-focus);
      }
    }
  }
`;
