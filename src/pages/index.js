import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeOBJfour,
  homeOBJone,
  homeOBJthree,
  homeOBJtwo,
} from "../data/InfoData";
import Services from "../components/Services";
import { GlobalStyle } from "../components/styles/GlobalStyles";
import Footer from "../components/Footer";




const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

 
  
  return (
    <>
    <GlobalStyle>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeOBJone} />
      <InfoSection {...homeOBJtwo} />
      <InfoSection {...homeOBJthree} />
      <Services />
      <InfoSection {...homeOBJfour} />    
      <Footer />
      </GlobalStyle>
    </>
    
  ); 
};


export default Home;
