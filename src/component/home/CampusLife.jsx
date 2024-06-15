import React from 'react'
import Heading from '../common_comp/Heading'

const CampusLife = () => {
    return (
        <div className='flex flex-col justify-center items-center m-auto w-[90%] md:my-8 my-5'>
            {/* heading  */}
            <div className='flex flex-col gap-2 justify-center items-center'>
                <Heading name={"Campus Life"} />
                <h1 className='text-[1.5rem] font-semibold text-[#078652] capitalize text-center'>
                    Thriving Beyond the Classroom
                </h1>
            </div>

            {/* main section starts here  */}


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 w-full mt-10">

                <div
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer">
                    <img src="/assets/gallery/DSC_3099-min.JPG" loading="lazy" alt="Image of our Herbal garden" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </div>

                <div
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 cursor-pointer">
                    <img src="/assets/gallery/DSC_2953-min.JPG" loading="lazy" alt="Image of Our Classes" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    {/* setting up color of backgroound to cover the light in image */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-900 opacity-50">
                    </div>
                </div>

                <div
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 cursor-pointer">
                    <img src="/assets/gallery/DSC_3044-min.JPG" loading="lazy" alt="Image of Our Labs" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </div>

                <div
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer">
                    <img src="/assets/gallery/DSC_2948-min.JPG" loading="lazy" alt="Image Of Library" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </div>

            </div>


        </div>
    )
}

export default CampusLife
