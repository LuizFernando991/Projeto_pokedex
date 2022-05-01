import styled from 'styled-components'

export const TitleContainer = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    margin-left: 5px;
    text-shadow: ${({ theme }) =>
        `2px 0 0 ${theme.colors.secondaryColor}, -2px 0 0${theme.colors.secondaryColor}, 0 2px 0 ${theme.colors.secondaryColor},
        0 -2px 0 ${theme.colors.secondaryColor}, 1px 1px ${theme.colors.secondaryColor}, -1px -1px 0 ${theme.colors.secondaryColor},
        1px -1px 0 ${theme.colors.secondaryColor}, -1px 1px 0 ${theme.colors.secondaryColor}`};
    span {
        color: ${({ theme }) => theme.colors.secondaryColor};
        text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
            1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    }
`
