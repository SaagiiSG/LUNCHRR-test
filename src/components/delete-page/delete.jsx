import "./delete.css"

import Navbar from "../navbar/navbar"
import ButtonMain from "../mainButton/buttonMain"
import Search from "./search/search"
import Card  from "./card/card"
import React, { useEffect } from "react"    
   

const Delete = (props) => {

            const [users , setUsers] = React.useState([])

            useEffect(() => {
                data();
            }, [])
            const data = async () => {
                await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => setUsers(json))
                .catch((err) => {
                    console.log(err)
                })
            }
            // console.log(users);
            return( 
            <section className="delete-page">
                <Navbar username={props.username} class={props.class}/>
            <section className="main">
                <Search/>
                    <section className="display">
                    
                        {users.map((user) =>   
                           
                                <Card
                                    key={user.id}
                                    id={user.id}
                                    grade={user.name}
                                    name={user.username}
                                />
                           
                            
                        )}

                    </section>
                
                <section className="button-container">

                    <ButtonMain buttonname={"Delete user"}/>

                </section>
                
            </section>
        </section>)
           
}
export default Delete;