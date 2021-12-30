import Layout from './components/Layout/Layout'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Layout.Header>
          <NavBar />
        </Layout.Header>
      </Layout>
    </div>
  )
}

export default App
