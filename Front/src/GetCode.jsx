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
        localStorage.setItem('previouCode', data[0].bkcode);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          setResults(
            ` You already had a code! Wait 5 minutes for take a new code. Your previous code is: ${localStorage.getItem(
              'previouCode'
            )}`
          );
        } else setResults('Error contact Admin');
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
      <InfoS>
        <a href="/Info">More Info</a>
      </InfoS>
    </>
  );
}
