import { Link } from "react-router-dom";
import "./login.css";
import React,{ useState } from "react";
import axios from "axios"
export default function Login() {
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
   
 const handleSubmit =(e) => {
  try {
      e.preventDefault();
    var data = JSON.stringify({
      "name": "Tenaliii Ramakrishna",
      "gender": "male",
      "email": "tenali.ramakrishnakk@15ce.com",
      "status": "active"
    });
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
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (err) {
    console.log(err)
   }
    
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm"onSubmit={handleSubmit}>
        <label>email</label>
        <input className="loginInput" name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}
        style={{border: 'none',borderRadius: '10px'}} />
      <label>password</label>
        <input className="loginInput" type="password"name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link to="/register"className="link">Register</Link>
        </button>
    </div>
  );
}