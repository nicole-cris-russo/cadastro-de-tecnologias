import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 30px;
  background: var(--color-gray-3);
  border-radius: 5px;
  margin-top: 20px;

  ul li + li {
    margin-top: 15px;
  }

  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;

export const MessageEmpty = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray-0);
`;
