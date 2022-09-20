import styled from "styled-components";

export const CategoryItemContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // column-gap: 10px;
  // row-gap: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
`;

export const CategoryHead = styled.h2`
  text-align: center;
  font-size: 28px;
`;
