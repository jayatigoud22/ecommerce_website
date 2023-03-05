import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <img src="./images/logo.png" alt="my logo img" width="300" height="80" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color:rgba(43,162,186,0.4);
  display: flex;
  color:rgba(81,56,238,0.4);
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo{
    height: 3rem;
    max-width: 1rem;
  }
`;
export default Header;
