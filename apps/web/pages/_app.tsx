import { IBM_Plex_Mono } from '@next/font/google'
import { AppProps } from 'next/app';

// If loading a variable font, you don't need to specify the font weight
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['300'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={ibmPlexMono.className}>
      <Component {...pageProps} />
    </main>
  )
}