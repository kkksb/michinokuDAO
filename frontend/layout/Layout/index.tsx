import { ReactElement } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

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

