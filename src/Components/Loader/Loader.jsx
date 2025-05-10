import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="fashion-loader">
      <div className="brand-logo">VENUS</div>
      <p>Goddess of Beauty</p>
      <div className="loading-bar">
        <div className="progress"></div>
      </div>
      <div className="fashion-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
    </div>
  );
};

export default Loader;