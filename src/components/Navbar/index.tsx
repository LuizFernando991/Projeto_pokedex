import Link from 'next/link'
import Image from 'next/image'
import { LogoTitle } from '../LogoTitle'

import * as Styled from './styles'

export function Navbar() {
    return (
        <Styled.NavContainer>
            <Link href="/">
                <a>
                    <Styled.LogoContainer>
                        <Image
                            src="/assets/images/pokeball.png"
                            width="30"
                            height="30"
                            alt="PokeNext"
                        />
                        <LogoTitle />
                    </Styled.LogoContainer>
                </a>
            </Link>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </Styled.NavContainer>
    )
}
