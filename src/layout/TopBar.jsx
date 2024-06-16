import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className='bg-[#078652] p-1 flex md:flex-row flex-col'>
            <div className='md:w-[80%] w-full flex justify-between m-auto md:flex-row flex-col gap-5'>

                <div className='flex flex-col items-center text-white text-bold text-md gap-2 '>
                    <a href='tel:' className='flex items-center gap-3'>
                        <span>Admission Enquiry :-</span>
                        <div>
                            <span className='flex  justify-center items-center gap-3'>

                                <FaPhoneAlt />
                                +91-7991200379
                            </span>
                            {/* </a> */}
                            {/* <a className="flex items-center gap-3" href="tel:"> */}
                            {/* <span>BAMS Admission :-  </span> */}
                            <span className='flex  justify-center items-center gap-3'>

                                <FaPhoneAlt />
                                +91-9839383928
                            </span>
                        </div>
                    </a>
                </div>

                <div className='md:flex hidden items-center text-white text-bold text-xl gap-10 md:m-0 m-auto'>
                    <a href={"/applynow"} className='bg-white p-3 text-green-900 font-semibold rounded-lg'>
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar
