import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;
export const CategoryPreviewTitle = styled(Link)`
  font-size: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    color: blueviolet;
  }
`;

export const CategoryPreviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
`;
