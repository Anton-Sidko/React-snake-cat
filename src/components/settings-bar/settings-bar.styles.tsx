import styled from 'styled-components';

export const SettingsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const GameSettingsBar = styled.div`
  width: 100%;

  & > ${SettingsWrap} {
    margin-top: 2rem;
  }
`;

export const SettingsInputWrap = styled.div`
  display: flex;
  align-items: center;
`;
