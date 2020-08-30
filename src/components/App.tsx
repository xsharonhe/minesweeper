import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MinesweeperTheme } from '../theme/theme';
import Container from './Container';
import NumberDisplay from './NumberDisplay';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ MinesweeperTheme }>
      <GameBox>
        <Header>
          <NumberDisplay score={0}/>
            <FaceBox>
              <span role='img' aria-label='smile'>
                😁 
              </span>
            </FaceBox>
          <NumberDisplay score={23}/>
        </Header>
        <Body>
          There
        </Body>
      </GameBox>
    </ThemeProvider>
  );
};

const GameBox = styled(Container)`
  padding: 16px;  
  background: ${({ theme }) => theme.colors.lightGrey};
  border-right-color: ${({ theme }) => theme.colors.shadowGrey};
  border-bottom-color: ${({ theme }) => theme.colors.shadowGrey};
  border-left-color: ${({ theme }) => theme.colors.white};
  border-top-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled(Container)`
  padding: 10px 12px;
  width: 50vw;
  background:${({ theme }) => theme.colors.lightGrey};
  border-right-color: ${({ theme }) => theme.colors.white};
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-left-color: ${({ theme }) => theme.colors.darkGrey};
  border-top-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaceBox = styled(Container)`
  width: 52px;
  height: 52px;
  font-size: 35px;
  border-right-color: ${({ theme }) => theme.colors.white};
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-left-color: ${({ theme }) => theme.colors.darkGrey};
  border-top-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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