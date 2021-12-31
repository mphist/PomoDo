import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

type LayoutHeaderProps = LayoutProps
type LayoutMainProps = LayoutProps
type LayoutAsideProps = LayoutProps

function Layout({ children }: LayoutProps) {
  return <div className='flex'>{children}</div>
}

Layout.Header = ({ children }: LayoutHeaderProps) => <div>{children}</div>
Layout.Main = ({ children }: LayoutMainProps) => (
  <main className='w-full'>{children}</main>
)
Layout.Aside = ({ children }: LayoutAsideProps) => (
  <aside className='bg-primary w-28 flex flex-col items-center h-screen'>
    {children}
  </aside>
)

export default Layout
