import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../data"
import "../styles/Item.css"
import { Link } from "react-router-dom"

const Item = (props) => {
    const {foodId} = useParams()
    const [quantity, setQuantity] = useState(1)

    const oneFood = data.find( (oneFood) => {
        return oneFood.id === parseInt(foodId)
    })

    const {id, image, title, tags, price} = oneFood
    oneFood.quantity = quantity

    const plusItem = () => {
        setQuantity(quantity + 1)
    }

    const minusItem = () => {
        if (quantity > 1 ) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const ScrollTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return ( 
        <div className="itemContainer">
            <div className="item" key={id}>
                <img className="itemImg" src={image} alt="" />
                <div className="itemInfoBox">
                    <h2 className="itemHeader">{title}</h2>
                    <p className="itemTags">{tags}</p>
                    <div className="itemQuantity">
                        <button onClick={ () => minusItem()}>-</button>
                        <p>{quantity}</p>
                        <button onClick={ () => plusItem()}>+</button>
                    </div>
                    <p className="itemPrice">{price * quantity } kč</p>
                    <button className="itemOrderButton" onClick={() => props.adItem(oneFood)}>Přidat do košíku</button>
                </div>
            </div>
            <div className="sauceContainer">
                <h2 className="h2">Ochutnejte naše omáčky</h2>
                <div className="sauce">
                    <div onClick={ () => ScrollTop()} className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/39`} >
                            <h3 className="sauceComment">BBQ</h3>
                            <img className="imgSauce" src={data[38].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div onClick={ () => ScrollTop()} className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/40`} >
                            <h3 className="sauceComment">Kečup</h3>
                            <img className="imgSauce" src={data[39].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div onClick={ () => ScrollTop()} className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/41`} >
                            <h3 className="sauceComment">Tatarka</h3>
                            <img className="imgSauce" src={data[40].image} alt="jídlo" />
                        </Link>
                    </div>
                    <div onClick={ () => ScrollTop()} className="xoneSauce">
                        <Link className="oneSauce" to={`/jidlo/42`} >
                            <h3 className="sauceComment">Jalapeno</h3>
                            <img className="imgSauce" src={data[41].image} alt="jídlo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item