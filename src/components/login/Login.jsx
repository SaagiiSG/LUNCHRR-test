import "./login.css"

export default function Login(){
    return(

        <section className="login-background">

        <div className="container">

            <h1 className="header">Access your account</h1>

            <div className="input-el">
                <h3 className="input-label">Name</h3>
                <input type="text" className="input" />
            </div>
            <div className="input-el">
                <h3 className="input-label">surname</h3>
                <input type="password" className="input"/>
            </div>
            <div className="input-el">
                <h3 className="input-label">Password</h3>
                <input type="password" className="input"/>
            </div>
            <div className="input-el">
                <h3 className="input-label">class</h3>
                <input type="password" className="input"/>
            </div>

            <button className="button" id="button">Log in</button>
            
        </div>

</section>
        
    )
}