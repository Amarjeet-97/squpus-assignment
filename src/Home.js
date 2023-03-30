import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';
const Home = () => {
  const {user}=useSelector((state)=>state.user)
  const[data,setData]=useState([]);
  

  const navigate= useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token")
    navigate("/login")

  }

    function getData(){
      axios.get("https://641312143b710647375e5d37.mockapi.io/squpus")
      .then((res)=>{
          
          setData(res.data)
      })
    }
    function handleDelete(id){
      axios.delete(`https://641312143b710647375e5d37.mockapi.io/squpus/${id}`)
      .then(()=>{getData()})
    } 
    const setToLocalStorage=(id,name,category,price)=>{
        navigate("/update")
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("category",category)
        localStorage.setItem("price",price)
    }
  useEffect(()=>{
    getData();
    if(user===null){
      localStorage.removeItem("token");
    }
  },[])
  
  return (
    <div> 

        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiaryd-flex ">
            <div className="container-fluid d-flex justify-content-between m-2">
              <a className="navbar-brand" link="">Welcome {user.name}</a>
                  <button className="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>    
            </div>
          </nav>

        </div>
        <div className='d-flex justify-content-between m-2'>
          <h1>List of Item </h1>
          <Link to="/create">
              <button className="btn btn-secondary">Create</button>
          </Link>  

        </div>
        
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((el)=>{
                        
              return(el.usename===user.email)
                        
              }).map((items,idx)=>{
                return(
                        <tr key={idx}>
                        <th scope="row">{items.idx}</th>
                        <td>{items.name}</td>
                        <td>{items.category}</td>
                        <td>{items.price}</td>
                        <td><button className="btn btn-success" onClick={()=>{setToLocalStorage(items.id,items.name,items.category,items.price)}}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={()=>handleDelete(items.id)}>Delete</button></td>
                  </tr>
                )
              })

          }
          
          
        </tbody>
      </table>
    </div>

  )
}

export default Home