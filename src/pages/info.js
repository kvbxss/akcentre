import React from "react";
import { GlobalStyle } from "../components/styles/GlobalStyles";
import styled from "styled-components";
import HomeBar from "../components/HomeBar";
import Footer from "../components/Footer";
import img from "../assets/images/svg-11.svg"

const AboutInfo = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <HomeBar></HomeBar>
      <AboutContainer lightBg="false">
        <AboutWrapper>
          <AboutRow imgStart="true">
            <Column1>
              <TextWrapper>
                <TopLine>Trochę</TopLine>
                <Heading lightText="true">O AKCentrum</Heading>
                <Subtitle darkText="false">
                  {" "}
                  Jesteśmy zespołem fizjoterapeutów, trenerów i dietetyków z
                  wieloletnim doświadczeniem, których pasją jest poprawa jakości
                  życia klientów. Kierujemy się zasadą, że każdy klient wymaga
                  indywidualnego podejścia uwzględniającego jego kondycję
                  fizyczną i psychiczną. Jesteśmy specjalistami, dla których
                  najważniejsze jest zdrowie i dobre samopoczucie naszych
                  klientów. Nie szukamy dróg na skróty- stawiamy na bezpieczne
                  osiągnięcie długotrwałego efektu.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src= {img}
                  alt="img"
                />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
      <Footer />
    </>
  );
};

const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
    color: #7189FF;
    font-size: 16px;
    line-height: 16px;
    font-weight 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color ${({ lightText }) => (lightText ? "#7189FF" : "#010606")};

    @media screen and (max-width:480px) {
        font-size: 32px;
    }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export default AboutInfo;
