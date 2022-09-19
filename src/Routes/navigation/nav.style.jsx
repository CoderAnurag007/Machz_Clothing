import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100px;
  margin-bottom: 2rem;
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  background-color: white;
  justify-content: space-between;

  .expand_nav {
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    display: none;
  }
  @media (max-width: 520px) {
    .expand_nav {
      display: block;
    }
  }
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

  @media (max-width: 520px) {
    display: none;
  }
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

export const ExpandImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-top: -12px;
`;
