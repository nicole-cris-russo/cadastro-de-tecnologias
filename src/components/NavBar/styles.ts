import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--color-gray-4);

  section {
    width: 20%;
    height: 100%;
  }

  section:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  section:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: right;
  }

  section h1 {
    font-size: 20px;
    font-weight: 800;
    color: var(--color-primary);
  }

  section a {
    padding: 8px 15px;
    background: var(--color-gray-3);
    color: var(--color-gray-0);
    border: none;
    border-radius: 5px;

    font-weight: 600;
    font-size: 12px;
    transition: 0.2s;

    &:hover {
      background: var(--color-gray-2);
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 700px) {
    section {
      width: 38%;
    }
  }
`;
