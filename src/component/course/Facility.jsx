import React from 'react'
import Leftheading from '../common_comp/LeftHeading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { facility } from '../../data/facility';
import img from '/assets/facility/graduation_.png'

const Facility = () => {

    // Crousel settings
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 400,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1092,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <section className='flex md:flex-row flex-col justify-between my-16 w-[90%] m-auto relative'>

            {/* left side */}
            <div className='flex w-full md:w-[30%] gap-2 flex-col'>
                <Leftheading name="Facilities" />
                <h1 className='text-3xl font-bold text-purple-800'>
                    Facilities We Provide
                </h1>
                <p className='w-full text-gray-700 text-md my-8 z-[99]'>
                    Bapu Medical College/Hospital Provide Best Facility With the ancient Indian system of medicine, offers holistic solutions for optimal health and well-being.
                </p>

                <img className='absolute w-[250px] lg:h-[250px] xl:h-[350px] -bottom-14 hidden lg:block animate-[Bounce_1s_infinite_ease_alternate]' src={img} alt="" />
            </div>

            {/* right side */}
            <div className='flex justify-center m-auto w-[95%] md:w-[65%]'>
                {/* Crousel */}
                <div className='w-full my-10'>
                    <Slider {...settings}>
                        {
                            facility.map((obj, i) => (
                                <div key={i} className='flex w-full flex-col bg-[#eee] border-none shadow-none items-center justify-center rounded-lg '>

                                    {/* testimonial image  */}
                                    <div className='flex outline-none border-none w-full justify-center items-center rounded-lg overflow-hidden'>

                                        <div className='flex w-full h-[200px] overflow-hidden z-[99]'>

                                            <img className='h-full w-full' src={obj.img} alt="" />

                                        </div>

                                    </div>
                                    {/* name and quote */}
                                    <div className='text-center flex flex-col gap-5 py-[10px]'>
                                        <h1 className='text-lg font-bold text-blue-500'>
                                            {obj.title}
                                        </h1>
                                        <p className='border-t-2 py-[20px] border-dashed border-gray-600'>
                                            {obj.para}
                                        </p>
                                    </div>
                                </div>

                            ))
                        }
                    </Slider >
                </div>
            </div>

        </section>
    )
}

export default Facility