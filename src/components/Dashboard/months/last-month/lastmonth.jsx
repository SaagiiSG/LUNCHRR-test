import "./.././../dashboard.css"
import Student from "../../student-detail/student";
import Topthree from "../../top-three/top-three";

export default function LastMonth(props){
    const display = props.display

    const users = [ 
        {
            name:"emujin",
            phone:"88163115",
            payment:"24000"
        }
    ]
    if(display){return(
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
