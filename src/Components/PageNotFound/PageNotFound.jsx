import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="glitch-container">
        <h1 className="glitch" data-text="404">404</h1>
        <h2 className="subtitle">Page Lost in Space</h2>
        <p className="description">
          The page you're looking for has been abducted or never existed.
        </p>
        
        <div className="button-group">
          <Link to="/" className="neon-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Beam Me Home
          </Link>
          <a 
            href="https://www.github.com/chaitu999projects/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="space-link"
          >
            Explore Real Space Instead →
          </a>
        </div>
      </div>
      
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="planet"></div>
    </div>
  );
};

export default PageNotFound;