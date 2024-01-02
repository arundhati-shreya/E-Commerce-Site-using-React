import React from "react";

const Header = () => {
    return (
        <>
            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <ul class="nav justify-content-center mx-auto text-center me-3">
                    <li class="nav-item">
                        <a class="nav-link active text-white fw-bold" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold" href="#">STORE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white fw-bold" href="#">ABOUT</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-outline-info ms-auto">Cart</button>

            </nav>
            <div class="bg-secondary text-white text-center  py-4">
                <h1 class="display-4 fw-bold">The Generics</h1>
            </div>
        </>
    )
}

export default Header;