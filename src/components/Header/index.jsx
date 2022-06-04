import * as S from './styles';
import logo from '../../assets/svgs/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <S.HeaderBackground>
      <S.HeaderContainer>
        <Link to="/">
          <img src={logo} alt="logo marca" />
        </Link>
        <nav>
          <S.HeaderLinks>
            <li>
              <S.HeaderLink to="products">Products</S.HeaderLink>
            </li>
            <li>
              <S.HeaderLink to="shopping-cart">Shopping Cart</S.HeaderLink>
            </li>
            <li>
              <S.HeaderLink to="wishlist">Wishlist</S.HeaderLink>
            </li>
          </S.HeaderLinks>
        </nav>
      </S.HeaderContainer>
    </S.HeaderBackground>
  );
};
