
import "./App.css"
import Delete from "./components/delete-page/delete"
import Login from "./components/login/Login"
import Profile from "./components/navbar/profile/profile"
import Add from "./components/add-page/add"

import React from "react"
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
import Navbar from "./components/navbar/navbar"
import CurrentDashBoard from "./components/Dashboard/dashboards/current-dashboard"
import LastMonth from "./components/Dashboard/dashboards/lastDashboard"
import BeforeDashBoard from "./components/Dashboard/dashboards/before-month"
function App() {
  
  const username = "Saran-Ochir"
  const enrolledclass = "11.1"

  return(
    <section>
      {/* <Login/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Navbar username={username} class={enrolledclass}/>}/>
        <Route index element={<CurrentDashBoard username={username} class={enrolledclass} />}/>
        <Route path="/addCard" element={<Add  username={username} class={enrolledclass}/>}/>
        {/* <Route path="/login"element={<Login  />} /> */}
        <Route path="/deleteCard" element={<Delete  username={username} class={enrolledclass}/>}/>
        <Route path="/dashboard/current-month" element={<CurrentDashBoard username={username} class={enrolledclass}/>}/>
        <Route path="/dashboard/last-month" element={<LastMonth username={username} class={enrolledclass}/>}/>
        <Route path="/dashboard/prior-to-last-month" element={<BeforeDashBoard username={username} class={enrolledclass}/>}/>
      </Routes>
  </Router>
  </section>
  )

}

export default App