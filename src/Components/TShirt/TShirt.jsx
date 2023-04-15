import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handlerAddToCart}) => {
    // console.log(tshirt)
    const {picture, name, price} = tshirt

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() =>handlerAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;