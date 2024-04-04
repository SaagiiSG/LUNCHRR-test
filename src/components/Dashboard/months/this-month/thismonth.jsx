import "../../dashboard.css"

import React from "react"
import Student from "../../student-detail/student";
// import users from "../../data";

export default function Current(props){
    const display = props.display
    const [users , setUsers] = React.useState([])
    React.useEffect(() => {
        data();
    }, [])

    const data = async () => {
        await fetch(`http://localhost:8080/userName`,{
            method:'get',
            headers:{
            "Content-Type":"application/json"
        }
        })
        .then(response => response.json())
        .then(data => {setUsers(data)}) 
        
    }
    if(display){
        return(
            <div className="tabel-info">
                          
            {
            users.map((user)=>{
                     return ( user.class ==  10) ? (
                              <Student studentPnumber={user.phone}
                   studentName={user.name}
                    studentPayment={user.payment}
                             />  ):( 
                    <h1 className="none">none</h1>
                   )
                })
                   }
             
             </div>

        )
    }
        
    }



// 🎶🎂 have a good fucking day

