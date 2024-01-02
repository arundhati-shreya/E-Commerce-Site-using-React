import React, { useState } from "react";
import Cart from "./Cart";

const Header = () => {
    const[show,setShow]=useState(false);

    const showHandle=()=>{
        setShow(!show)
    }


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
                <button type="button" className="btn btn-outline-info ms-auto" onClick={showHandle}>Cart</button>
                
            </nav>
            <div className="bg-secondary text-white text-center py-4">
                <h1 className="display-4 fw-bold">The Generics</h1>
            </div>
            {show && <Cart/>}
        </>
    )
}

export default Header;