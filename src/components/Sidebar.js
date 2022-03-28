import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import tomjerry from "../assets/images/tom&jerry.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
      iconHtml: <img src={tomjerry} alt="xd" height={70} width= {200}/>,
    })
}

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FontAwesomeIcon icon={faTimes} color ='white'/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="#about" onClick={toggle}>
            O nas
          </SidebarLink>
          <SidebarLink to="#diagnostics" onClick={toggle}>
            Diagnostyka
          </SidebarLink>
          <SidebarLink to="#trainings" onClick={toggle}>
            Treningi
          </SidebarLink>
          <SidebarLink to="#contact" onClick={toggle}>
            Kontakt
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="#home" onClick={launchAlert}>Witaj!</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled.div`
  color: #fff;
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #7189ff;
    transition: 0.2s ease-in-out;
  }
`;
const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled(Link)`
  border-radius: 50px;
  background: #7189ff;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c1cefe;
    color: #010606;
  }
`;
