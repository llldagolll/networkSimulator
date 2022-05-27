import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import 'src/styles/node.css'
import 'src/styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
