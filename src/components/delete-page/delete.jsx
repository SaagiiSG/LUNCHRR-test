import "./delete.css"

import Navbar from "../navbar/navbar"
import ButtonMain from "../mainButton/buttonMain"
import Search from "./search/search"
import Card  from "./card/card.jsx"
import "./card/card.css"
import React, { useEffect } from "react"    
   

const Delete = (props) => {
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

            return( 
            <section className="delete-page">
                <Navbar username={props.username} class={props.class}/>
            <section className="main">
                <Search/>
                    <section className="display">
                    
                        {
                            users.map(user=>(
                             <Card
                                key={user.id}
                                id={user.id}
                                grade={user.grade}
                                name={user.name}
                            />
                            ))
                        }
                        <Card 
                            grade={"11.1"}
                            name={"Saran-Ochir"}/>
                           
                               
                               
                       

                    </section>
                
                <section className="button-container">

                    {/* <ButtonMain buttonname={"Delete user"}/> */}

                </section>
                
            </section>
        </section>)
           
}
export default Delete;