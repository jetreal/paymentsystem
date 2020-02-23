import styled from 'styled-components';

export const StyledButton = styled.button`
    opacity: ${props => props.isActive !== true ? '1' : '0.2'};
    cursor: ${props => props.isActive !== true ? 'pointer' : 'not-allowed'};
    width: 220px;
    height: 40px;
    background: none;
    color: white;
    font-size: 1.2rem;
    border: 2px green solid;
    border-radius: 6px;
    transition: opacity 1s;
`