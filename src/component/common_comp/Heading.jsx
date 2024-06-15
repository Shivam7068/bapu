import React from 'react';

const Heading = ({ name }) => {
    return (
        <div className='flex py-[8px] items-center justify-center m-auto'>
            <span className=' bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-black text-[1rem] md:text-[19px] font-semibold before:content-["_"] before:bg-black before:h-[2px] relative before:absolute before:w-[15%] px-[30px] before:left-0 before:top-[50%]
                after:content-["_"] after:bg-black after:h-[2px] after:absolute after:w-[15%] after:right-0 after:top-[50%]'>
                {name}
            </span>
        </div>
    );
}

export default Heading;