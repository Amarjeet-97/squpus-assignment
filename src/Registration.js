import React, { useState } from 'react'

import {  toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { showLoading,hideLoading } from './redux/features/alertSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("");
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit=(e)=>{
        dispatch(showLoading());
        e.preventDefault();
        let regObj= {name,email,password}
        fetch("http://localhost:8080/register",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regObj)
            
        }).then((res)=>{
            console.log(res);
            dispatch(hideLoading())
           if(res.ok){            
                toast.success('Registered successfully.')
                setEmail("");
                setName("");
                setPassword("");               
           }

           else{  
            toast.error('Email already exist')
           }     
        }).catch((error)=>{
            dispatch(hideLoading())
            toast.error('Failed:' +error.message)
        })
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <ToastContainer/>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary">Register</button>
            <Link to="/login">
                <p>Already Register! Login Here <button type="submit" className="btn btn-primary">Login</button></p>
            </Link>
        </form>

        
        
        
        <ToastContainer />


    </>   
  )
}

export default Registration