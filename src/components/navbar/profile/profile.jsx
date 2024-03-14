 import "./profile.css"
 
 export default function Profile(props){
    return(
        <section className="profile">  
            <h1 className="user-name">{props.name}</h1>
            <h3 className="user-position">{props.position}</h3>
        </section>
    )
 }