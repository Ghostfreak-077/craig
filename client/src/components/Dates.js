import React, { useEffect, useState } from 'react'

const Dates = (props) => {

  const {setOffcanvas,setTimestamp, timestamp, offcanvas, lowerLimTimestamp, setLowerLimTimestamp} = props

  return (
    <div className='dates'>
        <link rel="stylesheet" href="/styles/dates.css" />

<div class={`offcanvas offcanvas-start text-bg-dark ${offcanvas==='show'?'show':''}`}  data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="button-aid" onClick={()=>{offcanvas==='show'?setOffcanvas('hide'):setOffcanvas('show')}} data-flip={offcanvas==='show'?'<':'>'}></div>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Timestamp</h5>
  </div>
  <div class="offcanvas-body">
    <ul className="timestamps text-start">
      <li className={`timestamp ${timestamp===86400000?'timestamp-sel':''}`} onClick={()=>{setTimestamp(86400000);setLowerLimTimestamp(0)}}>Today</li>
      <li className={`timestamp ${timestamp===604800000?'timestamp-sel':''}`} onClick={()=>{setTimestamp(604800000);setLowerLimTimestamp(86400000)}}>Last 7 days</li>
      <li className={`timestamp ${timestamp===2592000000?'timestamp-sel':''}`} onClick={()=>{setTimestamp(2592000000);setLowerLimTimestamp(604800000)}}>Last Month</li>
      <li className={`timestamp ${timestamp===31536000000?'timestamp-sel':''}`} onClick={()=>{setTimestamp(31536000000);setLowerLimTimestamp(2592000000)}}>Last 1 year</li>
      <li className={`timestamp ${timestamp===31536000001?'timestamp-sel':''}`} onClick={()=>{setTimestamp(31536000001);setLowerLimTimestamp(31536000000)}}>More than a year ago</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Dates
