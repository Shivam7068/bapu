import React from 'react'
import Heading from '../common_comp/Heading'
import LeftHeading from '../common_comp/LeftHeading'

const Motto = () => {
    return (
        <>
            <section className='w-[90%] flex flex-col m-auto justify-between gap-8 my-10'>
                <Heading name="Our Purpose " />

                <div className='flex flex-col md:flex-row w-full m-auto justify-between gap-8'>
                    {/* mission statement  */}
                    <div className='flex flex-col gap-5 md:w-[50%]  items-center'>
                        <h1 className=' text-[30px] font-extrabold text-[#078652]'>
                            Our Mission
                        </h1>
                        <p className='flex justify-center items-center text-gray-800'>
                        At Bapu Ayurvedic College & Hospital, our mission is to nurture the next generation of Ayurvedic healers and leaders by providing holistic education, innovative research opportunities, and compassionate healthcare services. We are committed to upholding the ancient traditions of Ayurveda while embracing modern advancements, empowering our students to become lifelong learners and agents of positive change in the world
                        </p>
                    </div>

                    {/* Vision statement */}
                    <div className='flex flex-col gap-5 md:w-[50%] justify-center items-center'>
                        <h1 className=' text-[30px] font-extrabold text-[#078652]'>
                            Our Vision
                        </h1>
                        <p className='text-gray-800'>
                        Our vision is to be a global center of excellence in Ayurvedic education, research, and healthcare, renowned for our unwavering commitment to academic excellence, ethical practice, and community engagement. We aspire to inspire and empower individuals to lead healthier, happier lives by promoting the principles of Ayurveda and fostering holistic well-being for all. Through collaboration, innovation, and dedication, we envision a future where Ayurveda is recognized and respected as a cornerstone of integrative medicine, transforming lives and shaping a healthier, more harmonious world for generations to come.                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Motto
