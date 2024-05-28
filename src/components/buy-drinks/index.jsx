import "./style.css"
import exit from "../../assets/exit_to_app.svg"
import waterBottle from "../../assets/water-bottle-svgrepo-com.svg"
import juice from "../../assets/juice.svg"
import milk from "../../assets/milk.svg"
import Item from "./item"
export default function Drink(){

    const items = [
        {
            price:2000,
            img:"",
            name:"water"
        },
        {
            price:2000,
            img:"",
            name:"juice"
        },
        {
            price:2500,
            img:"",
            name:"ooha"
        },
        {
            price:1500,
            img:"",
            name:"milk"
        },
        {
            price:20000,
            img:"",
            name:"water bottle"
        },
        {
            price:2500,
            img:"",
            name:"tom kontick"
        },
        {
            price:2500,
            img:"",
            name:"bourbon"
        },
        {
            price:2500,
            img:"",
            name:"hurustic"
        },
        {
            price:2000,
            img:"",
            name:"hi"
        }
    ]
    const cost = 0;
    
    return(
        <section className="drinks">
            <header className="header">Lunchrr</header>

            <div className="drink-buttons">
                {
                    items.map(item =>{
                        return(
                            <Item
                                itemName={item.name}
                                itemImg={item.img}
                                itemPrice={item.price}
                            />
                        )
                    })
                }
            </div>

            <div className="island">
                <p>item cost : {cost}</p>
                <div> <p>proceed payment</p> <img src={exit} alt="" /></div>
            </div>
        </section>
    )
}