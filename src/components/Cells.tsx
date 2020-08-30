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
`;

export default Cell;