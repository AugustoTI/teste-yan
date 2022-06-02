import * as S from './styles';
import logo from '../../assets/svgs/logo.svg';

export const Header = () => {
  return (
    <S.HeaderBackground>
      <S.HeaderContainer>
        <img src={logo} alt="logo marca" />
        <nav>
          <S.HeaderLinks>
            <li>Products</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </S.HeaderLinks>
        </nav>
      </S.HeaderContainer>
    </S.HeaderBackground>
  );
};
