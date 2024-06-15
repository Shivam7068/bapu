import React from 'react'
import Heading from '../common_comp/Heading'
import line from '/assets/border-shap.png'
const Chooseus = () => {
    const data = [
        {
            img: "/assets/chooseus/culture.png",
            title: "Cultural Activity"
        },
        {
            img: "/assets/chooseus/sports.png",
            title: "Sports"
        },
        {
            img: "/assets/chooseus/teacher.png",
            title: "Seminars"
        },
        {
            img: "/assets/chooseus/scholarship.png",
            title: "Scholarship"
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

            {/* Main container */}
            <div className='flex justify-around items-center m-auto mt-10 relative w-full z-10 before:absolute before:content-["_"] before:h-[50%] before:bg-[#c5dfdc5e] before:w-[50%] before:-z-[1] before:left-20 before:rounded-full before:animate-[Translate_3s_infinite_ease_alternate] before:blur flex-wrap'>

                {
                    data.map((obj, i) => (

                        <div key={i} className='flex flex-col justify-center items-center w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-10px)] h-[150px] relative rounded-[50px] my-10'>
                            <div className='w-full h-[120px] absolute flex justify-center items-center top-[-60px]'>
                                <img className='h-full ' src={obj.img} srcSet={obj.img} alt="Image that define our quality's" />
                            </div>
                            <h1 className='bg-[#7cb3cf75] h-full flex justify-center items-end backdrop:blur-sm p-12 w-full rounded-xl text-center font-semibold text-xl'>
                                {obj.title}
                            </h1>
                        </div>
                    ))
                }
            </div>

            {/* paragraph */}

            <p className='flex justify-center items-center md:w-[60%] text-center text-[#717171] '>
                Embark on your path to Ayurvedic wellness at BAMC College. Our renowned faculty, practical curriculum, and focus on holistic medicine will equip you to excel as a compassionate and effective Ayurvedic practitioner. Join our vibrant community and unlock your potential in this fulfilling field.
            </p>

            {/* line border image  */}
            <div className='w-full lg:w-[60%] h-[20px] mt-10'>
                <img className='w-full h-full' src={line} alt="" />
            </div>
        </div>
    )
}

export default Chooseus