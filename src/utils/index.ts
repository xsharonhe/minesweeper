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

function randInt(int: number): number {
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

    return cells;
};