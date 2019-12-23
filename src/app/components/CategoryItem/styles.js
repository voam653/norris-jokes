import styled from 'styled-components';

export const Item = styled.li`
    min-width: 150px;
    min-height: 150px;
    margin: 8px;
    border-radius: 6px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 1px 1px 0 rgba(0, 0, 0, 0.16);
    background-color: #eeeeee;
    transition: all 0.5s ease-out;

    :hover {
        background-color: #e0e0e0;
        box-shadow: 0 0 2px 2px rgba(0,0,0,0.07), 0 2px 2px 0 rgba(0,0,0,0.16);
    }
`

export const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 16px;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #00c1eb;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 20px;
    transition: all 0.3s ease-out;

    ${Item}:hover & {
        font-weight: 600;
        color: #ff356d;
    }
`