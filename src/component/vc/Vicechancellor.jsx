import ViceChancellors from '../../data/vc';
import LeftHeading from '../common_comp/LeftHeading';

const Vicechancellor = () => {
    return (
        <>
            <div className='w-[90%] m-auto pt-5'>
                <LeftHeading name="ViceChancellor" />
            </div>

            {ViceChancellors.map((vc, index) => (
                <section key={index} className='w-[90%] flex flex-col m-auto py-[95px] gap-10'>
                    <div className={`flex flex-col-reverse md:flex-row justify-between gap-5`}>
                        {/* Conditional rendering to alternate image position */}
                        {index % 2 === 0 ? (
                            <>
                                <div className='w-full md:w-[40%] h-[350px] flex justify-center items-center m-auto'>
                                    <img className='max-w-[650px] w-full h-full flex justify-center object-contain' src={vc.Image} alt="" />
                                </div>
                                <div className='md:w-[60%] w-full flex-col gap-5 justify-center items-center'>
                                    <h1 className='text-lg font-bold'>{vc.Title}</h1>
                                    <div className='flex flex-wrap gap-4'>
                                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{vc.education}</div>
                                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{vc.experience}</div>
                                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{vc.connectAt}</div>
                                    </div>
                                    <p className="text-lg pt-4">{vc.about}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='md:w-[60%] w-full flex-col gap-5 justify-center items-center'>
                                    <h1 className='text-lg font-bold'>{vc.Title}</h1>
                                    <div className='flex flex-wrap gap-4'>
                                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{vc.education}</div>
                                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{vc.experience}</div>
                                        <div className='bg-gray-200 p-5 rounded-lg font-bold text-purple-900'>{vc.connectAt}</div>
                                    </div>
                                    <p className="text-lg pt-4">{vc.about}</p>
                                </div>
                                <div className='w-full md:w-[40%] h-[350px] flex justify-center items-center m-auto'>
                                    <img className='max-w-[650px] w-full h-full flex justify-center object-contain' src={vc.Image} alt="" />
                                </div>
                            </>
                        )}
                    </div>
                </section>
            ))}

        </>
    );
}

export default Vicechancellor;
