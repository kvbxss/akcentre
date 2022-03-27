import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import tomjerry from "../assets/images/tom&jerry.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import Swal from "sweetalert2/src/sweetalert2.js";
import withReactContent from "sweetalert2-react-content";
import '@sweetalert2/theme-dark/dark.css';

const MySwal=withReactContent(Swal);

const launchAlert= () => {
     MySwal.fire({          
      title: <p>Witaj na stronie AKcentrum. 
        <p></p>
        Rozgość się.</p>,
      footer: 'Copyright 2022',
      confirmButtonText: <h3>Okej!</h3>,
      confirmButtonColor: '#7189ff',
      width: 600,
      padding: '3em',
      color: '#7189ff',
      iconHtml: <img src={tomjerry} alt="xd" height={150} width= {400}/>,
    })
}

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="logo" width={100} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FontAwesomeIcon icon={faBars} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="#about">O nas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#diagnostics">Diagnostyka</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#trainings">Treningi</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#services">Usługi</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#contact">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn onClick={launchAlert}>
            <NavBtnLink>
              Witaj!
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};





export default Navbar;


const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  marign-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    margin-top: 10px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  [] &.active {
    border-bottom: 3px solid #7189ff;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #7189ff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #b9d3e2;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #b9d3e2;
  }
`;

