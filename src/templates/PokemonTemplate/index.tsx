import Image from 'next/image'
import { LogoTitle } from '../../components/LogoTitle'
import * as Styled from './styles'

export type PokemonTemplateType = {
    id: number
    name: string
    weight: number
    height: number
    types: [
        {
            slot: string
            type: {
                name: string
                url: string
            }
        },
    ]
}

export type PokemonTemplateProps = {
    pokemon: PokemonTemplateType
}

export function PokemonTemplate({ pokemon }: PokemonTemplateProps) {
    return (
        <>
            <Styled.PokemonContainer>
                <Styled.LogoContainer>
                    <LogoTitle />
                    <Image
                        src="/assets/images/pokeball.png"
                        width="70"
                        height="70"
                        alt="PokeNext"
                    />
                </Styled.LogoContainer>
                <Styled.InfoContainer>
                    <Image
                        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                        width="240"
                        height="240"
                        alt={pokemon.name}
                    />
                    <Styled.Info>
                        <h1>{pokemon.name}</h1>
                        <div>
                            <h3>
                                Index: <span>{pokemon.id}</span>
                            </h3>
                            <p>Height: {pokemon.height * 10} cm</p>
                            <p>weight: {pokemon.height / 10} kg</p>
                        </div>
                        <Styled.PokemonTypesContainer>
                            {pokemon.types.map((item, index) => (
                                <span
                                    className={`type_${item.type.name} type`}
                                    key={index}
                                >
                                    {item.type.name}
                                </span>
                            ))}
                        </Styled.PokemonTypesContainer>
                    </Styled.Info>
                </Styled.InfoContainer>
            </Styled.PokemonContainer>
        </>
    )
}
