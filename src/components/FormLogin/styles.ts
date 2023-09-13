import styled from "styled-components";

export const Container = styled.section`
  width: 330px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h1 {
    font-size: 26px;
    font-weight: 600;
    color: var(--color-primary);
  }

  @media screen and (max-width: 700px) {
    width: 280px;
  }
`;

export const BoxForm = styled.section`
  width: 100%;
  height: 85%;
  background: var(--color-gray-3);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 5px;
  padding: 30px 20px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-gray-0);
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 12px;
    color: var(--color-gray-0);
  }

  input {
    height: 45px;
    border: 2px solid transparent;
    border-radius: 5px;
    background: var(--color-gray-2);
    outline: none;
    padding-left: 15px;
    font-size: 14px;
    color: var(--color-gray-0);

    &:focus {
      border: 2px solid var(--color-gray-0);
      background: var(--color-gray-2);
    }

    // para autocomplete
    &:-webkit-autofill {
      -webkit-text-fill-color: var(--color-gray-0);
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  button {
    margin-top: 10px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background: var(--color-primary);
    transition: 0.2s;
    color: var(--color-gray-0);
    font-weight: 600;

    &:hover {
      background: var(--color-primary-focus);
      transition: 0.2s;
    }
  }
`;

export const BoxRegister = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 12px;
    color: var(--color-gray-1);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: var(--color-gray-0);
    border-radius: 5px;
    width: 100%;
    height: 45px;
    background: var(--color-gray-1);
    transition: 0.2s;

    &:hover {
      background: var(--color-gray-2);
      transition: 0.2s;
    }
  }
`;
