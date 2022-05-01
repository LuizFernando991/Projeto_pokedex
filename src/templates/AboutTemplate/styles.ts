import styled from 'styled-components'

export const AboutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #f1f1f1;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    h2 {
        background: linear-gradient(
            35deg,
            rgba(218, 103, 255, 1) 0%,
            rgba(214, 6, 6, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        padding: 2px;
    }

    p {
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-size: medium;
        font-weight: bold;
    }

    p a {
        color: ${({ theme }) => theme.colors.primaryColor};
    }

    p a:hover {
        color: ${({ theme }) => theme.colors.secondaryColor};
    }
`
