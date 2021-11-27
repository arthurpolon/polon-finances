import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from '~styles/chakraTheme'

import '@fontsource/poppins/200.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
