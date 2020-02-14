import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        transition: all 0.5s;
    }

    html, body, #root, main {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;