import styled from 'styled-components'

export const NavContainer = styled.nav`
    width: 100%;
    height: 90px;
    background-color: transparent;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    ul li a {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.font.sizes.medium};
        margin-left: 20px;
    }

    ul li {
        transform: scale(0.9);
        transition: all ease-in 0.2s;
    }

    ul li:hover {
        transform: scale(1);
    }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
