import * as S from './styles';
import logo from '../../assets/svgs/logo.svg';
import { ReactComponent as MenuMobile } from '../../assets/svgs/menu.svg';
import { useMedia } from '../../hooks/useMedia';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const isMobile = useMedia('(max-width:800px)');
  const [isMobileActive, setIsMobileActive] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setIsMobileActive(false);
  }, [pathname]);

  return (
    <S.HeaderBg>
      <S.HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo marcar" />
        </Link>

        <nav>
          {isMobile && (
            <button onClick={() => setIsMobileActive(!isMobileActive)}>
              <MenuMobile />
            </button>
          )}
          <ul
            className={`${isMobile ? 'hidden' : ''} ${
              isMobileActive ? 'show' : ''
            }`}
          >
            <li>
              <S.HeaderLink to="products">Products</S.HeaderLink>
            </li>
            <li>
              <S.HeaderLink to="shopping-cart">Shopping Cart</S.HeaderLink>
            </li>
            <li>
              <S.HeaderLink to="my-wishlist">Wishlist</S.HeaderLink>
            </li>
          </ul>
        </nav>
      </S.HeaderContainer>
    </S.HeaderBg>
  );
};
