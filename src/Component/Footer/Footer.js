import React from "react";

const Footer = () => {
  return (
    <footer className="navbar navbar-dark bg-dark ">
      <div className="container">
        <div className="navbar-brand bg-skyblue text-white p-2">
          <h2 className="display-3 fw-bold">The Generics</h2>
        </div>
        <div className="ml-auto">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
            <i className="bi bi-facebook" style={{ marginRight: "30px",fontSize: "24px" }}></i>
          </a>
          <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
            <i className="bi bi-spotify" style={{ marginRight: "20px",fontSize: "24px" }}></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="bi bi-youtube" style={{ marginRight: "10px",fontSize: "24px" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
