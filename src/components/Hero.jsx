import React from 'react'
import vikramC from "../image/purnea img.jpg"
import vikramB from "../image/hostal img/IMG20240814235239.jpg"
import vikramD from "../image/hostal img/IMG20240814235257.jpg"
const Hero = () => {
  return (
    <div> <div>
    <div className="container-fluid bg-dark" id="home">
<div className="row h-100">
<div className="col-md-6 h-100">
<div className="descriptionHero h-100  flex-column d-flex justify-content-center align-items-center">
<div className="contant">
<h1>HostelHub
    <br />
    
Centralized Management</h1>
<h4>
Smart Management
Smart solutions for better management.
</h4>
<p>
Optimize your hostel operations with our smart management solutions, enhancing productivity.
</p>
</div>
</div>
</div>
<div className="col-md-6 h-100">
<div className="mx-2 flex-column d-flex justify-content-center align-items-center h-100">
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active">
  <img src={vikramC} className="d-block w-100 heroImage" alt="..."/>
</div>
<div className="carousel-item">
  <img src={vikramB} className="d-block w-100 heroImage" alt="..."/>
</div>
<div className="carousel-item">
  <img src={vikramD} className="d-block w-100 heroImage" alt="..."/>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
</div>
</div>
</div>
    </div>

</div></div>
  )
}

export default Hero