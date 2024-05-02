import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type ReactProps = {
  children?: ReactNode
  theme?: string
}

const Layout = ({ children }: ReactProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
