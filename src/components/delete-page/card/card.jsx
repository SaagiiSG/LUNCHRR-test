
import React, { useEffect } from "react"
import "./card.css"

export default function Card(props){

    const [card , setCard] = React.useState(false);

    function Change(){
        setCard(!card)
    };
    <React.Fragment>
 <button onClick={Change}   className={`card ${card ? 'active-card':''}`}>
            
    <li  className="name">

        <p>{props.grade}</p>
        <p>{props.name}</p>
        <p>{props.id}</p>
    </li>
    <div className="selector">.</div>

</button></React.Fragment>
    
}