import P from 'prop-types';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { CurrencyConverter } from '../../util/currency-converter';

export const Slider = ({ slideOf }) => {
  return (
    <Swiper
      tag="ul"
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slideOf.map(({ id, name, price, image, description }) => (
        <SwiperSlide key={id} tag="li">
          <Link to={`/products/${id}`}>
            <img src={image} alt="" />
            <S.SlideTitle>{name}</S.SlideTitle>
            <S.SlidePrice>{CurrencyConverter(price)}</S.SlidePrice>
            <S.SlideText>{description}</S.SlideText>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  slideOf: P.array.isRequired,
};
