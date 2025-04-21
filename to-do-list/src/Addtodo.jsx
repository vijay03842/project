import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Addtodo() {
  const[newtask,setNewtask]=useState({task:"",details:"",deadline:""});
  const navigate=useNavigate();

  const handleadd=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/Todolist',newtask)
    .then(data=>{console.log(data);
      navigate('/');
    })
    .catch(err=>console.log(err));

  }

  



  return (
    <form className="my-5 " style={{width:"50%",margin:"auto"}} onSubmit={handleadd}>
      <h3>Add to-do </h3>
    <div className="mb-3 ">
        <label  className="form-label">task</label>
        <input  onChange={event=>setNewtask({...newtask, task:event.target.value})} type="text" className="form-control" />
    </div>
    <div className="mb-3">
        <label  className="form-label">details</label>
        <textarea  onChange={event=>setNewtask({...newtask, details:event.target.value})} type="text" className="form-control" />
    </div>
    <div className="mb-3">
        <label  className="form-label">deadline</label>
        <input  type="text"  onChange={event=>setNewtask({...newtask, deadline:event.target.value})} className="form-control" />
    </div>
     <button type="submit" className="btn btn-primary">add</button>
     <Link to={'/'} className='btn btn-secondary ms-2'>back</Link>
  </form>
  )
}


export default Addtodo