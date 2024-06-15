import React from 'react'

const LeftHeading = ({ name }) => {
    return (
        <div className='flex py-[8px]'>
            <span className=' bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-black text-[1rem] md:text-[19px] font-semibold before:content-["_"] before:bg-black before:h-[2px] relative before:absolute before:w-[10%] px-[20px] before:left-0 before:top-[50%]'>
                {name}
            </span>
        </div>
    )
}

export default LeftHeading