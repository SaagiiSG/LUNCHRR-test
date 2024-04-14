import React from "react";
import "../dashboard.css"
import Navbar from "../../navbar/navbar";
import Download from "../download arrow.svg"
import Topthree from "../top-three/top-three";
import DashNav from "../dashNav";
import Student from "../student-detail/student"

export default function LastMonth(props) { 
    
    const [users , setUsers] = React.useState([{}])
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
    let filteredUsers = [{}];
for(let i = 0 ; i<users.length; i++){

    if(users[i].class === 10){
       filteredUsers.push(users[i])
    }
}
    console.log(filteredUsers)
    const datas = filteredUsers 
    console.log(datas.length)
        const length = datas.length-1
        const totalmeals = datas[length].payment;
        let mealNum = totalmeals/8000
        const totalStudent = datas.length-1
        let totalPay = 0;
        for(let i=0 ; i < length ; i++){
            totalPay += datas[i+1].payment
        }

    return(
    <section className="dashboard-container">
        <Navbar username={props.username} class={props.class}/>
        <section className="dashboard">
            <Topthree/>
            
            
    <section className="table-view">
        <DashNav/>
                
                <div className="main-table">
                    <div className="tabel-header">
                            <p className="p">Name</p>
                        <div className="tabel-header-info">
                            <p>Phone number</p>
                            <p>Payment</p>
                            
                        </div>
                    </div>
                    <div className="tabel-info">
                    
                          
                   
                        <Student studentPnumber={88163115}
                                 studentName={"Saran-Ochir"}
                                  studentPayment={1}
                        />  
                     
              
                    
                    
                    </div>
                    
                </div>
    </section>

    
    <div className="floating-island">
        <p>Class Total: {props.classTotal}500'000</p>
        <p className="download-el">Download excel sheet <img src={Download}/></p>
    </div>
</section>
</section>            
)
    
}