import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5"
import { Link } from 'react-router-dom'
import { dropdownMenus } from '../data/nav'
import Dropdown from './Dropdown'
import logo from '/assets/logo.png'
import TopBar from './TopBar'

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false)
  if (showMenu) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return (
    <div className='bg-white'>
      <TopBar />

      {/* nav bar started  */}

      <nav className='w-full'>
        <div className='flex justify-between items-center flex-col lg:flex-row gap-3 px-4'>

          {/* logo */}
          <div className='flex items-center h-[80px] '>


            <div className='flex h-full'>
              <img className='h-full' src={logo} alt="Bapu " srcSet={logo} />
            </div>
            <div className={`flex lg:hidden bg-green-800 text-white text-xl absolute left-0 z-[9999] p-2 rounded-full`} onClick={() => setshowMenu(!showMenu)}>
              <IoMenu />
            </div>

          </div>

          {/* links */}

          <ul className={`flex lg:justify-end lg:text-lg gap-5 lg:w-full lg:px-5 capitalize text-green-700 lg:relative lg:flex-row flex-col h-[100vh] lg:h-auto w-[80%] absolute z-[999] bg-white items-center justify-center top-0  ${showMenu ? 'left-0 overflow-hidden' : 'left-[-100%]'} lg:left-auto`}
          >

            <Link to="/" className='text-green-700 hover:bg-[#49b845] hover:text-white p-2' >Home</Link>

            <Link to="/ncism" className='hover:bg-[#49b845] hover:text-white text-green-700 p-2'>NCISM Mandates</Link>

            {/* drop down nav links are her */}
            {
              dropdownMenus.map((item, i) => (

                <Dropdown key={i} item={item} />
              )
              )
            }

            {/* <li className='hover:bg-[#49b845] hover:text-white text-green-700 p-2'>Student Corner</li> */}
            <Link to="facility" className='hover:bg-[#49b845] hover:text-white text-green-700 p-2'>Facilities</Link>
            <Link to="Gallery" className='hover:bg-[#49b845] hover:text-white text-green-700 p-2'>Gallery</Link>
          </ul>
        </div>
      </nav>


    
    </div>
  )
}

export default Navbar
