import styled from 'styled-components';

export const BaseButton = styled.button`
  display: block;
  appearance: none;
  outline: none;
  padding: 0.3em 1em;
  font-size: inherit;
  font-family: inherit;
  color: var(--bgc-light);
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  transition: all 0.5s;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: var(--main-color);
    background-color: var(--bgc-light);
  }
`;
