import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Layout.Aside>
          <NavBar />
          <SideBar />
        </Layout.Aside>
      </Layout>
    </div>
  )
}

export default App
