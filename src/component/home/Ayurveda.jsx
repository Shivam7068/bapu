import React from 'react'
import ayurveda from '/assets/ayurveda.png'
const Ayurveda = () => {
    return (
        <div className='flex justify-between items-center bg-transprent bg-gradient-to-t from-[#ffffff55] to-[rgb(225,237,233)] object-cover'>
            <div className='flex md:flex-row flex-col w-[90%] m-auto  '>

                {/*  about the ayurveda */}
                <div className='flex flex-col items-center justify-center md:flex-1 md:gap-10 gap-5'>
                    <h1 className='text-2xl lg:text-4xl font-extrabold text-[#1e1d1ddf]'>
                        Unlocking the Power of
                        <span className=' text-green-700'> Ayurveda</span> for a Healthier Future
                    </h1>
                    <p className='max-w-[650px] text-gray-500 lg:text-lg text-md'>
                        Ayurveda, the ancient Indian system of medicine, offers holistic solutions for optimal health and well-being. Our college is dedicated to preserving and promoting this timeless knowledge, empowering students to become skilled Ayurvedic doctors.
                    </p>
                </div>

                {/* image relate to ayurveda  */}
                <div className='flex md:flex-1 max-w-[820px] w-full h-[40vh] md:h-[70vh] object-cover animate-[Bounce_1s_infinite_ease_alternate]'>
                    <img className='w-full h-full' src={ayurveda} srcSet={ayurveda} alt="Image Related to Ayurveda" />
                </div>
            </div>
        </div>
    )
}

export default Ayurveda
