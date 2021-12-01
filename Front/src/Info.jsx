import {
  GlobalStyle,
  TitleS,
  WelcomeS,
  InfoS,
  BurgerUpS,
  BurgerDownS,
  SesameS,
  TheBurger,
} from './style';

export default function Info() {
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
        <TitleS>MORE INFO</TitleS>
        <WelcomeS>
          Hi, I am a french web developer and you are on one of my study
          project, you can find the source code on github, this generator
          creates a code to claim a free product at burgerking. You can take
          more info -
          <a
            href="https://www.burgerking.fr/page/bkvousecoute"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </WelcomeS>
        <BurgerDownS />
      </TheBurger>
      <InfoS>
        <a href="/">Return</a>
      </InfoS>
    </>
  );
}
