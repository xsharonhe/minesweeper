import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Quicksand', sans-serif;
    border-width: 4px;
    border-style: solid;
`;

export const ShadowContainer = styled.div`
    font-family: 'Quicksand', sans-serif;
    border: 4px solid;
    ${({ theme }): string => `
        border-right-color: ${theme.colors.white};
        border-bottom-color: ${theme.colors.white};
        border-left-color: ${theme.colors.darkGrey};
        border-top-color: ${theme.colors.darkGrey};
    `};
`;