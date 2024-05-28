
import "../style.css"

export default function Item(props){
    return(
        <button>
                    <h3>{props.itemName}</h3>
                    <img src={props.itemImg} className="water" alt="water" />
                    <p>{props.itemPrice}</p>
                </button>
    )
}