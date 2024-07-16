import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
const naviagte=useNavigate()
  const handleSubmit=()=>{
if(!name){
  console.log("name is necessary")
  return;
}
if(!password){
  console.log("password is necessary")
  return;

}

console.log(name,password);
naviagte("/user-room");
  }

  return (
<div className="bg-dark w-100">
<div className="container bg-dark" id="auth">
<div className="row text-center py-5">
    <h1>Login</h1>
    <div className="borderSet">

    </div>

</div>
<div className="row h-100">
    <div className="col-md-6">
<img src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='img-fluid loginImage'/>
    </div>
    <div className="col-md-6">
   <div className="h-50 d-flex flex-column justify-content-center align item center">
  
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
  <input type="email"
  onChange={(e)=>setName(e.target.value)}
  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="password" class="form-label text-white">Password </label>
  <input type="password" 
  onChange={(e)=>setPassword(e.target.value)}
  
  class="form-control" id="password" placeholder="name@example.com"/>
</div>
<div className="mb-3">
    <button className="btn btn-success w-25" onClick={handleSubmit}>Submit</button>
</div>
   </div>
    </div>

</div>
 </div>
</div>
  )
}

export default Auth