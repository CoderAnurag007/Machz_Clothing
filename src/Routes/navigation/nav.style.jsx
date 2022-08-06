import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  max-width: 100px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: bold;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  &:hover {
    transition: 0.3s all;
    color: blueviolet;
  }
`;

export const Logoimage = styled.img`
  min-height: 5.5rem;
  max-width: 5.5rem;
`;
