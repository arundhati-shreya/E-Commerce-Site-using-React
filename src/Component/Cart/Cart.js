import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../Store/ContextProvider";

const Cart = () => {
    const { cartItems, removeItemFromCart} = useContext(CartContext);

 
    return (
        <>
            <Modal.Title>Your Cart</Modal.Title>

            <Modal.Body>
                <div className="container mt-5 mr-2">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="mb-3">
                                    <div className="mb-3">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="img-fluid rounded"
                                        />
                                        <p className="mt-2">Price: {item.price}</p>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                            onClick={() => removeItemFromCart(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </>
    );
};

export default Cart;
