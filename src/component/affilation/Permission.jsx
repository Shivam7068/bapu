import React from 'react'
import Leftheading from '../common_comp/LeftHeading'
import permission from '../../data/permission'
const Permission = () => {
    return (
        <section className='w-[90%] flex flex-col m-auto my-10'>
            <div>
                <Leftheading name="Permission Letter" />
            </div>

            <div className='flex flex-col lg:flex-row w-full flex-wrap gap-y-8 gap-2 justify-center '>
                {
                    permission.map((item, index) => (
                        <div key={index} className='flex flex-col items-center w-full lg:w-[calc(50%-10px)] gap-5'>

                            {/* image */}
                            <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                                <img className='w-full h-full' src={item.img} alt="" />
                            </div>

                            {/* Heading */}
                            <h1 className=' text-xl text-blue-950 font-bold text-center'>
                                {item.title}
                            </h1>

                            {/* permission letter */}
                            <div className='flex flex-col w-full justify-between bg-gradient-to-r from-[#f6f9ce] to-[#b8f8e2] rounded-lg p-1 md:p-5'>
                                {
                                    item.letter.map((obj, i) => (
                                        <div key={i} className='flex gap-2 justify-between md:px-10'>

                                            <h4 className='py-2'>
                                                {obj.Heading}
                                            </h4>

                                            <a href={obj.link} target='_blank' className='text-purple-700 text-center'>
                                                Check Here
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default Permission
