import React from 'react'
import { Link } from 'react-router-dom'


const Pagetitle = ({ title }) => {
    return (
        <>
            {/* Page title */}
            <section className={`bg-cover bg-center w-full h-[70vh] bg-[url("/assets/common_img/campus.jpg")] bg-no-repeat object-cover relative before:absolute before:content-["_"] before:bg-[#00000091] before:w-full before:h-full before:left-0 before:top-0 z-[-1]`}>

                <div className='w-full absolute h-full'>
                    <div className='flex justify-center h-full items-center flex-col text-white'>

                        <h1 className=' z-[999] md:text-[45px] font-bold mb-5'>
                            {title}
                        </h1>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Pagetitle
