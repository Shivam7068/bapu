import React from 'react'

const Img_textCard = ({ obj }) => {
    return (
        < >
            {/* <div className='w-full md:w-[40%] h-[350px] flex justify-center items-center m-auto'>
                <img className='max-w-[650px] w-full h-full flex justify-center object-contain' src={obj.img} alt="" />
            </div>
            <div className='md:w-[60%] w-full flex-col gap-5 justify-center items-center'>
                <h1 className='text-lg font-bold'>{obj.name}</h1>
                <div className='flex flex-wrap gap-4'>
                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{obj.education || obj.dob}</div>
                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{obj.experience}</div>
                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{obj.email}</div>
                    {
                        obj.number &&
                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'> </div>
                    }
                </div>
                <p className="text-lg pt-4">{obj.about || obj.msg}</p>
            </div> */}


            <div className='md:w-[60%] w-full flex flex-col gap-5 justify-center items-center'>
                <h1 className=' text-lg font-bold'>
                    {obj.name}
                </h1>

                {/* details */}

                <div className='flex flex-wrap gap-4'>
                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900 '> {obj.education || obj.experience}</div>
                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900 '>  {obj.dob || obj.post}</div>
                    <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900 '>Connect At :- {obj.email}</div>

                </div>

                <p className='text-lg'>
                    {obj.msg || obj.about}
                </p>

            </div>
            {/* image */}
            <div className='w-full md:w-[40%] h-[350px] flex justify-center items-center m-auto '>
                <img className='max-w-[650px]  w-full h-full flex justify-center  object-contain' src={obj.img} alt="" />
            </div>
        </ >
    )
}

export default Img_textCard