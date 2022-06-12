import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ isExpand }) => css`
    grid-column: ${isExpand ? '1/-1' : 'initial'};

    input {
      display: block;
      width: 100%;
      padding: 0.6rem 1.2rem;
    }
  `}
`;
