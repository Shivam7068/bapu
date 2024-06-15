import React from 'react'
import LeftHeading from '../common_comp/LeftHeading'
import img from '/assets/block.jpg'
const Aboutus = () => {
    return (
        <>
            <section className='flex justify-center m-auto w-[90%]  '>
                <div className='flex lg:flex-row flex-col gap-10 w-full justify-between my-[50px] relative  '>

                    <div className='flex flex-col w-full lg:w-[50%] gap-3 '>
                        <LeftHeading name="About us" />
                        <h3 className='text-[#078652] stroke-blue-950	 text-[30px] font-extrabold capitalizeb '>
                            Welcome to Bapu Ayurvedic <br /> College & Hospital
                        </h3>

                        <p>
                            The Bapu Ayurvedic College & Hospital was established with an aim to restore the glory of Ayurveda through quality education imparted to hungry minds. While there is no dearth of Ayurvedic medical practitioners in India, there is a need to streamline scientific Ayurvedic medical science education and offer it to young students who wish to practice Ayurveda as a form of medicine.
                        </p>
                        <p>
                            The institution strives to maintain the rich heritage of Ayurveda and live up to the legacy of the Indian physicians of old, who were one with nature, and cured every illness using herbs and plants, and spread their knowledge across the world. What started as a form of personal social responsibility of the eminent philanthropist and educationist Prakash Chandra Rai led to the founding of Bapu Ayurvedic College & Hospital. Join the movement, embrace the rich heritage of our culture and return to harmony with Mother Nature.


                        </p>
                    </div>


                    <div className='flex flex-col w-[full] lg:w-[45%] h-[50vh] lg:absolute lg:right-[0] lg:top-[-80px] border-white border-[10px] rounded-lg shadow-2xl  shadow-black'>
                        <img className='w-full h-full rounded-lg' src="/assets/common_img/campus_2.jpg" alt="" />
                    </div>

                    <div className='lg:flex w-[200px] h-[200px] flex-col lg:absolute hidden right-0  bottom-[-30px] rounded-lg z-[-1]'>
                        <img className='w-full h-full rounded-lg' src={img} alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Aboutus
