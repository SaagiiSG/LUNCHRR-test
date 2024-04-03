import "../../dashboard.css"

import React from "react"
import Student from "../../student-detail/student";
// import users from "../../data";

export default function Current(props){
    const display = props.display

    const users = [
        {
            name:"SaranOchir",
            phone:"88163115",
            id:1,
            payment:16000
        },
        {
            name:"Tuguldur",
            phone:"88163115",
            id:2,
            payment:24000
        },
        {
            name:"Emujin",
            phone:"88163115",
            id:3,
            payment:32000
        },

    ]
    
    if(display){
        return(
            <div className="tabel-info">
                          
            { users.map((user)=>{
                return  <Student studentPnumber={user.phone}
                   studentName={user.name}
                    studentPayment={user.payment}
                   /> })}
             
             </div>

        )
    }
        
    }



// 🎶🎂 have a good fucking day

