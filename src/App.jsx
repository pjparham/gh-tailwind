import './App.css'
import Nav from './components/Nav'
import RepoStats from './components/RepoStats'
import RepoNav from './components/RepoNav'


function App() {

  return (
    <div className="text-gray-900 text-sm">
      <Nav/>
      <RepoStats/>
      <RepoNav/>
    </div>
  )
}

export default App
