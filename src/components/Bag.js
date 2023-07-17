import "../styles/Bag.css"
import { useState, useEffect } from "react"
import bagIcon from "../img/bagIcon.png"
import { IoMdClose } from "react-icons/io";

const Bag = ({order}) => {
    const [orderArray, setOrderArray] = useState([])
    const [open, setOpen] = useState(false)
    let total = 0

    useEffect( () => {
        if (order)
        setOrderArray([...orderArray, order])
    }, [order])

    useEffect( () => {
        setOrderArray([])
    },[])
    
    const openOrderContainer = () => {
        setOpen(!open)
    }

    const deleteOneItem = (itemId) => {
        const newOrderList = orderArray.filter( (oneItem) => {
            return oneItem.id !== itemId
        })
        setOrderArray(newOrderList)
    }

    orderArray.forEach(oneItem => {
        total = total + (oneItem.price * oneItem.quantity)
    })

    return (
        <div className="bagContainer" >
            <button className="shopCartButton" onClick={() => openOrderContainer()}>
                <img className="shopCartImg" src={bagIcon} alt="košík" />
            </button>
            <div id={open ? "" : "hiden"} className="orderContainer">
                <div className="foodInOrderInfo">
                    <button className="foodInOrderCloseButton" onClick={() => openOrderContainer()}><IoMdClose /></button>
                    <h3 className="foodInOrderInfoName">Název</h3>
                    <p className="foodInOrderInfoText">Počet</p>
                    <p className="foodInOrderInfoText">Cena</p>
                </div>
                <div className="foodInOrderContainer">
                    {orderArray[0] ? orderArray.map( (oneItem) => {
                    const {id, title, price, quantity} = oneItem
                    return(
                        <div className="oneFoodInOrder" key={id}>
                            <h5 className="oneFoodInOrderName">
                                <button className="deletoOneItemButton" onClick={ () => deleteOneItem(id)}>
                                    <IoMdClose />
                                </button>
                                <p className="oneFoodInOrderTitleContainer">{title}</p>
                                
                            </h5>
                            <p className="oneFoodInOrderText">{quantity} ks</p>
                            <p className="oneFoodInOrderText">{price * quantity} kč</p>
                        </div>
                    )
                    }) : <div className="emptyOrderContainer">Prázdný košík</div>}
                </div>
                <div className="priceContainer">
                    <p>Celkem</p>
                    <p>{total ? total : 0} kč</p>
                </div>
                {total ? 
                    <form className="form">
                        <input type="text" placeholder="Jméno a příjmení"/>
                        <input type="text" placeholder="Adresa"/>
                        <input type="mail" placeholder="E-mail"/>
                        <p>Zahraniční čísla piště s předvolbou.</p>
                        <p>Write foreign numbers with area code.</p>
                        <input type="tel" placeholder="Telefon" pattern="[0-9]{9-14}"/>
                        <input className="orderFormSubmitButton" type="submit" value="Odeslat objednávku" />
                    </form> 
                : ""}
            </div>
            <p className="closedCartPrice">{total ? total : 0} kč</p>
        </div>
    )
}

export default Bag