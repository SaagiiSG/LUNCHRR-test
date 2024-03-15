import "./add.css"
import Navbar from "../navbar/navbar";
import React, {useState} from "react";

const Add = (props) => {
    const [userName, setUserName] = useState("")
    const [userSurname, setUserSurName] = useState("")
    const [userClass, setUserClass] = useState("")
    const [userPhone, setUserPhone] = useState("")
    function handleForm(event){
        event.preventDefault()
        let userData = {    
            names : userName,
            surname : userSurname,
            angi : userClass,
            phone : userPhone
        }
        fetch("http://localhost:8080/userName/add",{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        .then(response=>response.json())
        .then(data =>{
            console.log(data)
        })
        console.log("click")
      }
    return(
        <section className="add-page-container">
            <Navbar username={props.username} class={props.class}/>
        <section className="add-page">
                        <h1>Add user</h1>
                <form onSubmit={handleForm}>

                <div>
                    <label htmlFor="">name</label>
                    <input type="text" placeholder="enter name" onChange={e=>setUserName(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="">surname</label>
                    <input type="text" placeholder="enter surname" onChange={e=>setUserSurName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">class</label>
                    <input type="text" placeholder="enter class " onChange={e=>setUserClass(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">phone number</label>
                    <input type="text" placeholder="enter phone number" onChange={e=>setUserPhone(e.target.value)}/>
                </div>

                        <button>Add user</button>
                    </form>
                        
                    </section>
            </section>)
        
    
    }
export default Add