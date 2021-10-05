export const homeOBJone = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "O nas",
  headline: "Kto wchodzi w skład MNcentrum?",
  description:
    "Powstaliśmy z myślą o Was, aby otoczyć Was kompleksowym podejściem treningowym i medycznym. Przede wszystkim dbamy o to, abyś czuł się komfortowo trenując w pojedynkę z nami, bez tłumów i zgiełku",
  buttonLabel: "Poznaj nas",
  imgStart: false,
  img: require("../assets/images/svg-1.svg").default,
  alt: "about",
  dark: true,
  primary: true,
  darkText: false,
  Link: '/info'
};

export const homeOBJtwo = {
  id: "diagnostics",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Diagnostyka",
  headline: "Daj się naprawić",
  description:
    "Wybierz dogodny dla siebie termin i umów się na darmową konsultację z trenerem!",
  // buttonLabel: "Umów się",
  imgStart: true,
  img: require("../assets/images/svg-2.svg").default,
  alt: "diagnostics",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeOBJthree = {
  id: "trainings",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Treningi",
  headline: "Trening to podstawa",
  description:
    "Wybierz odpowiedni dla siebie trening i umów się na określoną godzinę.",
  // buttonLabel: "Wybierz trening",
  imgStart: false,
  img: require("../assets/images/svg-3.svg").default,
  alt: "trainings",
  dark: true,
  primary: true,
  darkText: false,
  
};

export const homeOBJfour = {
  id: "contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Kontakt",
  headline: "Skontaktuj się z nami w wygodny dla siebie sposób",
  description: "Poprzez e-mail, telefon czy media.",
  buttonLabel: "Kontakt",
  imgStart: true,
  img: require("../assets/images/svg-4.svg").default,
  alt: "contact",
  dark: false,
  primary: false,
  darkText: true,
  Link : '/contact'
};
