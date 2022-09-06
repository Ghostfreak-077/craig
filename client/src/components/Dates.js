import React, { useEffect, useState } from 'react'

const Dates = (props) => {

  const {setOffcanvas,setTimestamp, timestamp, offcanvas} = props

  return (
    <div className='dates'>
        <link rel="stylesheet" href="/styles/dates.css" />
        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button> */}

<div class={`offcanvas offcanvas-start text-bg-dark ${offcanvas==='show'?'show':''}`}  data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="button-aid" onClick={()=>{offcanvas==='show'?setOffcanvas('hide'):setOffcanvas('show')}} data-flip={offcanvas==='show'?'<':'>'}></div>
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Timestamp</h5>
    {/* <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
  </div>
  <div class="offcanvas-body">
    <ul className="timestamps text-start">
      <li className={`timestamp ${timestamp==='today'?'timestamp-sel':''}`} onClick={()=>{setTimestamp('today')}}>Today</li>
      <li className={`timestamp ${timestamp==='7days'?'timestamp-sel':''}`} onClick={()=>{setTimestamp('7days')}}>Last 7 days</li>
      <li className={`timestamp ${timestamp==='month'?'timestamp-sel':''}`} onClick={()=>{setTimestamp('month')}}>Last Month</li>
      <li className={`timestamp ${timestamp==='6months'?'timestamp-sel':''}`} onClick={()=>{setTimestamp('6months')}}>Last 6 Months</li>
      <li className={`timestamp ${timestamp==='year'?'timestamp-sel':''}`} onClick={()=>{setTimestamp('year')}}>Last Year</li>
      <li className={`timestamp ${timestamp==='many-years'?'timestamp-sel':''}`} onClick={()=>{setTimestamp('many-years')}}>More than a year ago</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Dates
