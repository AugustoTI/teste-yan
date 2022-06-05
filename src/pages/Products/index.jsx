import * as S from './styles';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { CurrencyConverter } from '../../util/currency-converter';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(({ data }) => setProducts(data));
  }, []);

  return (
    <section>
      <S.ProductsTitle>Our products</S.ProductsTitle>
      <Swiper tag="ul" spaceBetween={20} slidesPerView={3}>
        {products.map(({ id, price, description, images, name }) => {
          return (
            <SwiperSlide tag="li" key={id}>
              <Link to={`products/${id}`}>
                <img src={images} alt="some text" />
                <S.ProductTitle>{name}</S.ProductTitle>
                <S.ProductPrice>{CurrencyConverter(price)}</S.ProductPrice>
                <S.ProductText>{description}</S.ProductText>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
