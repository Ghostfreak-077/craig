import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addtask = (props) => {

  const [title,setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const {user} = props

  const host = 'http://localhost:5000'

  const fetchApi = async (endpoints,data_json, method) =>{
    const response = await fetch(`${host}${endpoints}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data_json) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    return json
  }

  const addtask = (title,desc)=>{
    var endpoints = '/api/task/add'
    var data = {title:title,desc:desc,user:user}
    var method = 'POST'
    fetchApi(endpoints,data,method)
  }

  return (
    <div className='addtask-section'>
      <link rel="stylesheet" href="/styles/addtask.css" />
       <h3>Add a Task</h3>
       <div className="title">
        Title: <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} name="title" id="title" />
       </div>
       <div className="desc">
        Description: <textarea name="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" ></textarea>
       </div>
       <button className="addtask-btn" onClick={()=>{addtask(title,desc)}}><Link to='/'>Add</Link></button>

    </div>
  )
}

export default Addtask