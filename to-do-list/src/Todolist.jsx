import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';


function Todolist() {
    const[task,setTask]=useState([]);
    const[del,setDel]=useState(0);
    
    useEffect(()=>{
        axios.get('http://localhost:3000/Todolist')
        .then(data=>setTask(data.data))
        .catch(err=>console.log(err))
    },[del])
    const navigate=useNavigate();
    const handledelete=(id)=>{
      axios.delete('http://localhost:3000/Todolist/'+id)
      .then(alert('delete todo list'))
      .then(setDel (!del))
      .catch(err=>console.log(err))

    }

  return (
        <div className=' todo  '>
            <h4>TO-DO-LIST</h4>
            <button className='btn btn-outline-success add ' onClick={()=>navigate('/addtodo')}>ADD TODO</button>
          
         <div className="row ">
            { task.map((task,index)=>(
                <div key={index} className="card m-3" style={{width:'18rem'}} >
                <div className="card-body">
                    <h3 className="card-title">{task.task}</h3>
                    <p>{task.details}</p>
                    <h5>{task.deadline}</h5>
                    <button className=' ms-2 btn btn-outline-danger'
                     >
                     <i className="bi bi-archive-fill" onClick={()=>{handledelete(task.id)}}>Delete</i>
                     </button>
                     <Link to={`/edit/${task.id}`}
                     className='btn btn-outline-warning ms-2'
                      >
                      <i className="bi bi-pencil-square"></i>Edit</Link>
                    
                </div>
              </div>)
            )}
        </div>

         </div>
         

      

   
  )
}

export default Todolist