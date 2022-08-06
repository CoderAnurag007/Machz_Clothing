import styled, { css } from "styled-components";
const subcolor = "grey";
const maincolor = "black";

const shrinkLabel = css`
  top: -16px;
  font-size: 12px;
  color: ${maincolor};
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormGroupLabel = styled.label`
  color: ${subcolor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Forminputbox = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
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
