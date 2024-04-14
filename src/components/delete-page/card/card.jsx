
import React, { useEffect } from "react"
import "./card.css"
import classNames from "classname"
import Trashcan from "../../../assets/delete_outline.svg"
export default function Card(props){

    const [active , isActive] = React.useState(false)

    function Change(){
        isActive(!active)
    }
    
    return(
    
        <button onClick={Change} className="card">
            
                <li  className="name">

                    <p>{props.grade}</p>
                    <p>{props.name}</p>
                    <p>{props.id}</p>
                </li>
                <img className="selector" src={Trashcan}/>
                
            </button>)
 
    
}