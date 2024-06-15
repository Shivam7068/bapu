import React from 'react'
import Hero from '../component/home/Hero'
import Ayurveda from '../component/home/Ayurveda'
import Department from '../component/home/Department'
import Chairman from '../component/home/Chairman'
import Campus from '../component/home/Campus'
import Chooseus from '../component/home/Chooseus'
import Trust from '../component/home/Trust'
import Testimonials from '../component/home/Testimonials'
import Contact from '../component/home/Contact'
import CampusLife from '../component/home/CampusLife'
import VideoTestimonials from '../component/home/VideoTestimonials'
import Choose from '../component/home/Choose'

const Home = () => {
  return (
    <div >
      <Hero />
      <Ayurveda />
      <Campus />
      <Choose />
      {/* <Chooseus /> */}
      {/* <Chairman /> */}
      {/* <Department /> */}
      <CampusLife />
      <Testimonials />
      <VideoTestimonials />
      {/* <Contact /> */}
      <Trust />
    </div>
  )
}

export default Home