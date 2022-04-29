import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 35px 35px 0 0;
    margin-top: -40px;
`
