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
      .catch(() => {
        console.log('error with API call');
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
