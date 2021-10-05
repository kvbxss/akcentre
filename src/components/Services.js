import React from "react";
import styled from "styled-components";
import Icon1 from "../assets/images/svg-5.svg";
import Icon2 from "../assets/images/svg-6.svg";
import Icon3 from "../assets/images/svg-7.svg";
import Icon4 from "../assets/images/svg-8.svg";
import Icon5 from "../assets/images/svg-9.svg";
import Icon6 from "../assets/images/svg-10.svg";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nasze Usługi</ServicesH1>
      <ServicesWrapper>
      <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Gym Kids</ServicesH2>
          <ServicesP>
           Zajęcia gimnastyczne dla dzieci 🤸🏻‍♀️
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Treningi Personalne</ServicesH2>
          <ServicesP>
           Po prostu #nomercy. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Treningi Medyczne</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Zajęcia Grupowe</ServicesH2>
          <ServicesP>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Diagnostyka</ServicesH2>
          <ServicesP>
          i konsultacje fizjoterapeutyczne
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Neurotreningi</ServicesH2>
          <ServicesP>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  height: 1000px;
  dipslay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 2200px;
  }

  @media screenand (max-width: 480px) {
    height: 2600px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  margin-bottom: 32px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  text-align: 10px;
  color: black;
  
`;

const ServicesP = styled.p`
  color: black;
  font-size: 1rem;
  text-align: center;
`;
