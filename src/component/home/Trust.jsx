import React from 'react'
import Heading from '../common_comp/Heading'
import { approval } from '../../data/footerLinks'

const Trust = () => {
    return (
        <div className='flex flex-col justify-center m-auto items-center w-[90%] my-5 md:my-8 gap-5'>
            {/* heading  */}
            <div className='flex w-full flex-col'>
                <Heading name={"Trust"} />
                <h1 className='text-[1.5rem] text-center font-semibold text-[#078652] capitalize'>
                    regulatory approvals / recognitions
                </h1>
            </div>

            {/* logos */}
            <div className='w-full flex md:justify-between flex-wrap items-center md:gap-0 gap-3'>
                {
                    approval.map((pro, i) => (
                        <div key={i} className={`h-[120px] w-[120px] md:h-[180px] md:w-[180px] bg-transprent bg-gradient-to-bl from-[#908ac79d] ${pro.bg} animate-[morph_8s_ease-in-out_both_infinite_alternate] flex justify-center m-auto text-white items-center  `}>

                            <div className=' h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full '>

                                <img className='h-full w-full rounded-full' src={pro.img} alt="" />
                            </div>

                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default Trust