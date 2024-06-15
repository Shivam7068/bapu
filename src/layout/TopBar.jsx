import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const TopBar = () => {
    return (
        <div className='bg-[#078652] p-1 hidden md:flex'>
            <div className='w-[80%] flex justify-between m-auto'>

                <div className='flex items-center text-white text-bold text-xl gap-10 '>
                    <a href='tel:' className='flex items-center gap-3'>
                        <FaPhoneAlt />
                        +91-7309740109
                    </a>
                    <a className="flex items-center gap-3" href="mailto: prakash0manish@gmail.com">
                        <IoMail />
                        prakash0manish@gmail.com
                    </a>
                </div>

                <div className='flex items-center text-white text-bold text-xl gap-10 '>
                    <button className='bg-white p-3 text-green-900 font-semibold rounded-lg'>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopBar
