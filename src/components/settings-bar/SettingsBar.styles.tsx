import styled from 'styled-components';

export const SettingsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const GameSettingsBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: min(4vw, 2rem);

  & > ${SettingsWrap} {
    gap: min(4vw, 2rem) min(5vw, 3rem);
  }

  h2 {
    font-size: min(5vw, 2rem);
  }
`;
