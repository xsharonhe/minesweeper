import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MinesweeperTheme } from '../theme/theme';
import { Container, ShadowContainer } from './Container';
import NumberDisplay from './NumberDisplay';
import Cell from './Cells';
import { generateCells, CellStates } from '../utils';

const App: React.FC = ({
  ...props
}) => {
  const cells = generateCells();

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          row={rowIndex}
          col={colIndex}
          state={cell.state}
          value={cell.value}
          isUntouched={cell.state === CellStates.Untouched ? 'untouched' : ''}
        />
      ))
    );
  };

  return (
    <ThemeProvider theme={MinesweeperTheme} {...props}>
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
          {renderCells()}
        </Body>
      </GameBox>
    </ThemeProvider>
  );
};

const GameBox = styled(Container)`
    ${({ theme }): string => `  
        background: ${theme.colors.lightGrey};
        border-right-color: ${theme.colors.shadowGrey};
        border-bottom-color: ${theme.colors.shadowGrey};
        border-left-color: ${theme.colors.white};
        border-top-color: ${theme.colors.white};
    `};
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled(ShadowContainer)`
    padding: 10px 12px;
    width: 50vw;
    background: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FaceBox = styled(ShadowContainer)`
    width: 52px;
    height: 52px;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${({ theme }): string => `
      &:active {
            border-right-color: ${theme.colors.darkGrey};
            border-bottom-color: ${theme.colors.darkGrey};
            border-left-color: ${theme.colors.white};
            border-top-color: ${theme.colors.white};
      }
    `};
`;

const Body = styled(ShadowContainer)`
    margin-top: 16px;
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    grid-template-columns: repeat(9, 1fr);
`;

export default App;