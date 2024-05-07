import Profile from "./profile/profile"
import { Outlet , Link } from "react-router-dom"
import "./navbar.css"
import React from "react"
const Navbar = (props) => {
    const[navBtn , setNavBtn] = React.useState(false)

    function Change(){
        setNavBtn(!navBtn)
    }
    return(
        <nav>
            <Profile
                name={props.username}
                position={props.class}
            />
            <section className="scroll"> 
            <button className="button active"><Link className={"link"}to="/">Dashboard</Link></button>
            <button className="button active"><Link className={"link"} to="/addCard">Add user</Link></button>
            <button className="button active"><Link className={"link"}to="/deleteCard">Delete user</Link></button>
                    
                </section>
            <Outlet/>
            {/* <button id="button">Log in</button> */}
        </nav>
        
    )
}
export default Navbar