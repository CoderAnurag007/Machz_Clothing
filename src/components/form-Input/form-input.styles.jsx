import styled, { css } from "styled-components";
const subcolor = "black";
const maincolor = "white";

const shrinkLabel = css`
  top: -25px;
  font-size: 16px;
  color: ${maincolor};
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormGroupLabel = styled.label`
  color: ${subcolor};
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Forminputbox = styled.input`
  background: none;
  background-color: rgb(256, 255, 257);
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subcolor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${FormGroupLabel} {
    @include ${shrinkLabel};
  }
`;
