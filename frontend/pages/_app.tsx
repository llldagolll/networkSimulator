import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'styles/styles.css'
import 'styles/node.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
