import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Edit() {
    const [value,setValue]=useState({task:"",details:"",deadline:""});
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/Todolist/' + id)
        .then(data=>setValue(data.data))
        .catch(err=>console.log(err))
    },[])
    const handleupdate =(event)=>{
        event.preventDefault();
        axios.put('http://localhost:3000/Todolist/' + id,value)
        .then(data=>{console.log(data.data);
            navigate('/');
          })
          .catch(err=>console.log(err));

    }
  return (
   <form className="my-5 " style={{width:"50%",margin:"auto"}} onSubmit={handleupdate} >
    <h3>Add to-do </h3>
  <div className="mb-3 ">
      <label  className="form-label">task</label>
      <input value={value.task} onChange={event=>setValue({...value, task:event.target.value})} type="text" className="form-control" />
  </div>
  <div className="mb-3">
      <label  className="form-label">details</label>
      <textarea  value={value.details} onChange={event=>setValue({...value, details:event.target.value})} type="text" className="form-control" />
  </div>
  <div className="mb-3">
      <label  className="form-label">deadline</label>
      <input  type="text"  onChange={event=>setValue({...value, deadline:event.target.value})} value={value.deadline} className="form-control" />
  </div>
   <button type="submit" className="btn btn-primary">edit</button>
   <Link to={'/'} className='btn btn-secondary ms-2'>back</Link>
</form>
  )
}

export default Edit