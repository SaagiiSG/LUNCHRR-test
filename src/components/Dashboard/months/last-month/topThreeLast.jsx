import Topthree from "../../top-three/top-three";
export default function TopThreeLast(props){
        let display = props.display    
    if(display){
        return(
            <Topthree
                mealNumber={props.mealNumber}
                totalNumber={props.totalNumber}
                studentNumber={props.studentNumber}
            />
        )
    }
}