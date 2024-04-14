import React from "react";
import "../dashboard.css"
import Navbar from "../../navbar/navbar";
import Download from "../download arrow.svg"
import Topthree from "../top-three/top-three";
import DashNav from "../dashNav";
import Student from "../student-detail/student"

export default function LastMonth(props) { return(
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