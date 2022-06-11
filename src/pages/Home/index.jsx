import * as S from './styles';
import imgHome from '../../assets/images/Image.jpg';

export const Home = () => {
  return (
    <S.Main>
      <img src={imgHome} alt="" />
      <S.MainContent>
        <S.MainTitle>Run with more comfort and speed.</S.MainTitle>
        <S.MainText>
          We have been producing comfort in your walk since 2010. Our sneakers
          with a modern and elegant design, were thought by our team with care
          so that your experience in your training has an excellent experience.
        </S.MainText>
        <S.MainButton to="/products">Our products</S.MainButton>
      </S.MainContent>
    </S.Main>
  );
};
