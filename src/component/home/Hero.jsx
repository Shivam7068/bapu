import React, { useRef, useState } from 'react'
import intro from '/assets/common_img/intro.mp4'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const { scrollY } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  let y = useTransform(scrollY, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className='hero max-w-screen h-[80vh] overflow-hidden relative bg-gradient-to-b from-[#9fa9ab00] to-[rgb(225,237,233)]'>
      <link rel="preload" as="video/mp4" href="/assets/common_img/intro.mp4" />
      <video autoPlay
        loop
        muted
        playsInline
        src={intro}
        preload="auto"
        style={{ y }}
        className='-z-[10] w-full h-full object-cover overflow-hidden top-0 absolute inset-0'
      >
        <source type='video/mp4' />
      </video>

      <div className='z-[10] flex justify-center flex-col items-center  h-full gap-5 mask relative'>
        <h1 className='md:text-5xl text-3xl font-extrabold text-black'>
          Bapu <span className='text-green-900'>Ayurvedic</span> College & Hospital
        </h1>
        <h2 className='md:text-2xl text-md text-center text-[#000080] font-bold '>
          Where ancient wisdom meets modern medicine.
        </h2>

        <div className='hidden md:flex gap-2 absolute bottom-0'>
          <h1 className='text-green-800 font-semibold '>
            Affilated By :-
          </h1>
          <h2 className='capitalize text-black md:text-[1rem] font-semibold'>
            guru gorakhnath university

          </h2>

        </div>
      </div>



    </section>
  )
}

export default Hero
