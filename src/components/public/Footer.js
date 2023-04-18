import React, { useState } from 'react'

export const Footer = () => {
    
    const [click, setClick] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "Oh My Dog!";

    const handleClick = () => {
        setClick(click + 1);
    }

  return (
    <div className="footer-container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName}</p>

        {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
        </a> */}
        <span onClick={handleClick}><p > Click me! </p></span>
        

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
          <li className="nav-item" ><a href="#" className="nav-link px-2 text-body-secondary">Click count = {click}</a></li>
        </ul>
      </footer>
    </div>
  )
}
