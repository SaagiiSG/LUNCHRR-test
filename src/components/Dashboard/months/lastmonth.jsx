import "../dashboard.css"
import MonthSelect from "../dashboard-navbar/month"
import Student from "../student-detail/student";

export default function LastMonth(props){
    const users = [ 
        {
            name:"emujin",
            phone:"88163115",
            payment:"16000"
        }
    ]
    let display = props.display;

    if(display){
        return(<section className="tabel-info">
        {
            users.map((user)=>{
               return  <Student studentPnumber={user.phone}
                studentName={user.name}
                studentPayment={user.payment}
          /> 
              
            })

        }
            
    </section>)
    }
       
}