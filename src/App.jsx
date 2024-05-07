
import "./App.css"
import Delete from "./components/delete-page/delete"
// import Login from "./components/login/Login"
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
import logout from "./assets/exit_to_app.svg"
import Drink from "./components/buy-drinks"
function Login(props){
  const h = props.display
  console.log(h);
  const [displasState, setDisplas ] = React.useState(h)
  
  function Popp(){
    setDisplas(false)
    if(!displasState){
      console.log("clicked");
    }
  }
  if(props.display || displasState){
    
    return(
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
          

          <button className="button" id="button" onClick={Popp}>Log in</button>
          
      </div>

    </section>
    )
  }else {
    return(
      <></>
    )
  }
  
    
  
}
function App() {
  
  const username = "Saran-Ochir"
  const enrolledclass = "11.1"

  const [logState, setLogState] = React.useState(false)

  function Pop(){
    setLogState(true)
  }
  function Popp(){
    setLogState(false)
  }

  return(
    <section>
            {/* <Login display={logState}/> */}
            {/* <button className="logout-button" onClick={Pop}>Log in<img src={logout} alt="" /></button> */}
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
      // <Drink/>
  )

}

export default App