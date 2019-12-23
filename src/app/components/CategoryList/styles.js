import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 16px;
    margin: 0;
    list-style: none;

    @media(max-width: 600px) {
        justify-content: center;
    }
`