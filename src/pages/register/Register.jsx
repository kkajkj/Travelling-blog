import { Link } from "react-router-dom"
import "./register.css"
import React,{ useState } from "react";
import axios from "axios"
export default function Register() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit =async (e)=>{
  try{
    e.preventDefault();
    var data ={
    name:name,
    gender:gender,
    email:email,
    status:"active"
  };
  
  var config = {
    method: 'post',
    url: 'https://gorest.co.in/public/v2/users',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer 1794adb321a25af90922cde4d2d9b8405f80af7ac52a9671f716c1f2cf8aab01'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert("Registration successful")
  })
  .catch(function (error) {
    console.log(error);
  });
 } catch (err){
  console.log(err)
 }
 }
   return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="registerInput" type="text" value={name} onChange={e => setName(e.target.value)} style={{border: 'none', borderRadius: '10px'}} />
        <label>Gender</label>
        <input className="registerInput" type="text" value={gender} onChange={e => setGender(e.target.value)} style={{border: 'none', borderRadius: '10px'}} />
        <label>Email</label>
        <input className="registerInput" type="Email"value={email} 
        onChange={e=>setEmail(e.target.value)}/>
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">
         <Link to="/login"className="link">Login</Link>
        </button>
    </div>
    )
}
