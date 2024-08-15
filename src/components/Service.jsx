import React from 'react'
import regis from "../image/hostal booking pic.jpg"
import check from "../image/check att img.avif"
import gest from "../image/gest img.webp"
const serviceData =[
    {
        name: "Room Booking and Registration",
        des: "Online booking system with real-time availability and room selection.",
        url: regis
    },
    {
        name: "Check-in and Check-out ",
        des: "Digital check-in/check-out processes, ID verification, and automated notifications.",
        url: check
    },
    {
        name: "Billing and Invoicing",
        des: "Automated billing system with detailed invoices, multiple payment options, and financial reporting.",
        url: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Guest Communication",
        des: "Automated emails, SMS notifications, in-app messaging system, and multilingual support.",
        url: gest
    }
];

const Service = () => {
  return (
    <div className='w-100 bg-dark pb-5' id="service">

        <div className="container  h-100">
        <div className="row text-center pb-3">
    <h1>Service</h1>
    <div className="borderSet">

    </div>

</div>
<div className="d-flex justify-contant-between align-items-center">
    {
        serviceData.map((s,i)=>(
            <div class="card mx-2 parentSewrvice" style={{width:"18rem"}}>
  <img src={s?.url} class="card-img-top" alt="..." className='img-fluid serviceImage' 
  style={{height:"200px"}}
  />
  <div class="card-body">
    <h5 class="card-title">{s?.name}</h5>
    <p class="card-text">{s?.des}</p>
    
  </div>
</div>
        ))
    }
</div>
        </div>
    </div>
  )
}

export default Service