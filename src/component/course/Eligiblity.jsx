import React from 'react'
import Heading from '../common_comp/Heading'
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, Bs4CircleFill } from "react-icons/bs";

import img from '/assets/eligible.png'
const Eligiblity = () => {
    const eligiblity = [
        {
            img: <Bs1CircleFill />,
            title: "Passed 12th Science (PCB) or equivalent with minimum 50% aggregate.",
        },
        {
            img: <Bs2CircleFill />,
            title: "Reserved category students (e.g., physically challenged) may get relaxed marks for BAMS admission as per UP Govt. rules.",
        },
        {
            img: <Bs3CircleFill />,
            title: "Foreign students meeting Indian Government (AYUSH/NCISM) or equivalent qualifications can apply.",
        },
        {
            img: <Bs4CircleFill />,
            title: "AGE LIMIT : NO AGE LIMIT FOR ELIGIBLE CANDIDATES.",
        }
    ]
    return (
        <section className='w-[90%] flex flex-col m-auto gap-2'>
            <div className='w-full flex justify-center flex-col items-center gap-2'>
                <Heading name="Eligiblity" />
                <h1 className='text-center font-bold text-2xl leading-10 text-[#1fb995]'>
                    ELIGIBILITY CRITERIA FOR  ADMISSION <br /> IN BAMS
                </h1>
            </div>

            {/* main Container  */}
            <div className='flex flex-col-reverse md:flex-row w-full justify-between items-center'>

                <div className='flex justify-center w-full lg:w-[60%] flex-wrap gap-5'>
                    {
                        eligiblity.map((obj, i) => (
                            <div key={i} className='flex flex-col md:flex-row  lg:w-[calc(50%-10px)] justify-between items-center gap-3  lg:py-10'>
                                <div className='p-4 rounded-full overflow-hidden text-[30px]'>
                                    {obj.img}

                                </div>
                                <p className='w-full flex justify-center items-center md:text-start text-center lowercase '>
                                    {obj.title}
                                </p>
                            </div>
                        ))
                    }
                </div>

                {/* image section */}

                <div className='w-[40%] h-full hidden lg:flex justify-center m-auto items-center'>
                    <img className='h-full w-full lg:w-[500px] ' src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Eligiblity
