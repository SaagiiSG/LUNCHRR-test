import Topthree from "../../top-three/top-three";
import users from "../data.json";
export default function TopThreeBefore(props){
    // const users = [
    //     {
    //         name:"SaranOchir",
    //         phone:"88163115",
    //         id:1,
    //         payment:16000
    //     },
    //     {
    //         name:"Tuguldur",
    //         phone:"88163115",
    //         id:2,
    //         payment:24000
    //     },
    //     {
    //         name:"Emujin",
    //         phone:"88163115",
    //         id:3,
    //         payment:32000
    //     },
    //     {
    //         name:"Odgerel",
    //         phone:"12345678",
    //         id:"4",
    //         payment:128000
    //     }


    
        const length = users.length;
        const totalmeals = users.payment;
        let mealNum = totalmeals/8000;
        const totalStudent = users.length;
        let totalPay = 0;
        for(let i=0 ; i < length ; i++){
            totalPay += users[i+1].payment
        }
        let display = props.display    
    if(display){
        return(
            <Topthree
                mealNumber={mealNum}
                totalNumber={totalPay}
                studentNumber={totalStudent}
            />
        )
    }
}