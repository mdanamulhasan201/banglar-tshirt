import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;

    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h2>BoroLoxx</h2>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h1 className={cart.length === 1 ? "blue" : "red"}>order summary: {cart.length}</h1>
            <p className={`bold border ${cart.length===3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='purple'>Aro kinto</span> : <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}

                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                > X </button> </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na </h3>
            }
        </div>
    );
};

export default Cart;


/***
 * 
 * 
 *  CONDITIONAL RENDERING
 *  1. Use if else to set a variable that will  contain an element, components 
 *  2. ternary operator: conditions ? 'for true' : 'false'
 *  3. Logical && (if the condition is true then the next will be displayed) 
 *  4. Logical || (if the condition is false then the next thing will be displayed )
 */

/**
 *  Conditional CSS Class 
 *  1. Use ternary
 *  2. ternary inside template string 
 * 
 */