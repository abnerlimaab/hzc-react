import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Open Sans', 'Icones', sans-serif;
    };

    body {
        background-color: #1D232A;
        color: #FFFFFF;
    }

    @media screen and (min-width: 1440px) {
        main {
            padding-top: 12vh !important;
            margin-left: 200px;
        }
    }
`;