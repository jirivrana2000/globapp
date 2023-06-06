import data from "../data"
import OneItemCard from "./OneItemCard"
import "../styles/Pizza-Burger-ItemsToOrder-SideDish-Sauces.css"

const ItemsToOrder = () => {
    return (
        <div className="allFoodContainer">
            {data.map( (oneFood) => {
                const conditions = ["Pizza", "Burger", "Náš", "Naše", "Příloha"]
                    if (!conditions.some(el => oneFood.title.includes(el))) {
                    return (
                        <OneItemCard oneFood={oneFood} key={oneFood.id}/>
                    )
                }
            })}
        </div>
    )
}

export default ItemsToOrder