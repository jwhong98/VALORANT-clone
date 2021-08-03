import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? "#FF4655" : "#ECE8E1")};
    white-space: nowrap;
    text-decoration: none;
    padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
    color: ${({dark}) => (dark ? "#010606" : "#ECE8E1")};
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    outline: ${({lightBg}) => (lightBg ? 'rgba(146, 143, 139, 0.5)' : 'rgba(236, 232, 225, 0.5)')}  solid 1px;
    outline-offset: 5px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: ${({dark}) => (dark ? "#ECE8E1" : "" )};
    }
`