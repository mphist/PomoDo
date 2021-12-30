import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

type LayoutHeaderProps = LayoutProps
type LayoutMainProps = LayoutProps

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
}

Layout.Header = ({ children }: LayoutHeaderProps) => <div>{children}</div>
Layout.Main = (children: ReactNode) => <div>{children}</div>

export default Layout
