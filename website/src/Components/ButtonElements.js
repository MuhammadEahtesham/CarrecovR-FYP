import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'lightblue' : '#010606')};
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ? 'black' : 'white')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    display:

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? 'black' : 'black')};
    }
`