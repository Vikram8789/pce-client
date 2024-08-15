import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logPic from "../image/IMG20240814235239.jpg"
import { server_url } from '../utils/api';
import axios from 'axios';

const Auth = () => {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
const naviagte=useNavigate()
  const handleSubmit=async()=>{
if(!name){
  console.log("userName is necessary");
  alert("userName is necessary")
  return;
}
if(!password){
  console.log("password is necessary");
  alert("password is necessary")
  return;

}

try{
const {data}=await axios.post(`${server_url}/user/login`,{
  regNo:name
  
  ,password:password

},{
  headers:{
    "Content-Type":"application/json",
    "Authorization":localStorage.getItem("token")
}
});
if(data.success){
  alert(`${data.message}`);
  console.log(data?.user?.userRole)
  if(data?.user?.userRole==="student"){
    naviagte("/user-room");
  }else{
    naviagte("/admin-user");

  }
  

}else{
  alert(`${data.message}`)
}
}catch(e){
  console.log(e)
  alert(e.response?.data?.message || "An error occurred");

}

  }

  return (
<div className="bg-dark vv">
<div className="container bg-dark" id="auth">
<div className="row text-center py-5">
    <h1>Login</h1>
    <div className="borderSet">

    </div>

</div>
<div className="mainContainerDiv ">
    
    <div className="two w-50 m-auto">
   <div className=" d-flex flex-column justify-content-center align item center">
  
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