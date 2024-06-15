import React from 'react'
import Heading from '../common_comp/Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { testimonials } from '../../data/testimonial';
import doted_props from '/assets/logos/doted_props.png';
import circle_props from '/assets/logos/circle_props.png';
const Testimonials = () => {

    // Crousel settings
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };


    return (
        <div className='w-full relative'>

            <div className='flex flex-col w-[90%] m-auto md:my-8 my-5'>
                {/* heading  */}
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <Heading name={"Testimonials"} />
                    <h1 className='text-[1.5rem] font-semibold text-[#078652] capitalize text-center'>
                        What People say About us
                    </h1>

                </div>

                {/* background props  */}

                <div className='absolute bottom-[0] h-[150px] left-[0px]'>
                    <img className='h-full' src={doted_props} alt="" />
                </div>

                <div className='absolute top-[320px] h-[150px] right-[0px]'>
                    <img className='h-full' src={circle_props} alt="" />
                </div>

                {/* Crousel */}
                <div className='w-full my-10'>
                    <Slider {...settings}>
                        {
                            testimonials.map((obj, i) => (
                                <div key={i} className='flex w-full flex-col bg-[#eee] border-none shadow-none items-center justify-center relative before:absolute before:content-["_"] before:h-[80px] before:bg-white before:w-full before:top-0'>

                                    {/* testimonial image  */}
                                    <div className=' flex outline-none border-none w-full justify-center items-center'>

                                        <div className='flex w-[150px] h-[150px] rounded-full overflow-hidden z-[99] border-4 border-white '>

                                            <img className='h-full w-full' src={obj.image} alt="" />

                                        </div>

                                    </div>
                                    {/* name and quote */}
                                    <div className='text-center flex flex-col gap-5 py-[10px]'>
                                        <h1 className='text-lg font-bold text-blue-500'>
                                            {obj.name}
                                        </h1>
                                        <p className='border-t-2 py-[20px] border-dashed border-gray-600'>
                                            {obj.quote}
                                        </p>
                                    </div>
                                </div>

                            ))
                        }
                    </Slider >
                </div>
            </div>

        </div>
    )
}

export default Testimonials