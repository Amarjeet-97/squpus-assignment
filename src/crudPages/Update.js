import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  toast, ToastContainer } from 'react-toastify';
import Navigation from '../Navigation';

const Update = () => {
    const [name,setName]=useState("");
    const [category,setCategory]=useState("")
    const[price,setPrice]=useState("");
    const [id,setId]=useState();
    const header= {"Access-Control-Allow-Origin":"*"};
    const navigate=useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setCategory(localStorage.getItem("category"))
        setPrice(localStorage.getItem("category"))
    },[])
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://641312143b710647375e5d37.mockapi.io/squpus/${id}`,
        {
            name:name,
            category:category,
            price:price

        }
        ).then(()=>{
            navigate("/")
        })


    }
  return (
    <>     
            <Navigation/>
          <form onSubmit={handleUpdate}>
            <h1>Update your list </h1>
            <ToastContainer/>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                <input type="text" className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="text" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary ">Update</button>
            <Link to="/">
                <button type="submit" className="btn btn-primary m-3">view</button>
            </Link>
        </form>
    </>
  )
}

export default Update