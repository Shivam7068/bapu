import React from 'react'
import LeftHeading from '../common_comp/LeftHeading' 
import chairman from '/assets/chairman.jpg'


const Chairman = () => { 
    return (

        <div className='flex w-[90%] m-auto md:my-8 my-5'>
            <div className='flex md:flex-row flex-col-reverse w-full justify-between items-center'>

                {/* image section */}
                <div className='flex justify-center items-center m-auto w-[80%] md:w-[40%] h-[50vh] overflow-hidden rounded-lg [clip-path:inset(0%_10%_0%_8%_round_5%_20%_0_10%)]' >
                    <img className='w-full h-full ' src={chairman} alt="" />
                </div>

                <div className='flex flex-col md:w-[55%] gap-5 justify-center mb-5 md:mb-0'>

                    {/* heading */}
                    <div className='flex flex-col gap-2'>
                        <LeftHeading name={"Our Mentor"} />
                        <h1 className='text-[1.5rem] font-semibold text-[#1fb995] capitalize'>
                            Meet our chairman sir
                        </h1>
                    </div>

                    {/* Chairman sir message  */}
                    <p className='flex  flex-col gap-2 text-gray-500 md:text-[17px] '>
                        <span className='font-bold'>
                            Prakash Chandra Rai
                            ( Chairman )
                        </span>
                        Trust is made up of individuals. The thoughts and of each individual influence the culture of that trust instead of waiting for others to improve, you should try to improve ourselves. Once our attitude has changed. we will be able to perceive goodness thoughout world. If there is a positive change in us. It will also be reflected in others. It is only what we give that you can hope to get back.
                        <br />
                        “Knowledge is like a river. Its nature is to flow”.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Chairman
