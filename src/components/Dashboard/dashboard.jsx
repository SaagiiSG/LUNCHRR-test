import React from "react";
import "./dashboard.css"
import Navbar from "../navbar/navbar"
import MonthSelect from "./dashboard-navbar/month";
import Download from "./download arrow.svg"
import Student from "./student-detail/student";
import Topthree from "./top-three/top-three";
// import { 
//     BrowserRouter as Router, 
//     Routes, 
//     Route 
//   } from "react-router-dom"; 
export default function Dashboard(props){
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
    
return(
    <section className="dashboard-container">
        <Navbar username={props.username} class={props.class}/>
                <section className="dashboard">
          <Topthree mealNumber={"128"}
                    totalNumber={"12456789"}
                    studentNumber={"12"}
          />

            <section className="table-view">
                
                <MonthSelect/>
                {/* <Router>
                    <Routes>
                        <Route path="/" element={}/>
                        <Route path="/dashboard/last-month" element={}/>
                    </Routes>
                </Router> */}
                <div className="main-table">
                    <div className="tabel-header">
                            <p className="p">Name</p>
                        <div className="tabel-header-info">
                            <p>Phone number</p>
                            <p>Payment</p>
                            
                        </div>
                    </div>
                    <div className="tabel-info">
                        {
                            users.map((user)=>{
                               return  <Student studentPnumber={user.phone}
                                studentName={user.name}
                                studentPayment={user.payment}
                          /> 
                              
                            })

                        }
                            
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