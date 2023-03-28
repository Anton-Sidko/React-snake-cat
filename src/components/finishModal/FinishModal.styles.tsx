import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 80%);
  background-color: var(--bgc-light);
  z-index: 100;
  padding: 2rem;
  box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: min(80vw, 30rem);

  h2 {
    color: var(--border-color);
    width: 100%;
  }
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 2rem;
`;
