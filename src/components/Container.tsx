import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Quicksand', sans-serif;
    border-width: 4px;
    border-style: solid;
`;

export const ShadowContainer = styled.div`
    font-family: 'Quicksand', sans-serif;
    border-width: 4px;
    border-style: solid;
    border-right-color: ${({ theme }) => theme.colors.white};
    border-bottom-color: ${({ theme }) => theme.colors.white};
    border-left-color: ${({ theme }) => theme.colors.darkGrey};
    border-top-color: ${({ theme }) => theme.colors.darkGrey};
`;