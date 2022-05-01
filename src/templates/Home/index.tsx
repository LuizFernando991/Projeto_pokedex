import Image from 'next/image'
import { LogoTitle } from '../../components/LogoTitle'
import { PokemonCard } from '../../components/PokemonCard'
import * as Styled from './styles'

export type PokemonType = {
    id: number
    name: string
    url: string
}

export type HomeProps = {
    data: Array<PokemonType> | null
}

export function Home({ data }: HomeProps) {
    return (
        <Styled.HomeContainer>
            <Styled.LogoContainer>
                <LogoTitle />
                <Image
                    src="/assets/images/pokeball.png"
                    width="70"
                    height="70"
                    alt="PokeNext"
                />
            </Styled.LogoContainer>
            <Styled.PokemonListContainer>
                {data.map((pokemon) => (
                    <li key={pokemon.id}>
                        <PokemonCard pokemon={pokemon} />
                    </li>
                ))}
            </Styled.PokemonListContainer>
        </Styled.HomeContainer>
    )
}
