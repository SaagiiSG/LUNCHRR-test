
import "./App.css"
import Delete from "./components/delete-page/delete"
import Login from "./components/login/Login"
import Profile from "./components/navbar/profile/profile"
import Dashboard from "./components/Dashboard/dashboard"
// import Read from "./assets/data.js"
import Add from "./components/add-page/add"

import React from "react"
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
import Navbar from "./components/navbar/navbar"
function App() {
  
  const username = "Saran-Ochir"
  const enrolledclass = "11.1"

  return(
    <section>
      {/* <Login/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Navbar username={username} class={enrolledclass}/>}/>
        <Route index element={<Dashboard username={username} class={enrolledclass} />}/>
        <Route path="/addCard" element={<Add  username={username} class={enrolledclass}/>}/>
        <Route path="/deleteCard" element={<Delete  username={username} class={enrolledclass}/>}/>
      </Routes>
  </Router>
  </section>
  )

}

export default App