/* eslint-disable react/prop-types */
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import { CurrencyConverter } from '../../util/currency-converter';

import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = ({ slideOf, breakpoints }) => {
  return (
    <Swiper
      tag="ul"
      spaceBetween={20}
      slidesPerView={3}
      modules={[Navigation, A11y]}
      breakpoints={breakpoints}
      navigation
    >
      {slideOf.map(({ id, name, description, price, image }) => (
        <SwiperSlide key={id} tag="li">
          <Link to={`/products/${id}`}>
            <img src={image} alt="" />
            <S.SlideTitle>{name}</S.SlideTitle>
            <S.SlideText>{description}</S.SlideText>
            <S.SlidePrice>{CurrencyConverter(price)}</S.SlidePrice>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
