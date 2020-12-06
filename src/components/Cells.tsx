import React from 'react';
import styled from 'styled-components';
import { ShadowContainer } from './Container';
import { CellStates, CellValues } from '../utils';

interface CellProps {
    row?: number;
    col?: number;
    state?: CellStates;
    value?: number;
    isUntouched: string;
};

const handleColor = (value: number) => {
    switch(value) {
        case 1: 
            return 'blue';
        case 2:
            return 'green';
        case 3: 
            return 'red';
        case 4: 
            return 'purple';
        case 5: 
            return 'maroon';
        default: 
            return 'black';
    }
}

const Cell: React.FC<CellProps> = ({ 
    row, 
    col, 
    state, 
    value, 
    isUntouched,
    ...props
}) => {
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
        <StyledCell value={value} {...props}>
            {renderContents()}
        </StyledCell>
    );
};

const StyledCell = styled<any>(ShadowContainer)<CellProps>`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.1);
    }

    ${({ theme, isUntouched }): string | undefined => isUntouched &&`
        border-color: ${theme.colors.darkGray};
        border-width: '1px';

        &:active {
            border-right-color: ${theme.colors.darkGrey};
            border-bottom-color: ${theme.colors.darkGrey};
            border-left-color: ${theme.colors.white};
            border-top-color: ${theme.colors.white};
        }
    `};

    ${({ theme, value }): string => `
        color: ${handleColor(value)};
    `};
`;

export default Cell;