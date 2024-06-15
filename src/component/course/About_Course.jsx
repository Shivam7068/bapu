import React from 'react'
import line from '/assets/border-shap.png'
const About_Course = () => {
    return (
        <>
            <section className='flex flex-col my-10 m-auto w-[90%]'>
                {/* heading  */}
                <div className=''>
                    <p className=' text-sm md:text-xl text-center leading-10 text-purple-900 font-semibold'>
                        BAMS COURSE (5& ½ YEARS) IS APPROVED BY MINISTRY OF AYUSH, GOVERNMENT OF INDIA, AND NATIONAL COMMISSION FOR INDIAN SYSTEM OF MEDICINE (NCISM).
                    </p>

                    <div className='w-full flex h-5 justify-center my-10  m-auto'>
                        <img className='md:w-[50%]' src={line} alt="" />
                    </div>
                </div>

                {/* About the course */}
                <div className='w-full flex justify-center items-center flex-col gap-10'>
                    <h1 className='text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-t from-black to-[#1fb995] text-center'>
                        About 5 ½ years Degree in Ayurveda Course
                    </h1>

                    <p className='text-center leading-8 font-medium text-lg'>
                        B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery): 4 ½ Years (Full Time) plus 1-year compulsory Internship.
                        <br />
                        The Degree course of B.A.M.S. a period of 5 ½ years, including compulsory Internship of one-year duration after passing the Final Degree Examination, on successful completion of the internship and on the recommendation of the principal of the college concerned the University shall issue the degree to such conditions.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About_Course