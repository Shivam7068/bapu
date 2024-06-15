import React from 'react'
import { useState } from 'react';
const Inputs = ({ obj }) => {

    return (
        <div className='flex flex-col gap-2 w-full'>
            <label >{obj.label} :- </label>
            <input type={obj.type} placeholder={obj.placeholder} className='w-full h-7 p-5 rounded-lg outline-none border-2 border-black'/>
        </div>
    )
}

export default Inputs