import styled, { css } from 'styled-components';

export const BackgroundModal = styled.div`
  ${() => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
  `}
`;

export const ContainerModal = styled.div`
  ${() => css`
    background-color: #fff;
    margin: 0 2rem;
    padding: 1.6rem;
    flex: 1;
    height: 40rem;
    max-width: 800px;
    border-radius: 0.4rem;
    transform: scale(0.8);
    opacity: 0;
    animation: scaleUp 0.3s forwards;

    > h1 {
      text-align: center;
      margin-bottom: 2rem;
    }

    @keyframes scaleUp {
      to {
        opacity: 1;
        transform: initial;
      }
    }
  `}
`;

export const InputsForm = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 2rem;
    margin-bottom: 2rem;
  `}
`;

export const Button = styled.button`
  ${() => css`
    margin-top: 2rem;
    padding: 0.6rem 1.2rem;
  `}
`;
