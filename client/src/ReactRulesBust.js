import React from 'react'
import Dates from './components/Dates';
import { useState } from 'react';
import Header from './components/Header';
import TaskDock from './components/TaskDock';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Addtask from './components/Addtask';
import Flash from './components/Flash';

const ReactRulesBust = () => {

    const [timestamp, setTimestamp] = useState(86400000)
    const [lowerLimTimestamp, setLowerLimTimestamp] = useState(0)
    const [offcanvas, setOffcanvas] = useState('show')
    const [user, setUser] = useState('default')
    const [password, setPassword] = useState('')
    const [flash, setFlash] = useState({msg:'',category:''})

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1000) {
            setOffcanvas('hide')
        }
        else {
            setOffcanvas('show')
        }
    })

    return (
        <>
            <div>
                <Dates timestamp={timestamp} setTimestamp={setTimestamp} offcanvas={offcanvas} setOffcanvas={setOffcanvas} lowerLimTimestamp={lowerLimTimestamp} setLowerLimTimestamp={setLowerLimTimestamp} />
            </div>
            <div className="right-part" style={{ marginLeft: `${offcanvas==='show'?'400px':'0px'}` }}>
                <BrowserRouter>
                        <Header user={user} setUser={setUser} />
                        <Flash flash={flash} setFlash={setFlash}/>
                    <Routes>
                        <Route exact path="/" element={user==='default'?<><Login user={user} password={password} setPassword={setPassword} setUser={setUser} flash={flash} setFlash={setFlash} /></>:<><TaskDock timestamp={timestamp} lowerLimTimestamp={lowerLimTimestamp} user={user} setUser={setUser}/></>}/>
                        <Route exact path='/add' element={<Addtask user={user}/>}/>
                    </Routes>
                </BrowserRouter>
                
            </div>
        </>
    )
}

export default ReactRulesBust
