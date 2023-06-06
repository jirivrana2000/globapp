import data from "../data"
import OneItemCard from "./OneItemCard"
import "../styles/Pizza-Burger-ItemsToOrder-SideDish-Sauces.css"

const ItemsPizza = (oneFood) => {
    return (
        <div className="allFoodContainer">
            {data.map( (oneFood) => {
                if (oneFood.title.includes("Pizza")) {
                    return (
                        <OneItemCard oneFood={oneFood} key={oneFood.id}/>
                    )
                }
            })}
        </div>
    )
}

export default ItemsPizza