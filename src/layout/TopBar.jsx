import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <div className='bg-[#078652] p-1 hidden md:flex'>
            <div className='w-[80%] flex justify-between m-auto'>

                <div className='flex flex-col items-center text-white text-bold text-md gap-2 '>
                    <a href='tel:' className='flex items-center gap-3'>
                        <span>Admission Enquiry :-</span>
                        <FaPhoneAlt />
                        +91-7991200379
                    </a>
                    <a className="flex items-center gap-3" href="tel:">
                        <span>BAMS Admission :-  </span>
                        <FaPhoneAlt />
                        +91-9839383928
                    </a>
                </div>

                <div className='flex items-center text-white text-bold text-xl gap-10 '>
                    <Link to={"/applynow"} className='bg-white p-3 text-green-900 font-semibold rounded-lg'>
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar
