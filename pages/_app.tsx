import '../styles/globals.css'
import "next-js-suggest-input/build/react-tag-input.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
