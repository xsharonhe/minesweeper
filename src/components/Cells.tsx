import React from 'react';
import styled from 'styled-components';
import { ShadowContainer } from './Container';

const Cell: React.FC = () => {
    return (
        <StyledCell/>
    );
};

const StyledCell = styled(ShadowContainer)`
    width: 30px;
    height: 30px;

    &:active {
        border-right-color: ${({ theme }) => theme.colors.darkGrey};
        border-bottom-color: ${({ theme }) => theme.colors.darkGrey};
        border-left-color: ${({ theme }) => theme.colors.white};
        border-top-color: ${({ theme }) => theme.colors.white};
    }
`;

export default Cell;