import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

type LayoutHeaderProps = LayoutProps
type LayoutMainProps = LayoutProps
type LayoutAsideProps = LayoutProps

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
}

Layout.Header = ({ children }: LayoutHeaderProps) => <div>{children}</div>
Layout.Main = ({ children }: LayoutMainProps) => <div>{children}</div>
Layout.Aside = ({ children }: LayoutAsideProps) => (
  <aside className='bg-white w-24 flex flex-col items-center h-screen'>
    {children}
  </aside>
)

export default Layout
