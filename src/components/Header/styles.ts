import styled from "styled-components";

export const HeaderTag = styled.header`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--color-gray-4);
  border-top: 1px solid var(--color-gray-3);
  border-bottom: 1px solid var(--color-gray-3);

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

  section:nth-child(1) span {
    color: var(--color-gray-0);
    font-size: 20px;
    font-weight: 800;
  }

  section:nth-child(2) span {
    color: var(--color-gray-1);
    font-weight: 400;
    font-size: 10px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;

    section {
      width: 85%;
      display: flex;
      justify-content: left !important;
      height: 10px;
    }
  }
`;
