import '@myproject/styles/globals.css'
import Layout from '@myproject/components/Layout'
import { StateContext } from '@myproject/context/StateContext'


export default function App({ Component, pageProps }) {

  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  ) 
}

