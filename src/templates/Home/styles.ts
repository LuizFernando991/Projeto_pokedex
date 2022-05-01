import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #f1f1f1;
    border-radius: 20px 20px 0 0;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    h1 {
        margin-right: 10px;
        font-size: ${({ theme }) => theme.font.sizes.huge};
    }
`

export const PokemonListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    li {
        width: 23%;
    }
`
