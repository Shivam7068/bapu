import React, { useEffect, useState } from 'react'
import Heading from '../common_comp/Heading'
import { department } from '../../data/department'

const Department = () => {

    // logic for next and preview pagination 
    const [currentPage, setcurrentPage] = useState(1)
    const totalPages = Math.ceil(department.length / 3)

    useEffect(() => {
        setTimeout(() => {
            if (currentPage < totalPages) {
                setcurrentPage(currentPage + 1)
            }
            else {
                setcurrentPage(1)
            }
        }, 5000);
    }, [currentPage])

    const startIndex = (currentPage - 1) * 3
    const slicedData = department.slice(startIndex, startIndex + 3)

    return (

        <div className='flex flex-col gap-2 w-[90%] m-auto md:my-8 my-5'>
            <Heading name={"Department's"} />

            <p className='text-center text-sm font-semibold text-[#078652] capitalize'>
                BAPU Ayurvedic College & Hospital offers 13+ Department's
            </p>

            <div className='flex  w-[95%] overflow-hidden justify-center items-center m-auto flex-wrap'>
                {
                    slicedData.map((pro, i) => (
                        <div key={i} className='container my-[20px] bg-[#589b7f] overflow-hidden hover:shadow-[0_10px_20px_gray] relative flex sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] flex-col h-[200px] justify-center border-gray border-[2px] m-auto rounded-3xl'>
                            <div className="img absolute ease-out duration-30 bg-black object-cover z-[1] w-[100%] h-[100%]">
                                <img className="w-[100%] h-[100%]" width={180} height={180} loading='lazy' src={pro.img} srcSet={pro.img} alt="Departments images" />
                            </div>
                            <div className="absolute bottom-0 flex justify-center items-center w-full  font-semibold">
                                <div className='w-full flex justify-center text-white text-[20px] mx-[20px]'>{pro.title}</div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='flex justify-center items-center gap-x-10'>
                <span className='bg-[#1fb995] p-[10px] rounded-full'>{currentPage}/{totalPages}</span>
            </div>
        </div>
    )
}

export default Department

