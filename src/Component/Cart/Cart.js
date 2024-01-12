import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../Store/ContextProvider";

const Cart = () => {
  const { removeItemFromCart, cartItems, increaseQuantity, decreaseQuantity , totalCartPrice} = useContext(CartContext);
  

  return (
    <>
      <Modal.Body>
        <div className="position-absolute top-0 end-0 p-5 bg-light border rounded">
          <h3>Your Cart </h3>
          {cartItems.length === 0 ? (
            <h5>Your Cart is Empty </h5>
          ) : (
            <>
              <div className="row cart-item header bg-light p-2">
                <div className="col">Item</div>
                <div className="col">Price</div>
                <div className="col">Quantity</div>
                {/* <div className="col">Total</div> */}
              </div>
              {cartItems.map((item, id) => (
                <div key={id} className="cart-item">
                  <div className="item-details row">
                    <div className="col-md-4">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="img-fluid rounded cart-image"
                        style={{ maxWidth: "80px", maxHeight: "80px" }}
                      />
                      <p className="item-title">{item.title}</p>
                    </div>
                    <div className="col-md-4">
                      <p className="item-price">${item.price}</p>
                    </div>
                    <div className="col-md-2">
                      <div className="quantity-controls">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => decreaseQuantity(item._id)}
                        >
                          -
                        </button>
                       
                        <p className="quantity mx-2">{item.quantity}</p>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => increaseQuantity(item._id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <div className="remove-btn">
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => removeItemFromCart(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
               <div className="cart-total">
                <p>Total Price: ${totalCartPrice.toFixed(2)}</p>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </>
  );
};

export default Cart;
