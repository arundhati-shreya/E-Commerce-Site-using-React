import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const Cart = () => {
    
    const [cartElements, setCartElements] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ])

    const handleRemove = (index) => {
        const updatedCart = [...cartElements];
        updatedCart.splice(index, 1);
        setCartElements(updatedCart);
    };
    return (
        <>
            <Modal.Title>Your Cart</Modal.Title>

            <Modal.Body>

                <div className="container mt-5 mr-2">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            {cartElements.map((item, index) => (
                                <div key={index} className="mb-3">
                                    <div className="mb-3">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="img-fluid rounded"
                                        />
                                        <p className="mt-2">Price: {item.price}</p>
                                        <button type="button" className="btn btn-primary btn-sm"   onClick={() => handleRemove(index)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal.Body>
       
</>

        
    )

}

export default Cart;