import { useRouter } from 'next/router'
import axios from 'axios'
import { api } from '../../helpers/api'
import { PokemonType } from '../../templates/Home'
import {
    PokemonTemplate,
    PokemonTemplateProps,
} from '../../templates/PokemonTemplate'

export default function Pokemon({ pokemon }: PokemonTemplateProps) {
    const router = useRouter()

    if (router.isFallback) {
        return (
            <div
                style={{
                    height: '100vh',
                    fontSize: '2em',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: '200px',
                }}
            >
                Carregando...
            </div>
        )
    }
    return <PokemonTemplate pokemon={pokemon} />
}

export const getStaticPaths = async () => {
    const maxPokemons = 400
    const { data } = await axios.get(`${api}/?limit=${maxPokemons}`)
    let paths
    if (data) {
        paths = data.results.map((_item: PokemonType, index: number) => {
            return {
                params: {
                    pokemonId: (index + 1).toString(),
                },
            }
        })
    } else {
        paths = null
    }

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId

    const { data } = await axios.get(`${api}/${id}`)
    const pokemon = {
        id: data.id,
        height: data.height,
        name: data.name,
        weight: data.weight,
        types: data.types,
    }

    return {
        props: {
            pokemon: pokemon,
        },
    }
}
