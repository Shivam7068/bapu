import { React, useEffect, useState } from 'react'
import management, { Chairman, Director, Medical_Superintendent, Principal, Secretary } from '../../data/management'
import LeftHeading from '../common_comp/LeftHeading'
const Meetmentor = () => {
    const [selected, setSelected] = useState("Chairman")
    const [data, setdata] = useState([])

    useEffect(() => {
        switch (selected) {
            case "Chairman":
                setdata(Chairman)
                break;

            case "Director":
                setdata(Director)
                break;

            case "Secretary":
                setdata(Secretary)
                break;

            case "Principal":
                setdata(Principal)
                break;
            case "Medical Superintendent":
                setdata(Medical_Superintendent)
                break;


            default:
                setSelected(Chairman)
                break;
        }
    }, [selected])
    return (
        <>
            <section className='w-[90%] flex flex-col m-auto py-[95px] gap-10'>
                <LeftHeading name="Meet out Mentor's" />

                {/* Links and Navigation */}
                <div className='flex gap-2 md:gap-10 justify-center items-center flex-wrap'>
                    {
                        management.map((item, index) => (
                            <li onClick={() => setSelected(item.title)} key={index} className={`flex ${selected == item.title ? "bg-purple-700 text-white" : "bg-green-50 text-purple-900"} capitalize text-lg md:text-xl cursor-pointer p-4  rounded-full`}>
                                {item.title}
                            </li>
                        ))
                    }
                </div>


                {/* main Mentor's message */}

                {
                    data.map((item, index) => (


                        <div key={index} className='flex flex-col-reverse md:flex-row justify-between gap-5'>
                            <div className='md:w-[60%] w-full flex flex-col gap-5 justify-center items-center'>
                                <h1 className=' text-lg font-bold'>
                                    {item.name}
                                </h1>

                                {/* details */}

                                <div className='flex flex-wrap gap-4'>
                                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900 '>Education:- {item.education}</div>
                                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900 '>Join At :- {item.dob}</div>
                                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900 '>Connect At :- {item.email}</div>
                                </div>

                                <p className='text-lg'>
                                    {item.msg}
                                </p>

                            </div>
                            {/* image */}
                            <div className='w-full md:w-[40%] h-[350px] flex justify-center items-center m-auto '>
                                <img className='max-w-[650px]  w-full h-full flex justify-center  object-contain' src={item.img} alt="" />
                            </div>

                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Meetmentor