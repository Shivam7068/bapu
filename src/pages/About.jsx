import React from 'react'
import Aboutus from '../component/about/Aboutus'
import Testimonials from '../component/home/Testimonials'
import Meetmentor from '../component/about/Meetmentor'
import Pagetitle from '../component/common_comp/Pagetitle'
import Motto from '../component/about/Motto'
const About = () => {
    return (
        <>
            <Pagetitle title="About Us" />
            <Aboutus />
            <Motto /> 
            <Testimonials/>
        </>
    )
}

export default About
