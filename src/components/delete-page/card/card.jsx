
import React, { useEffect } from "react"
import "./card.css"
import classNames from "classnames"
export default function Card(props){

    const [active , isActive] = React.useState(false)

    function Change(){
        isActive(!active)
    }

    return(
    
        <button onClick={Change} className={classNames('card' , {'activecard':isActive})}>
            
                <li  className="name">

                    <p>{props.grade}</p>
                    <p>{props.name}</p>
                    <p>{props.id}</p>
                </li>
                <div className="selector">.</div>

            </button>)
 
    
}