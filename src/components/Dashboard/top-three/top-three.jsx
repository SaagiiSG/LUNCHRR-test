import "../dashboard.css"


export default function Topthree(props){
    return(
        <div className="top-three">
                <div className="info-el this-month">
                    <p>This month:</p>
                    <h1>{props.mealNumber} meal</h1>
                </div>
                <div className="info-el total">
                    <p>Total:</p>
                    <h1>{props.totalNumber}₮</h1>
                </div>
                <div className="info-el avarage-student">
                    <p>Avarage student:</p>
                    <h1>{props.studentNumber} student</h1>
                </div>
           </div>
    )
}