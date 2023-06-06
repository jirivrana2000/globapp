import React from 'react'
import { Link } from "react-router-dom"
import "../styles/OneItemCard.css"

const oneItemCard = (props) => {
    const {id, image, title, price, tags} = props.oneFood
    return (
        <article key={id} className="foodContainer">
            <Link to={`/jidlo/${id}`} >
                <img className='foodImg' src={image} alt="jídlo" />
                <h3 className='foodTitle'>{title}</h3>
                <p className='foodPrice'>{price} kč</p>
            </Link>
        </article>
    )
}

export default oneItemCard