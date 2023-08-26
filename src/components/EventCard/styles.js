import styled, { css } from 'styled-components'

export const Card = styled.div`
    width: 15rem;
    height: 20rem;
    background-color: ${props => props.dataJaPassou ? "red" : "white"};
    border-radius: 10px;
    box-shadow: 0 0 5px gray;

    h2 {
        color: ${props => props.theme.blue_900};    
    }

    img {
        width: 100%;
        height: 50%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .infos-evento {
        padding: 0.5rem;
    }

    ${(props) => props.dataJaPassou && css`
        display: none
    `}

    &:hover {
        transform: scale(1.03)
    }
`

export const CardCarrosel = styled(Card)`
    width: 25rem;
`