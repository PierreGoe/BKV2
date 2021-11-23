import styled, { createGlobalStyle } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '400px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const GlobalStyle = createGlobalStyle`
body{
  /* background-color: #512212; */
  background-color: #f5ebdc;
  /* color: #FFF; */
 
  

  
 
}

`;
const TitleS = styled.h1`
  font-size: 10vw;
  padding: 1rem;
  font-family: 'Paytone One', sans-serif;
  margin-bottom: 30px;
  /* color: #fe8630; */
  color: #d52201;
  overflow: hidden;
  @media ${device.mobileL} {
    font-size: 60px;
  }
`;
const WelcomeS = styled.p`
  font-size: 7vw;
  padding: 1rem;
  margin-bottom: 30px;
  @media ${device.mobileL} {
    font-size: 24px;
  }
`;
const CodeS = styled.section`
  font-size: 7vw;
  margin-bottom: 30px;
  font-family: 'Paytone One', sans-serif;
  padding: 1rem;
  border-radius: 1rem;
  text-shadow: 5px 5px #fff;
  @media ${device.mobileL} {
    font-size: 24px;
  }
`;
const InfoS = styled.button`
  background: rgb(247, 168, 0);
  cursor: pointer;
  text-align: center;
  font-family: 'Paytone One', sans-serif;
  color: white;
  border-radius: 25px;
  width: 200px;
  text-transform: uppercase;
  margin: auto;
  margin-top: 4vh;
  padding: 10px;
  max-width: 200px;
  width: 80vw;

  border: none;
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: 3rem;
    margin-top: auto;
  }
`;
const BurgerUpS = styled.div`
  & {
    background-color: #ff8532;
    max-width: ${size.mobileL};
    max-height: 180px;
    height: 20rem;
    border-radius: 200px 200px 15px 15px;
    border: 1px solid #fff;
    position: relative;
  }

  &:after {
    content: ' ';
    /* Size and shape */
    width: 10px;
    height: 6px;
    border-radius: 40%;
    /* Position and color */
    box-shadow: 100px -165px #ffffff;
  }

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;
const BurgerDownS = styled.div`
  background-color: #ff8532;
  height: 50px;
  border-radius: 10px 10px 45px 45px;
  border: 1px solid #fff;
  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;
const SesameS = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  background-color: #fff;
  clip-path: ellipse(16% 43% at 50% 50%);

  &:nth-child(1) {
    top: 40px;
    left: 90px;
    animation: SessamShake 5s infinite 100ms;
    transform: rotate(3deg);
  }
  &:nth-child(2) {
    top: 10px;
    left: 140px;
    animation: SessamShake 5s infinite 200ms;
    transform: rotate(-5deg);
  }
  &:nth-child(3) {
    top: -20px;
    left: 200px;
    animation: SessamShake 5s infinite 300ms;
    transform: rotate(8deg);
  }
  &:nth-child(4) {
    top: -50px;
    left: 260px;
    animation: SessamShake 5s infinite 400ms;
    transform: rotate(-7deg);
  }
  &:nth-child(5) {
    top: 0px;
    left: 50px;
    animation: SessamShake 5s infinite 500ms;
    transform: rotate(5deg);
  }
  &:nth-child(6) {
    top: -30px;
    left: 110px;
    animation: SessamShake 5s infinite 600ms;
    transform: rotate(8deg);
  }
  &:nth-child(7) {
    top: -60px;
    left: 170px;
    animation: SessamShake 5s infinite 700ms;
    transform: rotate(-8deg);
  }
  &:nth-child(8) {
    top: -90px;
    left: 230px;
    animation: SessamShake 5s infinite 800ms;
    transform: rotate(-3deg);
  }
  &:nth-child(9) {
    top: -120px;
    left: 300px;
    animation: SessamShake 5s infinite 900ms;
    transform: rotate(10deg);
  }

  @keyframes SessamShake {
    0%,
    20% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(-7px) rotate(5deg);
    }
  }
`;
const TheBurger = styled.div`
  max-width: ${size.mobileL};
  margin-top: auto;
`;
export {
  GlobalStyle,
  TitleS,
  WelcomeS,
  CodeS,
  InfoS,
  BurgerUpS,
  BurgerDownS,
  SesameS,
  TheBurger,
};
