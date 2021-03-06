import { AppProps } from 'next/app'
import Head from 'next/Head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'georgia';
    font-weight: 700;
    src: url('/fonts/georgia/georgia bold.ttf') format(“opentype”);
    font-display: swap;
  }
  body {
    position: relative;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #F2F2F2;
    box-sizing: border-box;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
  }
  body::after {
    content: '';
    display: block;
    height: 243px;
  }
  p {
      margin: unset;
  }
`

const theme = {
    colors: {
        primary: '#09357B',
    },
    breakpoint: {
        sm: '575px',
        md: '767px',
        lg: '991px',
        xl: '1200px',
    },
    layout: {
        width: '1132px',
    },
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <title>The Peaks</title>
                    <meta name="title" content="The Peaks" />
                    <meta name="theme-color" content={theme.colors.primary} />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
