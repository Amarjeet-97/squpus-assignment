import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import { showLoading,hideLoading } from '../redux/features/alertSlice'
import { useDispatch, useSelector} from 'react-redux';
import { setData } from '../redux/features/dataSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';


const Create = () => {
    const [name,setName]=useState("");
    const [category,setCategory]=useState("")
    const[price,setPrice]=useState("");
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.user)
    const {data}=useSelector((state)=>state.data)
    const header= {"Access-Control-Allow-Origin":"*"};
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        dispatch(showLoading());
        e.preventDefault();
        axios.post("https://641312143b710647375e5d37.mockapi.io/squpus",{
            
            name:name,
            category:category,
            price:price,
            usename:user.email,
            header,
           
            
        })
        dispatch(hideLoading())
        

        navigate("/")
        // let regObj= {name,category,price}
        // setList((list)=>{
        //     const updatedList=[{...list},{name:name,category:category,price:price}]
        //     console.log(updatedList)
        //     return updatedList
        // })
        // dispatch(hideLoading())
        // dispatch(setData(list))
        
    }
  return (
    
    <>    
        <Navigation/>
         <form onSubmit={handleSubmit}>
            <h1>Create a List </h1>
            <ToastContainer/>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
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
            
            <button type="submit" className="btn btn-primary ">Create</button>
            <Link to="/">
                <button type="submit" className="btn btn-primary m-3">view</button>
            </Link>
        </form>
    </>
  )
}

export default Create