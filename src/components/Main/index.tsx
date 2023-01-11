import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito o lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um desenvolvedor na frente de um tela com códigos."
    />
  </S.Wrapper>
)

export default Main
