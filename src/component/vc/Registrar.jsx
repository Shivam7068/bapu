import React from 'react';
import Registrars from '../../data/Registrar';
import LeftHeading from "../common_comp/LeftHeading";

const RegistrarComponent = () => { // Renamed the component to RegistrarComponent
    return (
        <>
            <div className='w-[90%] m-auto pt-5'>

                <LeftHeading name={"Registrar"} />
            </div>
            {Registrars.map((registrar, index) => ( // Changed the variable name to registrar
                <section key={index} className='w-[90%] flex flex-col m-auto py-[80px] gap-10'> {/* Removed the key prop */}
                    <div className={`flex flex-col-reverse md:${index % 2 == 0 ? "flex-row" : "flex-row-reverse"} justify-between gap-5`}>
                        <div className='md:w-[60%] w-full flex-col gap-5 justify-center items-center'>
                            <h1 className='text-lg font-bold'>{registrar.name}</h1> {/* Accessed name property */}
                            <div className='flex flex-wrap gap-4'>
                                <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{registrar.Email}</div> {/* Accessed Emailmail property */}
                                <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{registrar.contact}</div> {/* Accessed contact property */}
                                <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{registrar.title}</div>
                                {/* Accessed contact property */}
                            </div>
                            <p className='text-center p-5 text-black-900'>{registrar.moreinfo}</p>
                            <a href={registrar.moreinfo_link} className="no-underline text-Purple-900 hover:text-green-700">Click here</a>
                        </div>
                        <div className='w-full md:w-[40%] h-[350px] flex justify-center items-center m-auto'>
                            <img className='max-w-[650px] w-full h-full flex justify-center object-contain' src={registrar.img} alt="" />
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
export default RegistrarComponent; // Renamed the export to RegistrarComponent
