import type { NextPageWithLayout } from 'next'
import Home from '../components/Home/Home'
import { Layout } from '../layout/Layout'

const Main: NextPageWithLayout = () => <Home />

Main.getLayout = (page) => <Layout>{page}</Layout>

export default Main