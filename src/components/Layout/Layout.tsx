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
  <main className='w-full bg-[#ffedda]'>{children}</main>
)
Layout.Aside = ({ children }: LayoutAsideProps) => (
  <aside className='bg-[#ff5c58] w-80 flex flex-col min-h-screen border-r-[#000] border-r-[2px]'>
    {children}
  </aside>
)

export default Layout
