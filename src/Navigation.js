import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
    const {user}=useSelector((state)=>state.user)

    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
    useEffect(()=>{
       
        if(user===null){
            localStorage.removeItem("token");
          }
    },[])
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiaryd-flex ">
            <div className="container-fluid d-flex justify-content-between m-2">
              <a className="navbar-brand" link="">Welcome {user.name}</a>
                  <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>    
            </div>
        </nav>
    </>
  )
}

export default Navigation