import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em;
    margin-bottom: 2em;
    border-radius: 1em;
    border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};

    p {
        margin: 1em 0;
        background-color: ${({ theme }) => theme.colors.secondaryColor};
        border-radius: 5px;
        padding: 5px;
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        text-transform: capitalize;
        margin-bottom: 1em;
        font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    a {
        background-color: ${({ theme }) => theme.colors.white};
        color: #222;
        padding: 0.7em 1.2em;
        border-radius: 5px;
        transform: scale(0.95);
        font-weight: bold;
        transition: all ease-in 0.2s;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondaryColor};
            transform: scale(1);
            color: ${({ theme }) => theme.colors.white};
        }
    }
`
