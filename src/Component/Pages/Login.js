import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../Store/auth-context";
import { ContextProvider } from "../Store/ContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const[signUp, setSignUp] = useState(false)


  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(ContextProvider);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState(null); 
  

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/store");
      authCtx.login(token);

      // Assuming Firebase provides user data in the 'user' object after login
      const user = authCtx.user;

      if (user) {
        // Pass user data to the ContextProvider's loginUser function
        cartCtx.loginUser({ email: user.email });
        setUser(user);
        console.log(user);
      }

      // navigate("/");
    }
  }, [authCtx, cartCtx, navigate]);

  const switchHandler=()=>{
    setSignUp(!signUp);
    setFormData({
      email:'',
      password:''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    let url;
    if (!authCtx.isLoggedIn) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPTNI_cnBDpM3UpcM5Z8KjHllp5W3snT0';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPTNI_cnBDpM3UpcM5Z8KjHllp5W3snT0';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message || 'Authentication failed!');
      }

      const data = await response.json();
      const token = data.idToken;

      authCtx.login(token);
      localStorage.setItem("token", token);
      localStorage.setItem('email',formData.email)

      cartCtx.loginUser({ email: user.email }); 
      
      // Redirect to the home page
      navigate("/");
    } catch (error) {
      authCtx.setError(error.message);
    }

    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

 

  return (
    <div className="container mt-5">
      <h2>{!signUp ?'Create an Account': 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" onChange={handleChange} value={formData.email} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={handleChange} value={formData.password} required />
        </div>
      
        {!signUp && <button type="submit" className="btn btn-primary" onClick={switchHandler} >SignUp</button>}
        {signUp && <button type="submit" className="btn btn-primary" >Login</button>}
      </form>
    </div>
  );
};

export default Login;

