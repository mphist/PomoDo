import { RecoilRoot } from 'recoil'
import Body from './components/Body/Body'
import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import { TaskContextProvider } from './contexts/TaskContext'

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <TaskContextProvider>
          <Layout>
            <Layout.Aside>
              <NavBar />
              <SideBar />
            </Layout.Aside>
            <Layout.Main>
              <Body />
            </Layout.Main>
          </Layout>
        </TaskContextProvider>
      </RecoilRoot>
    </div>
  )
}

export default App
