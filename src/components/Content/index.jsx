import P from 'prop-types';
import * as S from './styles';

export const Content = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Content.propTypes = {
  children: P.node.isRequired,
};
