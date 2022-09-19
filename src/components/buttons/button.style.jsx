import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 180px;
  width: auto;
  min-height: 50px;
  letter-spacing: 0.3px;
  line-height: 20px;
  padding: 5px 15px;
  font-size: 0.9rem;
  background-color: rgb(11, 25, 231);
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: 100;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  border-radius: 25px;
  align-items: center;
  margin: 15px 15px 15px 15px;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s;
  }
  &:active {
    transform: translateY(3px) translateX(-3px);
  }
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background-color: #1860d3;
    border: none;
    transition: 0.5s;
    color: #fff;
  }
  &:active {
    transform: translateY(3px) translateX(-3px);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    transition: 0.5s;
  }
  &:active {
    transform: translateY(3px) translateX(-3px);
  }
`;
