import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const Footer = ({children}) => {

    return (
        <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>AKcentrum</h1>
          <p>
            Naszym motto jest #nomercy, ale to nie oznacza, że wyjdziesz ledwo
            żywy z sali… 
          </p>
          <p1>🤭</p1>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Skontaktuj się z nami</FooterLinkTitle>
          <FooterLink to="/contact">Kontakt</FooterLink>
          <FooterLink to="/">Wsparcie</FooterLink>
          <FooterLink to="/">Lokalizacja</FooterLink>
          <FooterLink to="/">Sponsoring</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Lokalizacja</FooterLink>
          <FooterLink to="/">Sponsoring</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) / 2)
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: black;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-top: 3rem;
    color: white;
  }

  p{
      
      color: white;
  }
  p1{
    font-style: normal;

  }
  @media screen and(max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and(max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: grey;

  &:hover {
    color: #457B9D;
    transtition: 0.3s ease-out;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
  color: #fff;
`
