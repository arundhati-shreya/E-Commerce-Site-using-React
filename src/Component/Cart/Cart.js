import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../Store/ContextProvider";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  return (
    <>
      <Modal.Body>
        <div
          className="cart-container"
          style={{
            position: "fixed",
            top: '200px',
            right: 0,
            width: "40%",
            height: "100%",
            background: "white",
            border: "2px solid black",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <h3>Your Cart </h3>
          {cartItems.length === 0 ? (
            <h5> Your Cart is Empty </h5>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="mb-3">
                <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{ marginRight: "10px", maxWidth: "80px", maxHeight: "80px" }}
                  />
                  <div>
                    <p className="mt-2">Price: {item.price}</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => removeItemFromCart(index)}
                    >
                      Remove
                    </button>
                    <hr />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Modal.Body>
    </>
  );
};

export default Cart;
