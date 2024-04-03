import React from "react";
import "./dashboard.css"
import Navbar from "../navbar/navbar"
import Download from "./download arrow.svg"
import TopThreeCurrent from "./months/this-month/topThreeThis";
import TopThreeBefore from "./months/before-month/topThreeBefore";
import TopThreeLast from "./months/last-month/topThreeLast";
import Current from "./months/this-month/thismonth";
import LastMonth from "./months/last-month/lastmonth";
import BeforeMonth from "./months/before-month/beforeMonth";




export default function Dashboard(props){
    const datas = [
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
        const length = datas.length-1
        const totalmeals = datas[length].payment;
        let mealNum = totalmeals/8000
        const totalStudent = datas.length
        let totalPay = 0;
        for(let i=0 ; i < length ; i++){
            totalPay += datas[i+1].payment
        }

    const [users , setUsers] = React.useState([])
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = (new Date().getMonth());
    const monthBefore = monthNames[monthIndex - 2]
    const lastMonth = monthNames[monthIndex - 1]
    const monthName = monthNames[monthIndex]
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
    <section className="dashboard-container">
        <Navbar username={props.username} class={props.class}/>
        <section className="dashboard">
            {/* <Topthree mealNumber={"128"}
                    totalNumber={"12456789"}
                    studentNumber={"12"}
            /> */}
            <TopThreeCurrent
                display={thisMonth}
                mealNumber={mealNum}
                studentNumber={totalStudent}
                totalNumber={totalPay}
            />
            <TopThreeLast
                display={dislastMonth}
            />
            <TopThreeBefore
                display={beforeMonth}
            />
            
            
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

      
      <div className="floating-island">
          <p>Class Total: {props.classTotal}500'000</p>
          <p className="download-el">Download excel sheet <img src={Download}/></p>
      </div>
  </section>
  </section>            )
    
}
