import { MAX_COLS, MAX_ROWS } from '../constants/index';

enum CellValues {
    Bomb,
    None,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight
};

enum CellStates {
    Untouched,
    Visible,
    Flagged
}

type CellTypes = {
    value: CellValues
    state: CellStates
}

export const generateCells = () => {
    const cells: CellTypes[][] = [];

    for (let row = 0; row < MAX_ROWS; row++) {
        cells.push([]);
        for (let col = 0; col < MAX_COLS; col++) {
            cells[row].push({
                value: CellValues.None,
                state: CellStates.Untouched
            });
        }
    }

    return cells;
};