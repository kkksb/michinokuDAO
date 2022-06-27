import { ReactElement } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

