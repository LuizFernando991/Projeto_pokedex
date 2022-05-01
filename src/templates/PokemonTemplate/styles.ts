import styled from 'styled-components'

export const PokemonContainer = styled.div`
    height: 100vh;
    margin: 0 auto;
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    padding: 1em 2em;
    border-radius: 20px;
`

export const InfoContainer = styled.div`
    width: 70%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    width: 100%;

    h1 {
        margin-right: 10px;
        font-size: ${({ theme }) => theme.font.sizes.huge};
    }
`

export const Info = styled.div`
    width: 50%;
    height: 400px;
    padding: 10px 40px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-shadow: 1px 0 0 #f1f1f1, -1px 0 0 #f1f1f1, 0 1px 0 #f1f1f1,
        0 -1px 0 #f1f1f1, 1px 1px #f1f1f1, -1px -1px 0 #f1f1f1,
        1px -1px 0 #f1f1f1, -1px 1px 0 #f1f1f1;
    h1 {
        border-radius: 5px;
        font-size: ${({ theme }) => theme.font.sizes.large};
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.secondaryColor};
    }
`
export const PokemonTypesContainer = styled.div`
    margin-top: 70px;
    text-shadow: none;

    .type {
        padding: 0.6em 1em;
        color: #fff;
        background-color: #000;
        margin-right: 0.5em;
        border: 1px solid #ccc;
        border-radius: 6px;
        text-transform: uppercase;
        font-size: 0.8em;
    }
    .type_normal {
        background-color: #aa9;
    }

    .type_fire {
        background-color: #f42;
    }

    .type_water {
        background-color: #39f;
    }

    .type_eletric {
        background-color: #fc3;
    }

    .type_grass {
        background-color: #7c5;
    }

    .type_ice {
        background-color: #6cf;
    }

    .type_fighting {
        background-color: #b54;
    }

    .type_poison {
        background-color: #a59;
    }

    .type_ground {
        background-color: #db5;
    }

    .type_flying {
        background-color: #89f;
    }

    .type_psychic {
        background-color: #f59;
    }

    .type_bug {
        background-color: #ab2;
    }

    .type_rock {
        background-color: #ba6;
    }

    .type_ghost {
        background-color: #66b;
    }

    .type_dragon {
        background-color: #76e;
    }

    .type_dark {
        background-color: #754;
    }

    .type_steel {
        background-color: #aab;
    }

    .type_fairy {
        background-color: #e9e;
    }
`
