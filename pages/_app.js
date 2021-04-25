import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
