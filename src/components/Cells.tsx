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
    isOne: boolean;
    isTwo: boolean;
    isThree: boolean;
    isFour: boolean;
    isFive: boolean;
    isSix: boolean;
    isSeven: boolean;
    isEight: boolean;
};

const Cell: React.FC<CellProps> = ({ row, col, state, value, isUntouched, isOne }) => {
    const renderContents = (): React.ReactNode => {
        if (state === CellStates.Untouched) {
            if (value === CellValues.Bomb) {
                return (
                    <span role='img' aria-label='bomb'>
                        💣
                    </span>
                );
            } else if (value === CellValues.None) {
                return null;
            }

            return value;
        } else if (state === CellStates.Flagged) {
            return (
                <span role='img' aria-label='bomb'>
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

const StyledCell = styled<any>(ShadowContainer)<CellProps>`
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

    border-color: ${(props) => (props.isUntouched ? '#7b7b7b' : '')};
    border-width: ${(props) => (props.isUntouched ? '1px' : '')};

    color: ${(props) => (props.isOne ? 'blue' : '')};
    color: ${(props) => (props.isOne ? 'green' : '')};
    color: ${(props) => (props.isOne ? 'red' : '')};
    color: ${(props) => (props.isOne ? 'purple' : '')};
    color: ${(props) => (props.isOne ? 'maroon' : '')};
    color: ${(props) => (props.isOne ? 'turquoise' : '')};
    color: ${(props) => (props.isOne ? 'black' : '')};
    color: ${(props) => (props.isOne ? 'gray' : '')};
`;

export default Cell;