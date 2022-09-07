import React, { useState } from 'react'

const Flash = (props) => {

    const {flash, setFlash} = props

    if(flash.msg){

        return (
            <div>
            <div class={`alert alert-${flash.category} alert-dismissible fade show`} role="alert">
                {flash.msg}
                <button type="button" class="btn-close" onClick={()=>{setFlash({msg:'',category:''})}} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
}

export default Flash
