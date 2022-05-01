import Image from 'next/image'
import Link from 'next/link'

import * as Styled from './styles'

export function AboutTemplate() {
    return (
        <Styled.AboutContainer>
            <h2>PokeNext is a wiki about pokemons!</h2>
            <p>
                Here you can see everything about your pokemons! Enjoy the{' '}
                <Link href="/">
                    <a>site</a>
                </Link>
            </p>
            <Image
                src="/assets/images/charizard.png"
                width="300"
                height="300"
                alt="PokeNext"
            />
        </Styled.AboutContainer>
    )
}
