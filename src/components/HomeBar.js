import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";

const HomeBar = () => {
  return (
    <Homebar>
        <HomebarContainer>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        <HomeLogo to="/">
            <img src={logo} alt="logo" width={100} />
          </HomeLogo>
        </HomebarContainer>
        </Homebar>
  )
}

export default HomeBar;

const Homebar = styled.nav`
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

const HomebarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const HomeLogo = styled(Link)`
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