import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import { GlobalStyles } from '../styles/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} />
            <GlobalStyles />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
