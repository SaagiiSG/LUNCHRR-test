import React from "react";
import "./dashboard.css"
import Navbar from "../navbar/navbar"
import MonthSelect from "./dashboard-navbar/month";
import Download from "./download arrow.svg"
import Student from "./student-detail/student";
import Topthree from "./top-three/top-three";
import Current from "./months/thismonth";
import LastMonth from "./months/lastmonth";
import BeforeMonth from "./months/beforeMonth";

function Display(){

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const [date, setDate] = React.useState(new Date())
    let monthName = month[date.getMonth()]
    let lastMonth =month[date.getMonth() - 1]
    let monthBefore = month[date.getMonth() - 2]

    
        const [thisMonth , setThismonth] = React.useState(true)
        const [dislastMonth, setLastmonth] = React.useState(false);
        const [beforeMonth, setBef] = React.useState(false);

        function monthDisplay(){
            setThismonth(true)
            setBef(false)
            setLastmonth(false) 
        }
        function lastMonthDisplay(){
            setLastmonth(true) 
            setThismonth(false)
            setBef(false)
            
        }
        function befDisplay(){
            setThismonth(false)
            setBef(true)
            setLastmonth(false) 
        }
        return(
           
            <section className="table-view">
                <div className="tabel-user">
                
                    <button onClick={befDisplay}>{monthBefore}</button>
                    <button onClick={lastMonthDisplay}>{lastMonth}</button>
                    <button onClick={monthDisplay}>{monthName}</button>


                </div>
                        
                        <div className="main-table">
                            <div className="tabel-header">
                                    <p className="p">Name</p>
                                <div className="tabel-header-info">
                                    <p>Phone number</p>
                                    <p>Payment</p>
                                    
                                </div>
                            </div>
                            <div className="tabel-info">
                                
                                <Current display={thisMonth}/>
                                <LastMonth display={dislastMonth}/>
                                <BeforeMonth display={beforeMonth}/>
                            
                            </div>
                            
                        </div>
            </section>
        )
}


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
            <Display/>
            
            <div className="floating-island">
                <p>Class Total: {props.classTotal}500'000</p>
                <p className="download-el">Download excel sheet <img src={Download}/></p>
            </div>
        </section>
    </section>
            )
    
}