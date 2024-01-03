import React, { useContext,useState } from "react";
import Cart from "../Cart/Cart";
import { CartContext } from "../Store/ContextProvider";

const Header = () => {
    const { cartItemCount,setCartItemCount } = useContext(CartContext);
    const[show,setShow]=useState(false);
   

    const showHandle=()=>{
        setShow(!show)
    }

    const updateCartItemCount = (count) => {
       setCartItemCount(count);
    };

    return (
        <>
           <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <ul className="nav justify-content-center mx-auto text-center me-3">
                    <li className="nav-item">
                        <a className="nav-link active text-white fw-bold" aria-current="page" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#">STORE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold" href="#">ABOUT</a>
                    </li>
                </ul>
                <button type="button" className="btn btn-outline-info ms-auto me-3" onClick={showHandle}>
                    Cart {cartItemCount}
                    {/* {cartItemCount > 0 && <span className="badge bg-danger ms-1">{cartItemCount}</span>} */}
                    </button>
                
            </nav>
            <div className="bg-secondary text-white text-center py-4">
                <h1 className="display-4 fw-bold">The Generics</h1>
            </div>
            {show && <Cart updateCartItemCount={updateCartItemCount} />}
        </>
    )
}

export default Header;