import styled from 'styled-components';

export const GameHeader = styled.header`
  padding: 3vh 0 2.5vh;
`;

export const GameTitle = styled.h1`
  font-family: 'BlackItalic', sans-serif;
  text-align: center;
  font-size: min(12vw, 6rem);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: min(10vw, 4.5rem);
    display: inline-flex;
    margin-left: 0.25em;
    width: fit-content;
  }
`;

export const GameSubTitle = styled.h2`
  font-family: 'Light';
  text-align: center;
  font-size: min(5vw, 2rem);
`;
