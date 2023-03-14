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
  gap: 2rem;

  & > ${SettingsWrap} {
    gap: 2rem 3rem;
  }
`;
