import React, { useState } from 'react'
import Heading from '../common_comp/Heading'
import line from '/assets/border-shap.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const Choose = () => {
    const [Count, setCount] = useState(false)
    const data = [
        {
            // img: "/assets/chooseus/culture.png",
            number: 1,
            title: "National Award"
        },
        {
            // img: "/assets/chooseus/sports.png",
            number: 100,
            title: "Best Teachers"
        },
        {
            // img: "/assets/chooseus/teacher.png",
            number: 1800,
            title: "Students Enrolled"
        },
        {
            // img: "/assets/chooseus/scholarship.png",
            number: 13,
            title: "Department"
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center m-auto w-[90%] md:my-8 my-5'>
            {/* heading  */}
            <div className='flex w-full flex-col'>
                <Heading name={"Why choose us"} />
                <h1 className='text-[1.5rem] text-center font-semibold text-[#078652] capitalize'>
                    Experience the Difference
                </h1>
            </div>
            <div className='flex justify-around items-center m-auto my-10 w-full z-10 flex-wrap gap-3 '>
                {data.map((obj, i) => (
                    <div key={i} className='flex flex-col  w-[calc(50%-10px)] text-center md:w-[calc(33%-10px)] lg:w-[calc(25%-10px)] bg-[#7cb3cf75] justify-center items-center h-[150px] gap-4 rounded-xl border-b-[10px] border-[#235274] hover:border-b-0 ease-out hover:shadow-none shadow-gray-300 shadow-xl'>

                        <ScrollTrigger onEnter={() => setCount(true)}>
                            <div className='text-[32px] text-green-950 font-extrabold'>
                                {Count && <CountUp end={obj.number} duration={3} delay={0.5} />}  +
                            </div>
                        </ScrollTrigger>

                        <div className='text-[18px] md:text-[20px] font-bold'>
                            {obj.title}
                        </div>
                    </div>

                ))}
            </div>

            {/* paragraph */}

            <p className='flex justify-center items-center md:w-[60%] text-center text-[#717171] '>
                Embark on your path to Ayurvedic wellness at BAMC College. Our renowned faculty, practical curriculum, and focus on holistic medicine will equip you to excel as a compassionate and effective Ayurvedic practitioner. Join our vibrant community and unlock your potential in this fulfilling field.
            </p>

            {/* line border image  */}
            <div className='w-full lg:w-[60%] h-[20px] mt-10'>
                <img className='w-full h-full' src={line} alt="" />
            </div>
        </div >
    )
}

export default Choose