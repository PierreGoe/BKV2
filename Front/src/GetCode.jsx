import axios from 'axios';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export default function GetCode() {
  // const [code] = useState('');
  const [results, setResults] = useState('');
  // const [button, setButton] = useState(false);

  // const reversButtonValue = () => {
  //   setButton(!button);
  // };

  useEffect(() => {
    axios
      .get('http://localhost:5050/test')
      .then(({ data }) => {
        setResults(data[0].bkcode);
      })
      .catch();
  }, []);
  return (
    <>
      <GlobalStyle />
      <BurgerUp>
        <Sesame />
        <Sesame />
        <Sesame />
        <Sesame />
        <Sesame />
        <Sesame />
        <Sesame />
        <Sesame />
        <Sesame />
      </BurgerUp>
      <Title>BURGER KING CODE GENERATOR</Title>
      <Welcome>
        Welcome, you can use this code on the back of your checkout ticket to
        win a product on your next visit.
      </Welcome>
      <Code>{results}</Code>
      {/* <Refresh>Refresh</Refresh> */}
      <BurgerDown />
    </>
  );
}

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

const Title = styled.h1`
  font-size: 60px;
  font-family: 'Paytone One', sans-serif;
  margin-bottom: 30px;
  /* color: #fe8630; */
  color: #d52201;
`;

const Welcome = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Code = styled.section`
  font-size: 22px;
  margin-bottom: 30px;
  font-family: 'Paytone One', sans-serif;
`;
// const Refresh = styled.button`
//   background: rgb(247, 168, 0);
//   cursor: pointer;
//   text-align: center;
//   font-family: 'Paytone One', sans-serif;
//   color: white;
//   border-radius: 25px;
//   width: 200px;
//   height: 40px;
//   text-transform: uppercase;
// `;
const BurgerUp = styled.div`
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
const BurgerDown = styled.div`
  background-color: #ff8532;
  height: 50px;
  border-radius: 10px 10px 45px 45px;
  border: 1px solid #fff;
`;

const Sesame = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  background-color: #fff;
  clip-path: ellipse(16% 43% at 50% 50%);
  animation: SessamShake 1s infinite;

  &:nth-child(1) {
    top: 40px;
    left: 90px;
  }
  &:nth-child(2) {
    top: 10px;
    left: 140px;
  }
  &:nth-child(3) {
    top: -20px;
    left: 200px;
  }
  &:nth-child(4) {
    top: -50px;
    left: 260px;
  }
  &:nth-child(5) {
    top: 0px;
    left: 50px;
  }
  &:nth-child(6) {
    top: -30px;
    left: 110px;
  }
  &:nth-child(7) {
    top: -60px;
    left: 170px;
  }
  &:nth-child(8) {
    top: -90px;
    left: 230px;
  }
  &:nth-child(9) {
    top: -120px;
    left: 300px;
  }
  @keyframes SessamShake {
    0%,
    100% {
      transform: translateY(0);
    }

    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }

    20%,
    40%,
    60% {
      transform: translateY(8px);
    }

    80% {
      transform: translateY(6.4px);
    }

    90% {
      transform: translateY(-6.4px);
    }
  }
`;
