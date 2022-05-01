import Image from 'next/image'
import Link from 'next/link'
import { PokemonInterface } from '../../templates/Home'
import * as Styled from './styles'

export interface PokemonCardProps {
    pokemon: PokemonInterface
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Styled.Card>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="120"
                height="120"
                alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
            <p>#{pokemon.id}</p>
            <Link href={`/pokemon/${pokemon.id}`}>
                <a>Detalhes</a>
            </Link>
        </Styled.Card>
    )
}
