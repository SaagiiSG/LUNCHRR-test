import "../dashboard.css"
export default function Student(props){
    return(
        
            <div className="student">
                            <p>{props.studentName}</p>
                        <div className="student-detail">
                            <p>{props.studentPnumber}</p>
                            <p>{props.studentPayment}</p>
                        
                        </div>
            </div>
   
    )
}