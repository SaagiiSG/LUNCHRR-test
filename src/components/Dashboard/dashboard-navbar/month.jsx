import React from "react";
import "./month.css"
// import { Outlet , Link } from "react-router-dom"
function MonthSelect(props){
    
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const [date, setDate] = React.useState(new Date())
    let monthName = month[date.getMonth()]
    let lastMonth =month[date.getMonth() - 1]
    let monthBefore = month[date.getMonth() - 2]
    return(
        <div className="tabel-user">
           
            <button>{monthBefore}</button>
            <button>{lastMonth}</button>
            <button>{monthName}</button>


        </div>
    )
}

export default MonthSelect