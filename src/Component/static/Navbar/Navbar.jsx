import React, { useState } from 'react';
import logo from '../../../public/Logo.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [index, setIndex] = useState(0);

  const indexChange = (i) => {
    setIndex(i);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to={"/home"} className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <Button content={"Home"} style={index == 0 ? "active" : "deactive"} onClick={indexChange} id="0" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link">
                <Button content={"Category"} style={index == 1 ? "active" : "deactive"} onClick={indexChange} id="1" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">
                <Button content={"Product"} style={index == 2 ? "active" : "deactive"} onClick={indexChange} id="2" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quotes" className="nav-link">
                <Button content={"Quotes"} style={index == 3 ? "active" : "deactive"} onClick={indexChange} id="3" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                <Button content={"Create"} style={index == 4 ? "active" : "deactive"} onClick={indexChange} id="4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
