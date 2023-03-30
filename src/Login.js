import React, { useState } from 'react'

import {  toast, ToastContainer } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/features/userSlice';

import { showLoading,hideLoading } from './redux/features/alertSlice';
const Login = () => {

  
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.user)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(showLoading())
        dispatch(showLoading())
        let regObj= {email,password}
        fetch("http://localhost:8080/login",
          {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regObj)
        }).then((res)=>{
          
          return res.json();
          
        }).then((res)=>{
          dispatch(hideLoading())
          console.log(res.user)
          dispatch(setUser(res.user))
          
          if(res.accessToken){
            localStorage.setItem("token",res.accessToken)
            
          }else{
            toast.error('Invalid User Name or Password')
          }   
        }).catch((error)=>{
          dispatch(hideLoading())
          toast.error('Failed:' +error.message)
      })
    }
  return (

    <>
      <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <ToastContainer/>
          
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div> 
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>     
          <button type="submit" className="btn btn-primary">Login</button>
            <Link to="/register">
                <p>Not a User! Register Here <button type="submit" className="btn btn-primary">Register</button></p>
            </Link>
        </form>
    </>
  )
}

export default Login