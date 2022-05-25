import React from "react";
import styled from "styled-components";
import Icon1 from "../assets/images/svg-5.svg";
import Icon2 from "../assets/images/svg-6.svg";
import Icon3 from "../assets/images/svg-7.svg";
import Icon4 from "../assets/images/svg-8.svg";
import Icon5 from "../assets/images/svg-9.svg";
import Icon6 from "../assets/images/svg-10.svg";
import Swal from "sweetalert2/src/sweetalert2.js";
import withReactContent from "sweetalert2-react-content";
import '@sweetalert2/theme-dark/dark.css';

const MySwal=withReactContent(Swal);

const launchAlert1= () => {
  MySwal.fire({          
   title: <p>Gym Kids!
     <p></p>
     Ucząc elementów gimnastycznych rozkładamy je na części pierwsze, 
     dostosowując ćwiczenie do możliwości danej osoby, 
     a na koniec uzupełniamy to własnym doświadczeniem.</p>,
   footer: 'Copyright 2022',
   confirmButtonText: <h3>Okej!</h3>,
   confirmButtonColor: '#7189ff',
   width: 600,
   padding: '3em',
   color: '#7189ff',
   iconHtml: <img src={Icon1} alt="xd" height={150} width= {400}/>,
 })
}

const launchAlert2= () => {
  MySwal.fire({          
   title: <p>Treningi Personalne
     <p></p>
     Dobrze dobrany plan treningowy pozwoli Ci dojść do wymarzonej figury.<p></p> 
     Pamiętaj, że musi być dobrany idealny pod Ciebie, 
     nie ściągnięty z internetu, instagrama czy podpatrzony od koleżanki.<p></p>
     U nas znajdziecie specjalistów, którzy rozpiszą wam idealny plan treningowy, 
     dobrany pod wasze cele😎</p>,
   footer: 'Copyright 2022',
   confirmButtonText: <h3>Okej!</h3>,
   confirmButtonColor: '#7189ff',
   width: 600,
   padding: '3em',
   color: '#7189ff',
   iconHtml: <img src={Icon2} alt="xd" height={150} width= {400}/>,
 })
}

const launchAlert3= () => {
  MySwal.fire({          
   title: <p>Treningi Medyczne
     <p></p>
     Holistycznie (ostatnio dość modne słowo) podchodzeimy do pacjenta, 
     dobierając jak najlepsze narzędzia pracy do danego celu.<p></p>
     Praca w studiu, gdzie możemy trenować 1:1 umożliwia realizację planu,
    skupiając się wyłącznie na podopiecznym.
</p>,
   footer: 'Copyright 2022',
   confirmButtonText: <h3>Okej!</h3>,
   confirmButtonColor: '#7189ff',
   width: 600,
   padding: '3em',
   color: '#7189ff',
   iconHtml: <img src={Icon3} alt="xd" height={150} width= {400}/>,
 })
}

const launchAlert4= () => {
  MySwal.fire({          
   title: <p>Zajęcia Grupowe
     <p></p>
     Czyli 'Zdrowy Kręgosłup' 
     'Interwały' oraz wcześniej wspomniane już 'Gym Kids'</p>,
   footer: 'Copyright 2022',
   confirmButtonText: <h3>Okej!</h3>,
   confirmButtonColor: '#7189ff',
   width: 600,
   padding: '3em',
   color: '#7189ff',
   iconHtml: <img src={Icon4} alt="xd" height={150} width= {400}/>,
 })
}

const launchAlert5= () => {
  MySwal.fire({          
   title: <p>Diagnostyka
     <p></p>
     Najpierw rozmowa, ustalenie głównego celu, przeprowadzenie wywiadu odnośnie chorób, przeciwwskazań, kontuzji etc. <p></p>
📈 Diagnostyka funkcjonalna. Warto zabrać ze sobą strój sportowy, aby dokładnie sprawdzić aparat ruchu i jego ruchomości. Tutaj bardzo często wkrada się konsternacja <p></p>
  🤯Twoim celem była redukcja, a okazuje się, że trzeba się najpierw naprawić.
🗣 Znowu rozmowa, ustalamy plan na nowo, teraz ten główny, namacalny. Ten, który przyniesie najlepsze korzyści dla Twojego zdrowia 💊 i sylwetki🧘🏻‍♂️
<p></p>
🏋🏼‍♂️ Trenujemy. A w zasadzie przepracowujemy przykładowy plan treningowy, uwzględniając wyżej wymienione kontuzje. <p></p>
To wszystko w zaledwie godzinnym, darmowym spotkaniu!</p>,
   footer: 'Copyright 2022',
   confirmButtonText: <h3>Okej!</h3>,
   confirmButtonColor: '#7189ff',
   width: 600,
   padding: '3em',
   color: '#7189ff',
   iconHtml: <img src={Icon5} alt="xd" height={150} width= {400}/>,
 })
}

const launchAlert6= () => {
  MySwal.fire({          
   title: <p>Neurotreningi
     <p></p>
     Przywracamy poprzez ćwiczenia aparat ruchu do prawidłowych funkcji!</p>,
   footer: 'Copyright 2022',
   confirmButtonText: <h3>Okej!</h3>,
   confirmButtonColor: '#7189ff',
   width: 600,
   padding: '3em',
   color: '#7189ff',
   iconHtml: <img src={Icon6} alt="xd" height={150} width= {400}/>,
 })
}

const Services = () => {
  return (
    <ServicesContainer id="services" >
      <ServicesH1>Nasze Usługi</ServicesH1>
      <ServicesWrapper>
      <ServicesCard onClick={launchAlert1}>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Gym Kids</ServicesH2>
          <ServicesP>
           Zajęcia gimnastyczne dla dzieci 🤸🏻‍♀️
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={launchAlert2}>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Treningi Personalne</ServicesH2>
          <ServicesP>
           Po prostu #nomercy. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={launchAlert3}>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Treningi Medyczne</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard onClick={launchAlert4}>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Zajęcia Grupowe</ServicesH2>
          <ServicesP>
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={launchAlert5}>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Diagnostyka</ServicesH2>
          <ServicesP>
          i konsultacje fizjoterapeutyczne
          </ServicesP>
        </ServicesCard>
        <ServicesCard onClick={launchAlert6}>
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
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 2600px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.2fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: -100px 150px;
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
  padding: 10px 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  margin-bottom: 20px;

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
