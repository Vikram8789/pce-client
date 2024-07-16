import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const {pathname}=useLocation()

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CV Raman</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {
          pathname ==="/" && 
          <>
          <li className="nav-item">
          <a className="nav-link" href="#service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#auth"
          >Login</a>
        </li>
          
          </>
        }
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar