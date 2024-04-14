import React from "react";
import "../Dashboard/dashboard.css"
import { Outlet , Link } from "react-router-dom"
export default function DashNav(){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = (new Date().getMonth());
    const monthBefore = monthNames[monthIndex - 2]
    const lastMonth = monthNames[monthIndex - 1]
    const monthName = monthNames[monthIndex]
    return(
        <div className="tabel-user">
        
            <button><Link className="link" to="/dashboard/prior-to-last-month">{monthBefore}</Link></button>
            <button><Link className="link" to="/dashboard/last-month">{lastMonth}</Link></button>
            <button><Link className="link" to="/dashboard/current-month">{monthName}</Link></button>
     


        </div>
    )
}