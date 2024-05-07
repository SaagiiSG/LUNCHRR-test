import "./style.css"
import exit from "../../assets/exit_to_app.svg"




export default function Drink(){
    const cost = 2500;

    return(
        <section className="drinks">
            <header className="header">Lunchrr / Drinks</header>

            <div className="drink-buttons">
                <button>
                    <h3>Water</h3>
                    <img src="" alt="water" />
                    <p>2500</p>
                </button>

                <button>
                    <h3>Juice</h3>
                    <img src="" alt="juice" />
                    <p>2500</p>
                </button>

                <button>
                    <h3>Milk</h3>
                    <img src="" alt="milk" />
                    <p>2500</p>
                </button>
            </div>

            <div className="island">
                <p>item cost : {cost}</p>
                <div> <p>proceed payment</p> <img src={exit} alt="" /></div>
            </div>
        </section>
    )
}