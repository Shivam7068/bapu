import React from 'react'
import Heading from '../common_comp/Heading'

const VideoTestimonials = () => {
    const url = [
        {
            link: "https://www.youtube.com/embed/ohPfRlw3WII?si=zIhK8gDLncQzqRr_&amp;controls=0"
        },
        {
            link: "https://www.youtube.com/embed/04R-4wRemB8?si=oQufSUZbb4eS4wr6&amp;controls=0"
        },
    ]
    return (
        <div className='w-full relative'>

            <div className='flex flex-col w-[90%] m-auto md:my-8 my-5'>
                {/* heading  */}
                <div className='flex flex-col justify-center items-center'>
                    <Heading name={"Testimonials"} />
                    <h1 className='text-[1.5rem] font-semibold text-[#078652] capitalize text-center'>
                        Student Success Stories
                    </h1>

                </div>



                {/* Crousel */}
                <div className="flex justify-between gap-2 flex-col sm:flex-row mt-10">

                    {
                        url.map((obj, i) => (
                            // <iframe width="560" height="315" src="https://www.youtube.com/embed/04R-4wRemB8?si=oQufSUZbb4eS4wr6&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            <iframe key={i} src={obj.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="sm:w-[400px] lg:w-[650px] h-[315px]"></iframe>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default VideoTestimonials