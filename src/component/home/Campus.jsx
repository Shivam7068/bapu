import React from 'react'
import Heading from '../common_comp/Heading'
// import intro from '/assets/intro_2.mp4'
import { motion } from 'framer-motion'
const Campus = () => {
    return (
        <div className='flex flex-col w-[90%] m-auto md:my-8 my-5'>


            {/* heading section */}
            <div className='flex w-full flex-col justify-center items-center gap-2'>
                <Heading name={"Campus"} />
                <h3 className='text-[1.5rem] font-semibold text-[#078652] capitalizeb text-center'>
                    Welcome to Bapu Ayurvedic <br /> College & Hospital
                </h3>
            </div>

            {/* video Link */}
            <div className="flex justify-between items-center w-full my-10 overflow-hidden flex-wrap md:gap-0 gap-4 relative">

                <motion.div
                    initial={{ x: '-100%' }} whileInView={{ x: "0%" }} viewport={{ once: true }} transition={{ duration: 1, type: 'spring' }} className='flex w-full md:w-[calc(50%-1px)] h-[50vh] justify-center items-center overflow-hidden gap-2 relative'>
                    {/* <video autoPlay
                        loop
                        muted
                        playsInline
                        src="/assets/common_img/intro.mp4"
                        className='-z-[10] w-full h-full object-cover top-0 absolute inset-0 rounded-xl'
                    >
                        <source type='video/mp4' />
                    </video> */}
                    <img src="/assets/common_img/campus_2.jpg" alt="" className='-z-[10] w-full h-full object-cover top-0 absolute inset-0 rounded-xl' /> alt="" /
                </motion.div>


                <motion.div initial={{ x: '100%' }} whileInView={{ x: "0%" }} viewport={{ once: true }} transition={{ duration: 1, type: 'spring' }} className='flex w-full md:w-[calc(47%-10px)] justify-center items-center overflow-hidden gap-2 text-[#717171]'>
                    The Bapu Ayurvedic College & Hospital was established with an aim to restore the glory of Ayurveda through quality education imparted to hungry minds. While there is no dearth of Ayurvedic medical practitioners in India, there is a need to streamline scientific Ayurvedic medical science education and offer it to young students who wish to practice Ayurveda as a form of medicine. <br /> <br />

                    The institution strives to maintain the rich heritage of Ayurveda and live up to the legacy of the Indian physicians of old, who were one with nature, and cured every illness using herbs and plants, and spread their knowledge across the world. What started as a form of personal social responsibility of the eminent philanthropist and educationist Prakash Chandra Rai led to the founding of Bapu Ayurvedic College & Hospital. Join the movement, embrace the rich heritage of our culture and return to harmony with Mother Nature.
                </motion.div>

            </div>
        </div>

    )
}

export default Campus