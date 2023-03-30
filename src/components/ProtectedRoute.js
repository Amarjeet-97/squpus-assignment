import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';

const ProtectedRoute = ({children}) => {
   const dispatch=useDispatch();
   const {user}=useSelector((state)=>state.user);
   
   //get user
   

 if(localStorage.getItem("token")){
    return children;
 }else{
    return <Navigate to="/login"/>
 }
}

export default ProtectedRoute