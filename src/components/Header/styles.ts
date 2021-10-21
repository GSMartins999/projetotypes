import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
    display: flex;
    background-color: ${colors.bgblue}; 
    height: 232px;
    border: 2px solid black;
    align-items: center;
    picture{
        background-image: url(/img/logo\ site.png);
        margin-top: 0;
        margin-bottom: 0;
    h1{
        color: white;
        padding: 30px;
        width: 100%;
        font-size: 30px;
        word-spacing: 5px;
        text-align: right;
    }
    }
`