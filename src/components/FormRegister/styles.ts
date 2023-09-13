import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 30px 0;

  @media screen and (max-width: 700px) {
    width: 280px;
  }
`;

export const BoxBack = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-primary);
  }

  a {
    padding: 8px 14px;
    background: var(--color-gray-3);
    border-radius: 5px;
    color: var(--color-gray-0);
    font-size: 12px;
    font-weight: 600;
  }
`;

export const BoxForm = styled.section`
  border-radius: 5px;
  padding: 30px 25px;
  background: var(--color-gray-3);
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: var(--color-gray-0);
    font-size: 18px;
    margin-bottom: 20px;
  }

  & > span {
    color: var(--color-gray-1);
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  label {
    color: var(--color-gray-0);
    font-size: 12px;
    font-weight: 500;
  }

  input {
    height: 45px;
    border: 2px solid transparent;
    border-radius: 5px;
    padding-left: 15px;
    background: var(--color-gray-2);
    color: var(--color-gray-0);
    outline: none;
    font-size: 14px;
    margin-bottom: 2px;

    &:-webkit-autofill {
      -webkit-text-fill-color: var(--color-gray-0);
      transition: background-color 5000s ease-in-out 0s;
    }

    &:focus {
      border: 2px solid var(--color-gray-0);
      background: var(--color-gray-2);
    }
  }

  select {
    height: 45px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: var(--color-gray-1);
    background: var(--color-gray-2);
    padding: 0 10px;

    option {
      background: var(--color-gray-2);
      color: var(--color-gray-1);
    }
  }

  button {
    height: 45px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    background: var(--color-primary-negative);
    color: var(--color-gray-0);
    font-weight: 600;
    font-size: 14px;
  }
`;

export const MessageError = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: red;
`;
