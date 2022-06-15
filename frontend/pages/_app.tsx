import '../styles/globals.css'
// import Layout from '../layout/Layout'
import Header from '../components/Header'

function App({ Component, pageProps }) {
  return (
    // <Layout>
    <div>
      <Header></Header>
      <Component {...pageProps} />
    </div>
    // </Layout>
  )
}

export default App
