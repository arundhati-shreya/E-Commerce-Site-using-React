import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const About = () => {
  return (
    <>
    <Header/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1604514288114-3851479df2f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D" // Replace with the actual URL of your photo
            alt="About Us"
            className="img-fluid rounded"
            style={{ height: '200px' }} 
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique euismod urna,
            id volutpat risus eleifend sit amet. Nulla facilisi. Sed eu risus nec nisi ultrices
            fermentum vel ut nulla.
          </p>
          <p>
            Fusce vel libero a urna cursus consequat. Proin auctor efficitur orci, vel vestibulum
            ligula feugiat nec. Nunc tincidunt justo vel accumsan feugiat. Integer euismod sapien
            ut luctus convallis.
          </p>
         
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;