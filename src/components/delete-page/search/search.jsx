import "./search.css"
import Icon from "./search.svg"
export default function Search(){

    return(
        <div className="search-bar">
            <input type="text" placeholder="enter name" className="search-bar-input"/>
            <img src={Icon} alt="search icon" />
        </div>
    )
    
}