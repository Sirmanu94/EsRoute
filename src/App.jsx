import Counter from "./Components/Counter"
import ShowGitHubUsers from "./Components/ShowGitHubUsers"
import Welcome from "./Components/Welcome"
import "./App.css"
import {Routes, Route, Link} from "react-router-dom"
import GitHubUserList from "./Components/GitHubUserList"

function App() {
  return (
    <>
      <nav className="navbar">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/counter">Counter Element</Link>
        <Link className="link" to="/users">GitHub Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name=" Mario" />}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/users" element={<GitHubUserList/>}>   
          <Route index element={<div><h2>Aggiungi un utente e selezionalo</h2></div>} />
        </Route>
        <Route path="/users/:username" element={<ShowGitHubUsers/>}></Route>
        <Route path="*" element={<div className="pnf-container"><p className="pnf">Page not Found</p></div>}></Route>
      </Routes>
    </>
  )
}

export default App
