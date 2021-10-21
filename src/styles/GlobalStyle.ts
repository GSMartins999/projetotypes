import {createGlobalStyle} from "styled-components"


export default createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format ('woff2');

    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    body {
    
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;

    }
`

    export const colors = {

        bgblue: 'rgb(28,33,82)',
        white: '#FFFFFF',
        darkcyan: '#008b8b',
        black: '#000000 '

    }
