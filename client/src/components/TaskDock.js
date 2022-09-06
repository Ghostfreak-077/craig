import React, { useEffect, useState } from 'react'
import { TiTickOutline } from 'react-icons/ti'
import { AiOutlineDelete } from 'react-icons/ai'

const TaskDock = (props) => {

    const { timestamp } = props
    const [task, setTask] = useState([])
    const host = 'http://localhost:5000'
    const [temp, setTemp] = useState(0)

    const fetchApi = async (endpoints, method) => {
        const response = await fetch(`${host}${endpoints}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: null // body data type must match "Content-Type" header
        });
        const json = await response.json();
        setTask(json)
        return json
    }
    const updateApi = async (endpoints, method) => {
        const response = await fetch(`${host}${endpoints}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: null // body data type must match "Content-Type" header
        });
        const json = await response.json();
        return json
    }

    useEffect(() => {
        fetchApi('/api/task/read/partoo', 'GET')
        console.log(task);
    }, [timestamp, temp])

    const updateTask = (id) =>{
        updateApi(`/api/task/update/${id}`, 'PUT')
        setTemp(temp + 1)
    }

    return (
        <div className='main-section'>
            <link rel="stylesheet" href="/styles/taskdock.css" />
            <div className="tasks d-flex flex-wrap">
                {task.map((element) => {
                    return(

                        <div className="task mx-auto my-5">
                        <div className="task-text">
                            <h3>{element.title}</h3>
                            <p>{element.desc}</p>
                            {/* {element.status===false?'false':'true'} */}
                        </div>
                        <div className="task-btns d-flex">
                            <button className="m-auto task-btns-left" onClick={()=>{updateTask(element._id)}} ><TiTickOutline /></button>
                            <button className="m-auto task-btns-right"><AiOutlineDelete /></button>
                        </div>
                    </div>
                        )
                })}
            </div>
        </div>
    )
}

export default TaskDock
