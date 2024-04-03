import "./.././../dashboard.css"
import Student from "../../student-detail/student";
import { json } from "react-router-dom";
import React from "react";
export default function BeforeMonth(props){
    const display = props.display
    const [users , setUsers] = React.useState([])
    React.useEffect(()=>{
        fetch("../data.json")
        .then(Response => Response.json())
        .then(data => setUsers(data))
        
    },[])

    if(display){
        return(
        <div className="tabel-info">
                          
        { 
        users.map((user)=>{
            return  <Student studentPnumber={user.phone}
               studentName={user.name}
                studentPayment={user.payment}
        /> })
        }
         
         </div>
         )
    }
       
}