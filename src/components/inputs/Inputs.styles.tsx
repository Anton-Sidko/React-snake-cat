import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 2rem;
    line-height: 1;
    vertical-align: middle;
  }

  input {
    outline: none;
    font-size: inherit;
    font-family: inherit;

    &[type='checkbox'] {
      width: 1.6rem;
      height: 1.6rem;
      accent-color: var(--main-color);
    }

    &[type='number'] {
      padding-left: 5px;
      width: 5rem;
      line-height: 1;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        opacity: 1;
      }
    }

    &[type='range'] {
      width: 15rem;
      background-color: var(--bgc);
      accent-color: var(--main-color);
    }
  }
`;
