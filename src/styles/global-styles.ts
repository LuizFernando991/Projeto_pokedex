import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.font.family.default};
        background: rgb(165,102,254);
        background: linear-gradient(29deg, rgba(165,102,254,1) 0%, rgba(214,6,6,1) 100%);

    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.font.family.secondary};
        margin: ${({ theme }) => theme.spacings.large} 0;
    }

    ul, ol {
        margin: ${({ theme }) => theme.spacings.medium};
        padding: ${({ theme }) => theme.spacings.medium};
    }

    a {
        text-decoration: none;
    }
    body::-webkit-scrollbar {
        width: 8px;
    }
    body::-webkit-scrollbar-track {
        background: #7a7a7a;
        padding: 1px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        //background: linear-gradient(29deg, rgba(214,6,6,1) 0%, rgba(165,102,254,1) 100%);
        border-radius: 3px;
        //border: 1px solid #333333

    }

`
