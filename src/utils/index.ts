import { 
    MAX_COLS, 
    MAX_ROWS,
    NO_OF_BOMBS 
} from '../constants/index';

export enum CellValues {
    None,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Bomb
};

export enum CellStates {
    Untouched,
    Visible,
    Flagged
}

export type CellTypes = {
    value: CellValues
    state: CellStates
}

const randInt = (int: number): number => {
    return Math.floor(Math.random() * int);
};

export const generateCells = (): CellTypes[][] => {
    let cells: CellTypes[][] = [];

    for (let row = 0; row < MAX_ROWS; row++) {
        cells.push([]);
        for (let col = 0; col < MAX_COLS; col++) {
            cells[row].push({
                value: CellValues.None,
                state: CellStates.Untouched
            });
        }
    }

    let bombsPlaced = 0;
    while (bombsPlaced < NO_OF_BOMBS) {
        const randomRow = randInt(MAX_ROWS);
        const randomCol = randInt(MAX_COLS);

        let selectedCell = cells[randomRow][randomCol];

        if (selectedCell.value !== CellValues.Bomb) {
            cells = cells.map((row, rowIndex) => 
                row.map((cell, colIndex) => {
                    if (randomRow === rowIndex && randomCol === colIndex) {
                        return {
                            ...cell,
                            value: CellValues.Bomb
                        };
                    }
                    return cell;
                })
            );

            bombsPlaced++;
        }
    }

    for (let rowIndex = 0; rowIndex < MAX_ROWS; rowIndex++) {
        for (let colIndex = 0; colIndex < MAX_COLS; colIndex++) {
            const currentCell = cells[rowIndex][colIndex];

            if (currentCell.value === CellValues.Bomb) {
                continue;
            }

            let borderBombs = 0;

            const topLeftBomb = rowIndex > 0 && colIndex > 0 ? cells[rowIndex - 1][colIndex - 1] : null;
            const topBomb = rowIndex > 0 ? cells[rowIndex - 1][colIndex] : null;
            const topRightBomb = rowIndex > 0 && colIndex < MAX_COLS - 1 ? cells[rowIndex - 1][colIndex + 1] : null;
            const leftBomb = colIndex > 0 ? cells[rowIndex][colIndex - 1] : null;
            const rightBomb = colIndex < MAX_COLS - 1 ? cells[rowIndex][colIndex + 1] : null;
            const bottomLeftBomb = colIndex > 0 && rowIndex < MAX_ROWS - 1? cells[rowIndex + 1][colIndex - 1] : null;
            const bottomBomb = rowIndex < MAX_ROWS - 1 ? cells[rowIndex + 1][colIndex] : null;
            const bottomRightBomb = rowIndex < MAX_ROWS - 1 && colIndex < MAX_COLS -1 ? cells[rowIndex + 1][colIndex + 1] : null;

            if (topLeftBomb && topLeftBomb.value === CellValues.Bomb) {
                borderBombs++;
            } 
            if (topBomb && topBomb.value === CellValues.Bomb) {
                borderBombs++;
            }
            if(topRightBomb && topRightBomb.value === CellValues.Bomb) {
                borderBombs++;
            }
            if(leftBomb && leftBomb.value === CellValues.Bomb) {
                borderBombs++;
            }
            if(rightBomb && rightBomb.value === CellValues.Bomb) {
                borderBombs++;
            }
            if(bottomLeftBomb && bottomLeftBomb.value === CellValues.Bomb) {
                borderBombs++;
            }
            if(bottomBomb && bottomBomb.value === CellValues.Bomb) {
                borderBombs++;
            }
            if(bottomRightBomb && bottomRightBomb.value === CellValues.Bomb) {
                borderBombs++;
            }

            if (borderBombs > 0) {
                cells[rowIndex][colIndex] = {
                    ...currentCell,
                    value: borderBombs
                }
            }
        }
    }

    return cells;
};