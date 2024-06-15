import React from 'react'
import Pagetitle from '../component/common_comp/Pagetitle'
import ncism from '../data/ncism'
import { Link } from 'react-router-dom'
const Ncism = () => {
    return (
        <section className='w-full '>
            <Pagetitle title="9(2) Of NCISM MSR" />

            <div className='p-8 w-full bg-purple-100 flex flex-col md:flex-row justify-between flex-wrap gap-y-10'>
                {
                    ncism.map((item, i) => (
                        <div key={i} className={`w-full md:w-[45%] flex flex-col gap-5`}>
                            <h1 className='text-xl flex  text-purple-700 font-bold'>
                                {item.title}
                            </h1>
                            <div className='flex flex-col gap-5 mx-10'>
                                {
                                    item.links.map((link, i) => (
                                        <li key={i} className=''>
                                            <Link to={link.links}>
                                                {link.heading}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div >
        </section >
    )
}

export default Ncism