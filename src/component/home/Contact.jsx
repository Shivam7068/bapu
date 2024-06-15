import React from 'react'
import Heading from '../common_comp/Heading'
import library from '/assets/facility/library.jpg'
const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center m-auto w-[90%] md:my-8 my-5 '>

            {/* heading  */}
            <div className='flex w-full flex-col'>
                <Heading name={"Contact Us"} />
                <h1 className='text-[1.5rem] text-center font-semibold text-[#078652] capitalize'>
                    Have a Question
                </h1>
            </div>

            {/* main form  */}

            <div className='flex flex-row-reverse gap-4 h-full items-center justify-center w-full my-5'>
                <div className='hidden md:flex justify-center items-center w-[50%] bg-black'>
                    <img className='h-full w-full' src={library} alt="" />
                </div>
                <div className='flex w-full md:w-[50%] h-full justify-center items-center'>

                    <form action="" className='flex flex-col justify-center items-center gap-5 w-full md:w-[80%]'>
                        <input className='w-full p-2 outline-none border-2 border-gray-600 rounded-lg'
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            required
                        />
                        <input className='w-full p-2 outline-none border-2 border-gray-600 rounded-lg' type="email" name="email" placeholder="Your Email" required />
                        <input className='w-full p-2 outline-none border-2 border-gray-600 rounded-lg'
                            type="number"
                            name="neet"
                            placeholder="Your NEET Score"
                            required
                        />
                        <textarea className='w-full p-2 outline-none border-2 border-gray-600 rounded-lg'
                            name="message"
                            rows="7"
                            placeholder="Your Mesaage Here"
                            required
                        ></textarea>

                        <button className='bg-green-700 hover:bg-green-600 w-[30%] p-4 rounded-lg text-white capitalize'>
                            submit
                        </button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default Contact
