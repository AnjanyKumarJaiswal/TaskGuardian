import {Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Teams from "./pages/teams"
import Messages from "./pages/Messages"
// import Profile from "./pages/profile"
// import Projects from "./pages/projects"

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/messages' element={<Messages/>}/>
          {/* <Route path='/profile' element={<Profile/>}/> */}
          {/* <Route path='/projects' element={<Projects/>}/> */}
      </Routes>
    </>
  )
}

export default App
