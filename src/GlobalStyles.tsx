import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        background-color: #000;
        color: #fff;
    }
`;

export default GlobalStyle;
