import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  GlobalStyle,
  TitleS,
  WelcomeS,
  CodeS,
  InfoS,
  BurgerUpS,
  BurgerDownS,
  SesameS,
  TheBurger,
} from './style';

export default function GetCode() {
  const [results, setResults] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5050/code')
      .then(({ data }) => {
        setResults(data[0].bkcode);
      })
      .catch(() => {
        setResults('No code found');
      });
  }, []);
  return (
    <>
      <TheBurger>
        <GlobalStyle />

        <BurgerUpS>
          <SesameS />
          <SesameS />
          <SesameS />
          <SesameS />
          <SesameS />
          <SesameS />
          <SesameS />
          <SesameS />
          <SesameS />
        </BurgerUpS>
        <TitleS>BURGER KING CODE GENERATOR</TitleS>
        <WelcomeS>
          Welcome, you can use this code on the back of your checkout ticket to
          win a product on your next visit.
        </WelcomeS>
        <CodeS>{results}</CodeS>
        <BurgerDownS />
      </TheBurger>
      <InfoS>More Info</InfoS>
    </>
  );
}
