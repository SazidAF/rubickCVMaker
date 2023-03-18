import styled from "styled-components";
import { Link } from "react-scroll";
import {Link as LinkR} from 'react-router-dom';

export const MyButton = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#F5E9CF' :  '#4D455D')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' :  '12px 30px')};
    color: ${({dark}) => (dark ? '#4D455D' :  '#F5E9CF')};
    font-size: ${({fontBig}) => (fontBig ? '20px' :  '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    transition: all 0.2s ease-in-out;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F5E9CF' :  '#E96479')}; 
        color: #F5E9CF;
    }
    
`


export const MyButton2 = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#E96479' :  '#4D455D')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' :  '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' :  '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' :  '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    transition: all 0.2s ease-in-out;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F5E9CF' :  '#E96479')};
        color: #000;     
    }
    
`