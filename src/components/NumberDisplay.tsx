import React from 'react';
import styled from 'styled-components';

import { Container } from './Container';

interface NumberDisplayProps {
    score: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ score }) => {
    return (
        <Display>
            { score.toString().padStart(3, '0') }
        </Display>
    );
};

const Display = styled(Container)`
    border-width: 0px;
    width: 80px;
    height: 48px;
    color: ${({ theme }) => theme.colors.red};
    background: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 40px;
`;

export default NumberDisplay;