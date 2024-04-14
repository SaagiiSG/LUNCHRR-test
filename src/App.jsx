
import "./App.css"
import Delete from "./components/delete-page/delete"
import Login from "./components/login/Login"
import Profile from "./components/navbar/profile/profile"
import Add from "./components/add-page/add"
import "./components/login/login.css"
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
          <section className="login-background">

              <div className="container">

                  <h1 className="header">Access your account</h1>

                  <div className="input-container">
                          <div className="input-el">
                              <h3 className="input-label">Email</h3>
                              <input type="text" className="input" />
                          </div>
                          
                          <div className="input-el">
                              <h3 className="input-label">Password</h3>
                              <input type="password" className="input"/>
                          </div>
                          
                  </div>
                  

                  <button className="button" id="button">Log in</button>
                  
              </div>

            </section>
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