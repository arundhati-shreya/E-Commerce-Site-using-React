import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'

import AuthContext from "../Store/auth-context";


const Login = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
              'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPTNI_cnBDpM3UpcM5Z8KjHllp5W3snT0',
              {
                method: 'POST',
                body: JSON.stringify({
                  email: formData.email,
                  password: formData.password,
                  returnSecureToken: true,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
      
            if (!response.ok) {
              const data = await response.json();
              throw new Error(data.error.message || 'Authentication failed!');
            }
      
            const data = await response.json();
            const token = data.idToken;
      
            authCtx.login(token);
            localStorage.setItem("token", token);
      
            // Redirect to the products page
            navigate("/"); 
          } catch (error) {
            authCtx.login(null);
            localStorage.removeItem("token");
            authCtx.setError(error.message);
          }
        };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" onChange={handleChange} value={formData.email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleChange} value={formData.password} required />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    );
}


export default Login;