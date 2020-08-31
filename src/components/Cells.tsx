import React from 'react';
import styled from 'styled-components';
import { ShadowContainer } from './Container';
import { 
    CellStates, 
    CellValues 
} from '../utils';

interface CellProps {
    row: number;
    col: number;
    state: CellStates;
    value: CellValues;
    isUntouched: string;
};

const Cell: React.FC<CellProps> = ({ row, col, state, value, isUntouched }) => {
    const renderContents = (): React.ReactNode => {
        if (state === CellStates.Untouched) {
            if (value === CellValues.Bomb) {
                return (
                    <span role='img' aria-label='bomb'>
                        💣
                    </span>
                );
            }
        } else if (state === CellStates.Flagged) {
            return (
                <span role='img' aria-label='flag'>
                    ⛳
                </span>
            )
        }
        
        return null;
    };

    return (
        <StyledCell>
            { renderContents() }
        </StyledCell>
    );
};

const StyledCell = styled(ShadowContainer)`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        border-right-color: ${({ theme }) => theme.colors.darkGrey};
        border-bottom-color: ${({ theme }) => theme.colors.darkGrey};
        border-left-color: ${({ theme }) => theme.colors.white};
        border-top-color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
        transform: scale(1.1);
    }

    &:untouched {

    }
`;

export default Cell;