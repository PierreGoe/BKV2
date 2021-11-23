import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  /* background-color: #512212; */
  background-color: #f5ebdc;
  /* color: #FFF; */
  color: black;
  font-family: Roboto Condensed;
  display:flex;
  align-items: center;
  height:100vh;
  margin: auto;
  justify-content: center;
  text-align: center;
  max-width: 400px;


}
`;
const TitleS = styled.h1`
  font-size: 60px;
  font-family: 'Paytone One', sans-serif;
  margin-bottom: 30px;
  /* color: #fe8630; */
  color: #d52201;
`;
const WelcomeS = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;
const CodeS = styled.section`
  font-size: 22px;
  margin-bottom: 30px;
  font-family: 'Paytone One', sans-serif;
`;
const InfoS = styled.button`
  background: rgb(247, 168, 0);
  cursor: pointer;
  text-align: center;
  font-family: 'Paytone One', sans-serif;
  color: white;
  border-radius: 25px;
  width: 200px;
  height: 40px;
  text-transform: uppercase;
`;
const BurgerUpS = styled.div`
  & {
    background-color: #ff8532;
    height: 180px;
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
`;
const BurgerDownS = styled.div`
  background-color: #ff8532;
  height: 50px;
  border-radius: 10px 10px 45px 45px;
  border: 1px solid #fff;
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
export {
  GlobalStyle,
  TitleS,
  WelcomeS,
  CodeS,
  InfoS,
  BurgerUpS,
  BurgerDownS,
  SesameS,
};
