import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MinesweeperTheme } from '../theme/theme';
import { Container } from './Container';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ MinesweeperTheme }>
      <GameBox>
        <Header>
          Hello
        </Header>
        <Body>
          There
        </Body>
      </GameBox>
    </ThemeProvider>
  )
}

const GameBox = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;  
  background: ${({ theme }) => theme.colors.lightGrey};
  border-right-color: ${({ theme }) => theme.colors.shadowGrey};
  border-bottom-color: ${({ theme }) => theme.colors.shadowGrey};
  border-left-color: ${({ theme }) => theme.colors.white};
  border-top-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled(Container)`
  padding: 10px 12px;
  background:${({ theme }) => theme.colors.lightGrey};
  border-right-color: ${({ theme }) => theme.colors.white};
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-left-color: ${({ theme }) => theme.colors.darkGrey};
  border-top-color: ${({ theme }) => theme.colors.darkGrey};
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

const Body = styled(Container)`
  margin-top: 16px;
  border-right-color: ${({ theme }) => theme.colors.white};
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-left-color: ${({ theme }) => theme.colors.darkGrey};
  border-top-color: ${({ theme }) => theme.colors.darkGrey};
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
`;

export default App;