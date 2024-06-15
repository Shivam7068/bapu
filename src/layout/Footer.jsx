import React from 'react'

import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa"
import { about, footer, social } from '../data/footerLinks'
import Whatsapp from './Whatsapp'
const Footer = () => {
  return (

    <footer className="w-[90%] m-auto ">
      <hr className=" border-black sm:mx-auto mt-6" />

      <div className="m-auto w-full ">
        <div className="md:flex md:justify-between my-4 gap-5">
          <div className="mb-6 md:mb-0">
            <Link to={"/"} className="flex items-center justify-center ">
              <img src="/assets/logos/bamchLogo.jpg" className=" h-16 me-3" alt="Logo" />
            </Link>

            <div className='mt-8 mx-5'>
              <div className='mb-3 md:mb-3 text-sm font-semibold text-gray-700 uppercase dark:text-white'>
                Contact Us:-
              </div>
              <div className='text-[#15803d]'>
                Bapu Ayurvedic Medical College & Hospital <br />
                Laadanpur, Kopaganj, Mau (U.P.) - 275101
              </div>

              <div className='flex gap-3 mt-4'>
                <div className='flex justify-center items-center text-[#15803d]'>
                  <FaPhoneAlt />

                </div>
                <div className='text-[#15803d]'>
                  <a href="tel:"> +91-7991200379</a> || <a href="tel:">+91-9839383928</a>
                </div>
              </div>


            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between md:flex-row flex-col">
            <div className='flex flex-col mx-5'>
              <h2 className="mb-3 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
              <ul className="text-[#15803d] dark:text-gray-400 font-medium flex flex-col gap-2">
                {
                  footer.map((obj, i) => (
                    <Link key={i} to={obj.link} className=" hover:opacity-75 ">{obj.title}</Link>
                  ))
                }
              </ul>
            </div>
            <div className='flex flex-col ml-5 my-4 md:ml-12 md:my-0'>
              <h2 className="mb-3 md:mb-6 text-sm font-semibold text-gray-700 uppercase dark:text-white">About us</h2>
              <ul className="text-[#15803d] dark:text-gray-400 font-medium flex flex-col gap-2">
                {
                  about.map((obj, i) => (
                    <Link key={i} to={obj.to} className=" hover:opacity-75 ">{obj.title}</Link>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <hr className=" border-gray-500 sm:mx-auto mt-6" />

        <div className="sm:flex sm:items-center sm:justify-between py-4">
          <h3 className='text-center'>
            © 2024 Bapu Ayurvedic College & Hospital
            . All rights reserved.
          </h3>

          {/* social media links */}
          <div className="flex mt-4 md:mt-0 gap-8 justify-center">
            <a className="text-xl text-[#15803d] hover:text-[#407654]" href="https://www.facebook.com/bamchmau/">
              <FaFacebook />
            </a>
            <a className="text-xl text-[#15803d] hover:text-[#15803d]" href="https://www.instagram.com/explore/locations/105861897750708/bapu-ayurvedic-medical-college-and-hospital-mau/">
              <FaInstagram />
            </a>
            <a className="text-xl text-[#15803d] hover:text-[#15803d]" href="https://www.youtube.com/@BapuAyurvedicMedicalCollege">
              <FaYoutube />
            </a>
            <a className="text-xl text-[#15803d] hover:text-[#15803d]" href="#">
              <FaTwitter />
            </a>
          </div>
          {/* social link ended  */}

        </div>
      </div>

    </footer >

  )
}

export default Footer
