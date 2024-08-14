import React from 'react'
import { Switch } from 'antd';
import Layout from '../../components/Layout';

const UserRoom = () => {

    const onChangeConnection = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const onChangeAllFan = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const onChangeAllLight = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const onChangeBulb2 = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const onChangeBulb1 = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const onChangeFan2 = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const onChangeFan1 = (checked) => {
        console.log(`switch to ${checked}`);
      };




      const singleOnChangeAll = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const singleOnChangeBulb = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const singleOnChangeFan = (checked) => {
        console.log(`switch to ${checked}`);
      };
      const isSingle=false;
  return (
    <Layout>
 <div className="conatiner-fluid bg-dark  w-100" id="userRoom">
<div className="d-flex justify-content-center align-items-center h-100">
<div className="child w-100">
<div className="row my-2 text-center  w-100 m-auto">
        <h1>
      Welcome to Your Room
        </h1>
    </div>
  <div className="d-flex justify-content-center align-items-center "
 
  >
 
{
    !isSingle && 
<div className="tableData card">
<table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Fan 1</th>
      <th scope="col">Fan 2</th>
      <th scope="col"> Bulb 1</th>
      <th scope="col">Bulb 2</th>
      <th scope="col">ALL Light</th>
      <th scope="col">ALL Fan</th>
      <th scope="col">ALL Connection</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><Switch defaultChecked onChange={onChangeFan1} /></td>
      <td><Switch defaultChecked onChange={onChangeFan2} /></td>
      <td><Switch defaultChecked onChange={onChangeBulb1} /></td>
      <td><Switch defaultChecked onChange={onChangeBulb2} /></td>
      <td><Switch defaultChecked onChange={onChangeAllLight} /></td>
      <td><Switch defaultChecked onChange={onChangeAllFan} /></td>
    
      <td><Switch defaultChecked onChange={onChangeConnection} /></td>


    </tr>
   
    
  </tbody>
</table>
</div>
}

{
    isSingle && 
<div className="tableData card">
<table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      
      <th scope="col">Fan</th>
      <th scope="col"> Bulb </th>
     
      <th scope="col">ALL Connection</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><Switch defaultChecked onChange={singleOnChangeFan} /></td>
      <td><Switch defaultChecked onChange={singleOnChangeBulb} /></td>
      <td><Switch defaultChecked onChange={singleOnChangeAll} /></td>
      


    </tr>
   
    
  </tbody>
</table>
</div>
}

  </div>
</div>

</div>
   </div>
    </Layout>
  
  )
}

export default UserRoom